import Link from 'next/link';
import { PrivacyMetadata } from '@/global/metadata';
import { NAP, SITE_NAME } from '@/global/seo/site.config';

export const metadata = PrivacyMetadata;

/**
 * Punto I2 del diagnóstico: la página no tenía <h1> y su contenido estaba
 * vacío, pese a recibir 30 enlaces internos desde el pie de página.
 */
export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <section className="bg-gray-50 py-12 border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <nav aria-label="Ruta de navegación" className="mb-4">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
                <li>
                  <Link href="/" className="hover:text-cyan-700 hover:underline">
                    Inicio
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-gray-700">
                  Política de privacidad
                </li>
              </ol>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Política de Privacidad y Tratamiento de Datos Personales
            </h1>
            <p className="text-gray-600">
              {SITE_NAME} · Conforme a la Ley 1581 de 2012 y el Decreto 1377 de 2013
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-8 text-gray-700 leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                1. Responsable del tratamiento
              </h2>
              <p>
                {SITE_NAME}, sociedad comercial colombiana con sede principal en{' '}
                {NAP.medellin.street}, {NAP.medellin.locality}, {NAP.medellin.region}, es
                responsable del tratamiento de los datos personales recolectados a
                través de este sitio web. Puede contactarnos en{' '}
                <a
                  href={`mailto:${NAP.email}`}
                  className="text-cyan-700 hover:underline font-medium"
                >
                  {NAP.email}
                </a>{' '}
                o en el teléfono{' '}
                <a
                  href={`tel:${NAP.phoneE164}`}
                  className="text-cyan-700 hover:underline font-medium"
                >
                  {NAP.phone}
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                2. Datos que recolectamos
              </h2>
              <p className="mb-3">
                A través del formulario de contacto y de nuestros canales comerciales
                podemos recolectar los siguientes datos:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Nombre y apellidos de la persona de contacto.</li>
                <li>Razón social de la empresa.</li>
                <li>Correo electrónico y número de teléfono.</li>
                <li>
                  Información sobre la cartera cuya gestión se consulta, cuando el
                  usuario decide compartirla.
                </li>
                <li>
                  Datos de navegación anónimos o seudonimizados obtenidos mediante
                  herramientas de analítica web.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                3. Finalidad del tratamiento
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Atender solicitudes de información y consultas comerciales.</li>
                <li>
                  Elaborar propuestas de servicio de cobro, cobranza y recuperación de
                  cartera.
                </li>
                <li>Ejecutar los contratos de prestación de servicios suscritos.</li>
                <li>
                  Enviar comunicaciones informativas relacionadas con nuestros servicios,
                  siempre que el titular lo haya autorizado.
                </li>
                <li>Cumplir obligaciones legales y contables.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                4. Derechos del titular
              </h2>
              <p className="mb-3">
                Conforme al artículo 8 de la Ley 1581 de 2012, el titular de los datos
                tiene derecho a:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Conocer, actualizar y rectificar sus datos personales.</li>
                <li>
                  Solicitar prueba de la autorización otorgada para el tratamiento.
                </li>
                <li>
                  Ser informado sobre el uso que se ha dado a sus datos personales.
                </li>
                <li>
                  Presentar quejas ante la Superintendencia de Industria y Comercio por
                  infracciones a la normativa de protección de datos.
                </li>
                <li>
                  Revocar la autorización y solicitar la supresión de sus datos, cuando
                  no exista un deber legal o contractual que lo impida.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                5. Cómo ejercer sus derechos
              </h2>
              <p>
                Las solicitudes de consulta, actualización, rectificación, revocación o
                supresión pueden dirigirse al correo{' '}
                <a
                  href={`mailto:${NAP.email}`}
                  className="text-cyan-700 hover:underline font-medium"
                >
                  {NAP.email}
                </a>
                , indicando el nombre del titular, la solicitud concreta y un medio de
                contacto. Las consultas se atienden en un término máximo de diez (10)
                días hábiles y los reclamos en quince (15) días hábiles, prorrogables en
                los términos de ley.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                6. Seguridad y conservación
              </h2>
              <p>
                Aplicamos medidas técnicas, humanas y administrativas razonables para
                proteger la información contra pérdida, uso indebido, acceso no
                autorizado o alteración. Los datos se conservan durante el tiempo
                necesario para cumplir la finalidad que motivó su recolección y las
                obligaciones legales aplicables.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                7. Cookies y analítica
              </h2>
              <p>
                Este sitio utiliza cookies propias y de terceros con fines de analítica
                y medición de campañas. El usuario puede configurar su navegador para
                bloquearlas o eliminarlas; hacerlo no impide el uso del sitio, aunque
                puede limitar algunas funcionalidades.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                8. Vigencia y cambios
              </h2>
              <p>
                Esta política rige desde su publicación y puede actualizarse para
                reflejar cambios normativos u operativos. Cualquier modificación
                sustancial se comunicará a través de este mismo sitio web.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
