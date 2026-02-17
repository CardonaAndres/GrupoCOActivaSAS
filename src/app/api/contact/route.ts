import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
    },
});
export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, phone, company, message } = body;

        // Validaciones
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

        await transporter.sendMail({
            from: `"${name}" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_RECEIVER,
            replyTo: email,
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
        });

        return NextResponse.json({ success: true }, { status: 200 });

    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Hubo un error al enviar el mensaje. Por favor intenta nuevamente.' },
            { status: 500 }
        );
    }
}