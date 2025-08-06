export const FloatingElements = ({  }: { animationDuration: string }) => (
  <>
    {/* Círculos flotantes grandes - Versión móvil optimizada */}
    <div className="absolute top-20 right-4 sm:right-8 w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-cyan-100/40 to-cyan-200/60 animate-pulse"></div>
    <div className="absolute top-32 left-4 sm:left-8 w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-teal-100/30 to-teal-200/50 animate-bounce" style={{ animationDuration: '3s' }}></div>
    <div className="absolute top-1/2 right-8 sm:right-16 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-cyan-200/50 to-cyan-300/70 animate-ping" style={{ animationDuration: '2s' }}></div>
    
    {/* Formas geométricas flotantes */}
    <div className="absolute top-1/4 left-1/4 w-6 h-6 sm:w-8 sm:h-8 rotate-45 bg-gradient-to-br from-teal-200/40 to-cyan-200/60 animate-spin" style={{ animationDuration: '8s' }}></div>
    <div className="absolute bottom-1/3 left-8 sm:left-16 w-10 h-10 sm:w-14 sm:h-14 rotate-12 bg-gradient-to-br from-cyan-100/50 to-teal-100/70 animate-pulse"></div>
    
    {/* Círculos más pequeños para llenar espacios */}
    <div className="absolute top-2/3 right-1/4 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-cyan-200/40 animate-bounce" style={{ animationDuration: '4s' }}></div>
    <div className="absolute bottom-1/4 right-8 sm:right-12 w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-teal-200/50 animate-pulse" style={{ animationDuration: '3s' }}></div>
    
    {/* Elementos adicionales para desktop */}
    <div className="hidden sm:block absolute top-1/3 left-1/2 w-16 h-16 rounded-full border-2 border-cyan-200/30 animate-spin" style={{ animationDuration: '10s' }}></div>
    <div className="hidden lg:block absolute bottom-1/2 left-1/3 w-20 h-20 rounded-full bg-gradient-to-br from-teal-100/20 to-cyan-100/40 animate-pulse" style={{ animationDuration: '5s' }}></div>
    
    {/* Partículas flotantes más sutiles */}
    <div className="absolute top-1/5 right-1/3 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-cyan-300/60 animate-ping" style={{ animationDuration: '1.5s' }}></div>
    <div className="absolute bottom-2/3 left-2/3 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-teal-300/60 animate-ping" style={{ animationDuration: '2.5s' }}></div>

    {/* ===== NUEVOS ELEMENTOS FLOTANTES ===== */}
    
    {/* Líneas flotantes decorativas */}
    <div className="absolute top-1/6 left-12 sm:left-20 w-16 h-0.5 sm:w-24 sm:h-1 bg-gradient-to-r from-cyan-300/40 to-transparent rotate-12 animate-pulse" style={{ animationDuration: '4s' }}></div>
    <div className="absolute bottom-1/3 right-1/3 w-12 h-0.5 sm:w-18 sm:h-1 bg-gradient-to-l from-teal-300/50 to-transparent -rotate-12 animate-pulse" style={{ animationDuration: '3.5s' }}></div>
    
    {/* Triángulos */}
    <div className="absolute top-1/3 right-4 sm:right-12 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[12px] sm:border-l-[12px] sm:border-r-[12px] sm:border-b-[18px] border-l-transparent border-r-transparent border-b-cyan-200/50 animate-bounce" style={{ animationDuration: '5s' }}></div>
    <div className="absolute bottom-1/2 left-6 sm:left-12 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[10px] sm:border-l-[10px] sm:border-r-[10px] sm:border-t-[14px] border-l-transparent border-r-transparent border-t-teal-200/40 animate-pulse" style={{ animationDuration: '6s' }}></div>
    
    {/* Hexágonos usando clip-path */}
    <div className="absolute top-2/5 left-1/3 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-200/40 to-cyan-300/60 animate-spin" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', animationDuration: '12s' }}></div>
    <div className="absolute bottom-2/5 right-1/4 w-6 h-6 sm:w-10 sm:h-10 bg-gradient-to-br from-teal-200/30 to-teal-300/50 animate-pulse" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', animationDuration: '4.5s' }}></div>
    
    {/* Ondas concéntricas */}
    <div className="absolute top-1/2 left-1/5 w-20 h-20 sm:w-32 sm:h-32 rounded-full border border-cyan-200/20 animate-ping" style={{ animationDuration: '3s' }}></div>
    <div className="absolute top-1/2 left-1/5 w-16 h-16 sm:w-24 sm:h-24 rounded-full border border-cyan-300/30 animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}></div>
    <div className="absolute top-1/2 left-1/5 w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-cyan-400/40 animate-ping" style={{ animationDuration: '2s', animationDelay: '1s' }}></div>
    
    {/* Estrellas usando pseudo-elementos simulados con divs */}
    <div className="absolute top-1/4 right-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-cyan-300/60 rotate-45 animate-pulse" style={{ animationDuration: '2s' }}>
      <div className="absolute inset-0 w-full h-full bg-cyan-300/60 rotate-45"></div>
    </div>
    <div className="absolute bottom-1/4 left-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-teal-300/50 rotate-45 animate-pulse" style={{ animationDuration: '3s' }}>
      <div className="absolute inset-0 w-full h-full bg-teal-300/50 rotate-45"></div>
    </div>
    
    {/* Elipses alargadas */}
    <div className="absolute top-3/4 right-1/5 w-16 h-4 sm:w-24 sm:h-6 bg-gradient-to-r from-cyan-100/30 to-cyan-200/50 rounded-full rotate-45 animate-pulse" style={{ animationDuration: '4.5s' }}></div>
    <div className="absolute top-1/5 left-2/3 w-12 h-3 sm:w-18 sm:h-4 bg-gradient-to-r from-teal-100/40 to-teal-200/60 rounded-full -rotate-12 animate-bounce" style={{ animationDuration: '5.5s' }}></div>
    
    {/* Círculos con bordes punteados */}
    <div className="absolute bottom-1/5 right-2/3 w-14 h-14 sm:w-20 sm:h-20 rounded-full border-2 border-dashed border-cyan-200/40 animate-spin" style={{ animationDuration: '15s' }}></div>
    <div className="absolute top-3/5 left-1/4 w-10 h-10 sm:w-14 sm:h-14 rounded-full border border-dotted border-teal-300/50 animate-pulse" style={{ animationDuration: '3.8s' }}></div>
    
    {/* Más partículas pequeñas distribuidas */}
    <div className="absolute top-1/8 right-1/5 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyan-400/70 animate-ping" style={{ animationDuration: '1.8s' }}></div>
    <div className="absolute top-3/8 left-1/8 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-teal-400/60 animate-ping" style={{ animationDuration: '2.2s' }}></div>
    <div className="absolute bottom-1/8 left-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyan-300/80 animate-ping" style={{ animationDuration: '1.3s' }}></div>
    <div className="absolute top-5/8 right-1/8 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-teal-300/70 animate-ping" style={{ animationDuration: '2.8s' }}></div>
    
    {/* Cuadrados con diferentes rotaciones */}
    <div className="absolute top-2/3 left-1/6 w-5 h-5 sm:w-7 sm:h-7 bg-gradient-to-br from-cyan-200/40 to-cyan-300/60 rotate-12 animate-spin" style={{ animationDuration: '9s' }}></div>
    <div className="absolute bottom-1/6 right-1/6 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-br from-teal-200/30 to-teal-300/50 -rotate-45 animate-pulse" style={{ animationDuration: '4.2s' }}></div>
    
    {/* Elementos solo para pantallas más grandes */}
    <div className="hidden md:block absolute top-1/6 left-3/4 w-28 h-28 rounded-full border border-cyan-100/20 animate-spin" style={{ animationDuration: '20s' }}></div>
    <div className="hidden lg:block absolute bottom-1/6 left-1/8 w-24 h-8 bg-gradient-to-r from-teal-100/20 to-cyan-100/30 rounded-full rotate-6 animate-pulse" style={{ animationDuration: '6s' }}></div>
  </>
);