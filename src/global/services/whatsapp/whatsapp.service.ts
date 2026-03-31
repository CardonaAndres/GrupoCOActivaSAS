

export class WhatsAppService {
    static readonly DEFAULT_NUMBER = "3018594940";
    static readonly DEFAULT_PHONE_NUMBER = "573018594940";
    static readonly DEFAULT_MESSAGE ="¡Hola! Bienvenido a Grupo Coactiva SAS (Recuperación de Cartera Vencida Empresarial) ¿cuéntanos cómo podemos ayudarte hoy?";

    static getWhatsAppUrl(
        whatsappNumber = WhatsAppService.DEFAULT_NUMBER, 
        whatsappMessage = WhatsAppService.DEFAULT_MESSAGE
    ): string{
        return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    }

    static trackWhatsAppConversion(): void {
        if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
            (window as any).gtag('event', 'conversion', {
                send_to: 'AW-17262857323/9XLrCPH-6ZIcEOuYyadA'
            });
        }
    }
}
