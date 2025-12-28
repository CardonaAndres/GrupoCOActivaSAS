import Image from 'next/image';

const partners = [
  {
    name: 'Aliado 1',
    logo: '/imgs/allies/vallas_y_avisos.webp',
  },
  {
    name: 'Aliado 2',
    logo: '/imgs/allies/procopal.webp',
  },
  {
    name: 'Aliado 3',
    logo: '/imgs/allies/miro_seguridad.webp',
  },
  {
    name: 'Aliado 4',
    logo: '/imgs/allies/la_mansion.webp',
  },
  {
    name: 'Aliado 5',
    logo: '/imgs/allies/casa_arango.webp',
  },
  {
    name: 'Aliado 6',
    logo: '/imgs/allies/ATH.webp',
  },
];

export const PartnersSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Nuestros Aliados
          </h2>
          <div className="w-24 h-1 bg-cyan-800 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            Empresas que confían en nuestra experiencia y profesionalismo
          </p>
        </div>

        {/* Partners Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300 group"
              >
                <Image
                  src={partner.logo}
                  alt={`${partner.name} | Logo`}
                  width={120}
                  height={60}
                  className="w-full h-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}