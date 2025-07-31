export const router = {
    home : '/',
    contact : '/comunicate-con-grupo-coactiva',
    about : '/quienes-somos-grupo-coactiva',
    services : '/servicios-de-cobranzas-en-grupo-coactiva',
    allies : '/aliados-estrategicos-grupo-coactiva',
    privacity : '/politica-de-privacidad-coactiva',
    FAQ : '/preguntas-frecuentes-cobranzas-coactiva',
    sedeMedellin : '/casa-de-cobranzas-en-medellin',
    sedeBogota : '/casa-de-cobranzas-en-bogota',
    bogotaUrlOne: '/abogados-cobranza-bogota',
    medellinUrlOne: '/abogados-cobranza-medellin',
    blogPage : '/nuestras-publicaciones-grupo-coactiva',
    blogPost : '/nuestra-publicacion/:slug',
}

export const coactiva_config = {
    domains : {
        one : 'https://grupocoactivasas.com',
    },
    cellphones : {
        one : '3018594940',
        oneToWhatsapp : `573018594940?text=${encodeURIComponent('¡Hola! Bienvenido a Grupo Coactiva SAS (Recuperación de Cartera Vencida Empresarial) ¿cuéntanos cómo podemos ayudarte hoy?')}`,
    },
    emails : {
        one : 'comercial@grupocoactivasas.com'
    },
    address : {
        one : 'Circular 76 #39B - 135 Laureles Medellín'
    },
    titles : {
        one : 'Coactiva',
        two : 'Grupo Coactiva S.A.S'
    }
}

export const sedes = {
    medellin: {
        city: 'Medellín',
        backgroundImage: '/backgroung_imgs/medellin.webp',
        email: 'comercial@grupocoactivasas.com',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0234567890123!2d-75.5678901234567!3d6.234567890123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44290123456789%3A0x1234567890abcdef!2sCircular%2076%20%23%2039B-135%2C%20Laureles%2C%20Medell%C3%ADn%2C%20Antioquia%2C%20Colombia!5e0!3m2!1ses!2sco!4v1234567890123!5m2!1ses!2sco',
        description: 'Tú enfócate en crecer, nosotros cobramos por ti.',
        highlights: ['Ubicación estratégica', 'Atención personalizada', 'Equipo especializado']
    },
    bogota: {
        city: 'Bogotá',
        backgroundImage: '/backgroung_imgs/bogota.webp',
        email: 'comercial@grupocoactivasas.com',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.433650761865!2d-74.06454699999999!3d4.694468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9ac52ff727b7%3A0xd1519e335fabf67e!2zQ2wuIDEwNiAjIDU0LTkzLCBTdWJhLCBCb2dvdMOhLCBELkMuLCBCb2dvdMOhLCBCb2dvdMOhLCBELkMu!5e0!3m2!1ses-419!2sco!4v1750735126127!5m2!1ses-419!2sco',
        description: 'Tú vendes, nosotros cobramos. Así de simple.',
        highlights: ['Ubicación estratégica', 'Atención personalizada', 'Equipo especializado']
    }   
}