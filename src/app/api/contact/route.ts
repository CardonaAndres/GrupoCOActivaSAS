import nodemailer from 'nodemailer';
import { normalizeWhatsAppPhone } from '@/lib/phone';
import { NextRequest, NextResponse } from 'next/server';

const NO_WHATSAPP_PLACEHOLDER = '0000000000';

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
    },
});

async function sendToCRM(params: {
    name: string;
    email: string;
    phone?: string;
    company?: string;
    message: string;
}) {
    const { CRM_URL, CRM_API_TOKEN, COMPANY_ID } = process.env;

    if (!CRM_URL || !CRM_API_TOKEN || !COMPANY_ID) {
        console.warn('CRM no configurado (faltan envs), se omite envío de lead');
        return;
    }

    const whatsappPhone = normalizeWhatsAppPhone(params.phone) ?? NO_WHATSAPP_PLACEHOLDER;

    const body: Record<string, unknown> = {
        idCompany: COMPANY_ID,
        name: params.name,
        email: params.email,
        phone: params.phone || undefined,
        whatsappPhone,
        source: 'web',
        metadata: {
            webForm: {
                company: params.company || null,
                message: params.message,
                submittedAt: new Date().toISOString(),
            },
        },
    };

    try {
        const res = await fetch(`${CRM_URL}/customers`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${CRM_API_TOKEN}`,
            },
            body: JSON.stringify(body),
        });

        if (!res.ok) {
            const errorText = await res.text().catch(() => '');
            console.error('Error al crear lead en CRM:', res.status, errorText);
        }
    } catch (err) {
        console.error('Error de red al contactar el CRM:', err);
    }
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, phone, company, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Por favor completa todos los campos obligatorios' },
                { status: 400 }
            );
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Por favor ingresa un correo electrónico válido' },
                { status: 400 }
            );
        }

        const [emailResult, crmResult] = await Promise.allSettled([
            transporter.sendMail({
                from: `Formulario Web <${process.env.SMTP_USER}>`,
                to: process.env.CONTACT_RECEIVER,
                replyTo: `"${name}" <${email}>`,
                subject: `Nuevo mensaje de contacto de ${name}`,
                html: `
                    <h2>Nuevo mensaje de contacto</h2>
                    <p><strong>Nombre:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Teléfono:</strong> ${phone || 'No proporcionado'}</p>
                    <p><strong>Empresa:</strong> ${company || 'No proporcionado'}</p>
                    <hr />
                    <p><strong>Mensaje:</strong></p>
                    <p>${message.replace(/\n/g, '<br/>')}</p>
                `,
            }),
            sendToCRM({ name, email, phone, company, message }),
        ]);

        if (emailResult.status === 'rejected') {
            console.error('Error sending email:', emailResult.reason);
        }
        if (crmResult.status === 'rejected') {
            console.error('Error sending lead to CRM:', crmResult.reason);
        }

        if (emailResult.status === 'rejected' && crmResult.status === 'rejected') {
            return NextResponse.json(
                { error: 'Hubo un error al enviar el mensaje. Por favor intenta nuevamente.' },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true }, { status: 200 });

    } catch (error) {
        console.error('Error processing contact request:', error);
        return NextResponse.json(
            { error: 'Hubo un error al enviar el mensaje. Por favor intenta nuevamente.' },
            { status: 500 }
        );
    }
}