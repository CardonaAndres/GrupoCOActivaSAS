import { router } from "@/main/configs/config";

const navItems = [
    {
        name : 'Nosotros',
        to : router.home
    },
    {
        name : 'Contacto',
        to : router.home
    }
];


export const useNavHook = () => {
  return {
    navItems
  }
}


