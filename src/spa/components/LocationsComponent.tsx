import { useState } from 'react';
import { motion } from 'framer-motion';
import { Building } from 'lucide-react';

interface Location {
  id: string;
  name: string;
  address: string;
  city: string;
  embedUrl: string;
  description?: string;
}

const locations: Location[] = [
  {
    id: 'medellin-laureles',
    name: 'Oficina Principal Medellín',
    address: 'Circular 76 # 39B-135, Laureles',
    city: 'Medellín, Antioquia',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0234567890123!2d-75.5678901234567!3d6.234567890123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44290123456789%3A0x1234567890abcdef!2sCircular%2076%20%23%2039B-135%2C%20Laureles%2C%20Medell%C3%ADn%2C%20Antioquia%2C%20Colombia!5e0!3m2!1ses!2sco!4v1234567890123!5m2!1ses!2sco',
    description: ''
  },
  {
    id: 'bogota-zona-rosa',
    name: 'Oficina Bogotá',
    address: 'Carrera 13 # 85-32, Zona Rosa',
    city: 'Bogotá, Cundinamarca',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.433650761865!2d-74.06454699999999!3d4.694468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9ac52ff727b7%3A0xd1519e335fabf67e!2zQ2wuIDEwNiAjIDU0LTkzLCBTdWJhLCBCb2dvdMOhLCBELkMuLCBCb2dvdMOhLCBCb2dvdMOhLCBELkMu!5e0!3m2!1ses-419!2sco!4v1750735126127!5m2!1ses-419!2sco',
    description: ''
  }
];

interface LocationsComponentProps {
  styles: {
    text: {
      primary: string;
      darkGray: string;
      gray: string;
    };
  };
}

export const LocationsComponent: React.FC<LocationsComponentProps> = ({ styles }) => {
  const [activeLocation, setActiveLocation] = useState<string>(locations[0].id);

  const currentLocation = locations.find(loc => loc.id === activeLocation) || locations[0];

  return (
    <motion.div 
      whileHover={{ scale: 1.01 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100"
    >
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Building className={`w-6 h-6 ${styles.text.primary}`} />
          <h4 className={`font-semibold ${styles.text.darkGray}`}>
            Nuestras Ubicaciones
          </h4>
        </div>
        
        <p className={`${styles.text.gray} mb-6`}>
          Visítanos en cualquiera de nuestras oficinas a nivel nacional
        </p>

        {/* Selector de ubicaciones */}
        <div className="flex flex-wrap gap-2 mb-4">
          {locations.map((location) => (
            <button
              key={location.id}
              onClick={() => setActiveLocation(location.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeLocation === location.id
                  ? `${styles.text.primary} bg-blue-50 border-2 border-blue-200`
                  : `${styles.text.gray} bg-gray-50 border-2 border-transparent hover:bg-gray-100`
              }`}
            >
              {location.city.split(',')[0]}
            </button>
          ))}
        </div>

        {/* Información de la ubicación activa */}
        <motion.div
          key={activeLocation}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-4"
        >
        </motion.div>
      </div>

      {/* Mapa de la ubicación activa */}
      <div className="h-64 relative">
        <motion.iframe
          key={activeLocation}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          src={currentLocation.embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
          title={`Mapa de ${currentLocation.name}`}
        />
      </div>
    </motion.div>
  );
};