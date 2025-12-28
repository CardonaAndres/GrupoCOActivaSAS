import { MapPin } from 'lucide-react';

const locations = [
  {
    id: 'medellin-laureles',
    name: 'Oficina Medellín',
    address: 'Circular 76 # 39B-135, Laureles',
    city: 'Medellín, Antioquia',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0234567890123!2d-75.5678901234567!3d6.234567890123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44290123456789%3A0x1234567890abcdef!2sCircular%2076%20%23%2039B-135%2C%20Laureles%2C%20Medell%C3%ADn%2C%20Antioquia%2C%20Colombia!5e0!3m2!1ses!2sco!4v1234567890123!5m2!1ses!2sco',
  },
  {
    id: 'bogota-zona-rosa',
    name: 'Oficina Bogotá',
    address: 'Carrera 13 # 85-32, Zona Rosa',
    city: 'Bogotá, Cundinamarca',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.433650761865!2d-74.06454699999999!3d4.694468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9ac52ff727b7%3A0xd1519e335fabf67e!2zQ2wuIDEwNiAjIDU0LTkzLCBTdWJhLCBCb2dvdMOhLCBELkMuLCBCb2dvdMOhLCBCb2dvdMOhLCBELkMu!5e0!3m2!1ses-419!2sco!4v1750735126127!5m2!1ses-419!2sco',
  }
];

export const LocationsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Nuestras Oficinas
            </h2>
            <div className="w-20 h-1 bg-cyan-700 mx-auto mb-4"></div>
            <p className="text-gray-600">
              Encuéntranos en nuestras sedes principales
            </p>
          </div>

          {/* Locations Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {locations.map((location) => (
              <div
                key={location.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* Map */}
                <div className="relative h-64 bg-gray-200">
                  <iframe
                    src={location.embedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Mapa de ${location.name}`}
                  />
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {location.name}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-cyan-700 shrink-0 mt-1" />
                      <div>
                        <p className="text-gray-700 font-medium">
                          {location.address}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {location.city}
                        </p>
                      </div>
                    </div>
                  </div>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address + ', ' + location.city)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-cyan-700 hover:text-cyan-800 font-semibold text-sm hover:underline"
                  >
                    Ver en Google Maps →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}