
type Allie = {
    name : string;
    logo: string;
}

export const useAlliesHook = () => {
    const partners : Allie[] = [
      {
        name: 'Empresa 1',
        logo: '/allies_logos/ATH.webp'
      },
      {
        name: 'Empresa 2',
        logo: '/allies_logos/vallas_y_avisos.webp'
      },
      {
        name: 'Empresa 3',
        logo: '/allies_logos/coltejer.webp'
      },
      {
        name: 'Empresa 4',
        logo: '/allies_logos/tubos_antioquia.webp'
      },
      {
        name: 'Empresa 5',
        logo: '/allies_logos/miro_seguridad.webp'
      },
      {
        name: 'Empresa 6',
        logo: '/allies_logos/blueberries.webp'
      },
      {
        name: 'Empresa 7',
        logo: '/allies_logos/procopal.webp'
      },
      {
        name: 'Empresa 8',
        logo: '/allies_logos/la_mansion.webp'
      },
      {
        name: 'Empresa 9',
        logo: '/allies_logos/soluciones_verticales.webp'
      },
      {
        name: 'Empresa 10',
        logo: '/allies_logos/casa_arango.webp'
      },
            {
        name: 'Empresa 11',
        logo: '/allies_logos/la_espiral.webp'
      },
      {
        name: 'Empresa 12',
        logo: '/allies_logos/masa.webp'
      },
      {
        name: 'Empresa 13',
        logo: '/allies_logos/naba.webp'
      },
            {
        name: 'Empresa 14',
        logo: '/allies_logos/elasticserver.webp'
      }
    ]

  return {
    partners
  }
}

