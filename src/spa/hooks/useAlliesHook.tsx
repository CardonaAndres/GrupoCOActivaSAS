
type Allie = {
    name : string;
    logo: string;
}

export const useAlliesHook = () => {
    const partners : Allie[] = [
      {
        name: 'Empresa 1',
        logo: '/allies_logos/ATH.jpeg'
      },
      {
        name: 'Empresa 2',
        logo: '/allies_logos/vallas_y_avisos.png'
      },
      {
        name: 'Empresa 3',
        logo: '/allies_logos/coltejer.jpeg'
      },
      {
        name: 'Empresa 4',
        logo: '/allies_logos/tubos_antioquia.jpeg'
      },
      {
        name: 'Empresa 5',
        logo: '/allies_logos/miro_seguridad.jpeg'
      },
      {
        name: 'Empresa 6',
        logo: '/allies_logos/blueberries.png'
      },
      {
        name: 'Empresa 7',
        logo: '/allies_logos/procopal.jpeg'
      },
      {
        name: 'Empresa 8',
        logo: '/allies_logos/la_mansion.jpeg'
      },
      {
        name: 'Empresa 9',
        logo: '/allies_logos/soluciones_verticales.png'
      },
      {
        name: 'Empresa 10',
        logo: '/allies_logos/casa_arango.jpg'
      },
            {
        name: 'Empresa 11',
        logo: '/allies_logos/la_espiral.jpeg'
      },
      {
        name: 'Empresa 12',
        logo: '/allies_logos/masa.png'
      },
      {
        name: 'Empresa 13',
        logo: '/allies_logos/naba.png'
      },
            {
        name: 'Empresa 14',
        logo: '/allies_logos/elasticserver.jpg'
      }
    ]

  return {
    partners
  }
}

