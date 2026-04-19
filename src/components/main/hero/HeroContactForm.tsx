'use client';

import { FormEvent, useState } from 'react';
import { Loader2, CheckCircle, XCircle, Send } from 'lucide-react';

type FormData = {
  nombre: string;
  telefono: string;
  empresa: string;
  cargo: string;
  email: string;
  ciudad: string;
  caso: string;
};

type Status = 'idle' | 'success' | 'error';

export const HeroContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    telefono: '',
    empresa: '',
    cargo: '',
    email: '',
    ciudad: '',
    caso: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');
    setErrorMessage('');

    try {
      const message = [
        `Cargo: ${formData.cargo || 'No proporcionado'}`,
        `Ciudad: ${formData.ciudad || 'No proporcionada'}`,
        ``,
        `Caso:`,
        formData.caso,
      ].join('\n');

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.nombre,
          email: formData.email,
          phone: formData.telefono,
          company: formData.empresa,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error || 'Error al enviar');

      setStatus('success');
      setFormData({
        nombre: '',
        telefono: '',
        empresa: '',
        cargo: '',
        email: '',
        ciudad: '',
        caso: '',
      });

      setTimeout(() => setStatus('idle'), 6000);
    } catch (error: any) {
      setStatus('error');
      setErrorMessage(
        error.message || 'Hubo un error. Por favor intenta nuevamente.'
      );
    } finally {
      setLoading(false);
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center h-full py-10 text-center gap-4 animate-in fade-in duration-500">
        <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-green-400" />
        </div>
        <h3 className="text-white font-bold text-xl">¡Mensaje enviado!</h3>
        <p className="text-white/70 text-sm max-w-xs">
          Uno de nuestros asesores se pondrá en contacto contigo muy pronto.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
      {/* Header del formulario */}
      <div className="mb-1">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-50 mb-1">
          Consulta gratuita
        </p>
        <h2 className="text-white font-bold text-xl leading-tight">
          Cuéntenos su caso
        </h2>
      </div>

      {/* Error */}
      {status === 'error' && (
        <div className="flex items-start gap-2 bg-red-500/10 border border-red-500/30 rounded-lg p-3">
          <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
          <p className="text-red-300 text-xs">{errorMessage}</p>
        </div>
      )}

      {/* Grid 2 columnas */}
      <div className="grid grid-cols-2 gap-2.5">
        <Field
          label="Nombre *"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Juan Pérez"
          required
          disabled={loading}
        />
        <Field
          label="Teléfono *"
          name="telefono"
          type="tel"
          value={formData.telefono}
          onChange={handleChange}
          placeholder="+57 300 000 0000"
          required
          disabled={loading}
        />
        <Field
          label="Empresa *"
          name="empresa"
          value={formData.empresa}
          onChange={handleChange}
          placeholder="Nombre empresa"
          required
          disabled={loading}
        />
        <Field
          label="Cargo"
          name="cargo"
          value={formData.cargo}
          onChange={handleChange}
          placeholder="Gerente / Director"
          disabled={loading}
        />
        <Field
          label="Email *"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="correo@empresa.com"
          required
          disabled={loading}
        />
        <Field
          label="Ciudad *"
          name="ciudad"
          value={formData.ciudad}
          onChange={handleChange}
          placeholder="Medellín"
          required
          disabled={loading}
        />
      </div>

      {/* Textarea ocupa todo el ancho */}
      <div className="flex flex-col gap-1">
        <label className="text-white/60 text-[11px] font-semibold uppercase tracking-wider">
          Cuéntanos tu caso *
        </label>
        <textarea
          name="caso"
          value={formData.caso}
          onChange={handleChange}
          required
          disabled={loading}
          rows={3}
          placeholder="Describe brevemente la situación de tu cartera vencida..."
          className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-cyan-400 focus:bg-white/15 transition resize-none disabled:opacity-50"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 bg-cyan-800 hover:bg-cyan-700 disabled:bg-cyan-950 disabled:cursor-not-allowed text-white font-bold py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-cyan-500/30 text-sm uppercase tracking-widest mt-1"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Enviar consulta
          </>
        )}
      </button>

      <p className="text-white/30 text-[10px] text-center">
        * Campos obligatorios · Sus datos están protegidos
      </p>
    </form>
  );
};

/* ── Campo reutilizable ── */
interface FieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
}

const Field = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = 'text',
  required,
  disabled,
}: FieldProps) => (
  <div className="flex flex-col gap-1">
    <label className="text-white/60 text-[11px] font-semibold uppercase tracking-wider">
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-cyan-400 focus:bg-white/15 transition disabled:opacity-50"
    />
  </div>
);