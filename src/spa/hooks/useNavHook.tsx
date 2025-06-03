import { router } from "@/main/configs/config";

const navItems = [
    {
        name : 'Nosotros',
        to : router.about
    },
    {
        name : 'Contacto',
        to : router.contact
    }
];

export const useNavHook = () => {
  return {
    navItems
  }
}


