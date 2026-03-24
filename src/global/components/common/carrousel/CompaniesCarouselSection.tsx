import { ClientCarousel, type Company } from './ClientCarousel';

export const COMPANIES: Company[] = [
  { name: '01', logo: '/imgs/allies/ATH.webp', width: 140, height: 98 },
  { name: '02', logo: '/imgs/allies/casa_arango.webp', width: 140, height: 98 },
  { name: '03', logo: '/imgs/allies/la_mansion.webp', width: 140, height: 98 },
  { name: '04', logo: '/imgs/allies/miro_seguridad.webp', width: 140, height: 98 },
  { name: '05', logo: '/imgs/allies/procopal.webp', width: 140, height: 98 },
  { name: '06', logo: '/imgs/allies/vallas_y_avisos.webp', width: 140,  height: 98 },
  { name: '07', logo: '/imgs/allies/argos.JPG', width: 140,  height: 98 },
  { name: '08', logo: '/imgs/allies/bm.PNG', width: 140,  height: 98 },
  { name: '09', logo: '/imgs/allies/brinks.PNG', width: 140,  height: 98 },
  { name: '10', logo: '/imgs/allies/camara-comercio-bogota.PNG', width: 140,  height: 98 },
  { name: '11', logo: '/imgs/allies/eco-petrol.JPG', width: 140,  height: 98 },
  { name: '12', logo: '/imgs/allies/mayra.png', width: 140,  height: 98 },
  { name: '13', logo: '/imgs/allies/yamaha.JPG', width: 140,  height: 98 },
];

export const CompaniesCarouselSection = () => {
  return (
    <section className="py-8 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-800 mb-3">
            Empresas que confían en nosotros
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            <span className="relative inline-block">
              <span className="relative z-10 text-cyan-800">Estas empresas</span>
              {/* Underline decorativo */}
              <span
                className="absolute bottom-0.5 left-0 w-full h-2 bg-cyan-100 z-0 rounded"
                aria-hidden="true"
              />
            </span>{' '}
            ya recuperaron su cartera
          </h2>
          <p className="mt-4 text-base text-gray-500 max-w-lg mx-auto">
            Compañías de distintos sectores nos han confiado el cobro de su cartera vencida con resultados comprobados.
          </p>
        </div>

        {/* Carousel (Client Island) */}
        <ClientCarousel companies={COMPANIES} />

        {/* Bottom divider label */}
        <div className="flex items-center gap-4 mt-14 max-w-xs mx-auto">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest whitespace-nowrap">
            15 años de experiencia
          </span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

      </div>
    </section>
  );
};