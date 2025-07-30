import { router } from "@/main/configs/config";

const navItems = [
    {
      name : 'Inicio',
      to : router.home
    },
    {
      name: 'Nosotros',
      to: router.about
    },
    {
      name: 'Servicios',
      to: router.services
    },
    {
      name: 'Blog',
      to: router.blogPage
    },
    {
      name: 'Contacto',
      to: router.contact
    },
    {
      name: 'Aliados',
      to: router.allies
    }
];

export const useNavHook = () => {
  return {
    navItems
  }
}