/**
 * Normaliza y valida un número de teléfono colombiano para WhatsApp.
 * - Acepta con o sin '+', con o sin '57', con espacios/guiones/paréntesis.
 * - Debe ser un celular colombiano: 10 dígitos empezando por 3
 *   (ej: 3018594940), o ese mismo número con prefijo 57 (12 dígitos).
 * - Devuelve el número normalizado como 57XXXXXXXXXX (sin '+'),
 *   o null si no es válido.
 */
export function normalizeWhatsAppPhone(raw?: string | null): string | null {
  if (!raw) return null;

  const digits = raw.replace(/\D/g, '');
  if (!digits) return null;

  let national: string;

  if (digits.length === 10 && digits.startsWith('3')) {
    national = digits;
  } else if (digits.length === 12 && digits.startsWith('57') && digits[2] === '3') {
    national = digits.slice(2);
  } else if (digits.length === 13 && digits.startsWith('057') && digits[3] === '3') {
    national = digits.slice(3);
  } else {
    return null;
  }

  if (!/^3\d{9}$/.test(national)) return null;

  return `57${national}`;
}