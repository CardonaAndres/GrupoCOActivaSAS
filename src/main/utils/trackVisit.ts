// Declarar tipos para gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const trackUniqueVisit = (daysToWait: number = 7) => {
  // Verificar que estamos en el navegador
  if (typeof window === 'undefined') return;

  const lastVisit = localStorage.getItem('lastAdVisit');
  const now = new Date().getTime();
  const daysInMs = daysToWait * 24 * 60 * 60 * 1000;

  // Si no hay registro previo o ya pasó el tiempo configurado
  if (!lastVisit || (now - parseInt(lastVisit)) > daysInMs) {
    // Verificar que gtag esté disponible
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        'send_to': 'AW-17262857323/hqLbCIy_-eEaEOuYyadA',
        'event_category': 'engagement',
        'event_label': 'unique_visitor'
      });
      
      console.log('Visita única registrada en Google Ads');
    } else {
      console.warn('gtag no está disponible aún');
    }
    
    // Guardar el timestamp actual
    localStorage.setItem('lastAdVisit', now.toString());
  } else {
    // Calcular cuándo será la próxima visita registrable
    const nextVisit = parseInt(lastVisit) + daysInMs;
    const daysRemaining = Math.ceil((nextVisit - now) / (24 * 60 * 60 * 1000));
    console.log(`Visita ya registrada. Próximo registro en ${daysRemaining} días`);
  }
};

// Función opcional para resetear el tracking (útil para testing)
export const resetVisitTracking = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('lastAdVisit');
    console.log('Tracking de visitas reseteado');
  }
};

// Función opcional para verificar el estado actual
export const getVisitStatus = () => {
  if (typeof window === 'undefined') return null;
  
  const lastVisit = localStorage.getItem('lastAdVisit');
  if (!lastVisit) {
    return { status: 'never_visited', nextTrack: 'now' };
  }
  
  const now = new Date().getTime();
  const lastVisitDate = new Date(parseInt(lastVisit));
  const daysInMs = 7 * 24 * 60 * 60 * 1000;
  const nextVisit = parseInt(lastVisit) + daysInMs;
  const daysRemaining = Math.ceil((nextVisit - now) / (24 * 60 * 60 * 1000));
  
  return {
    status: 'tracked',
    lastVisit: lastVisitDate.toLocaleDateString('es-CO'),
    daysRemaining: daysRemaining > 0 ? daysRemaining : 0,
    canTrackNow: daysRemaining <= 0
  };
};