import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Linkedin, Instagram } from 'lucide-react';

const quickLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/quienes-somos-grupo-coactiva', label: 'Nosotros' },
  { href: '/comunicate-con-grupo-coactiva', label: 'Contacto' },
  { href: '/blog-grupo-coactiva', label: 'Blog' },
];

const serviceLinks = [
  { href: '/nuestros-servicios/insolvencia', label: 'Insolvencia' },
  { href: '/nuestros-servicios/cobro-de-cartera', label: 'Cobro de Cartera' },
];

const socialLinks = [
  {
    href: 'http://linkedin.com/in/estebanrestrepoo',
    icon: Linkedin,
    label: 'LinkedIn',
  },
  {
    href: 'https://www.instagram.com/estebanrlegal',
    icon: Instagram,
    label: 'Esteban Restrepo',
  },
  {
    href: 'https://www.instagram.com/grupocoactiva',
    icon: Instagram,
    label: 'Grupo Coactiva',
  },
];

const currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image 
                src="/imgs/logos/logo-full.png"
                alt="Grupo Coactiva S.A.S | Logo"
                width={140}
                height={40}
                className="w-32 h-auto"
              />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed border-l-4 border-cyan-800 pl-4">
              Soluciones jurídicas claras y efectivas para deudas, cartera vencida e insolvencias.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-cyan-800 font-bold text-lg mb-6 uppercase tracking-wide">
              Enlaces
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-700 hover:text-cyan-800 hover:pl-2 transition-all duration-200 inline-block font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-cyan-800 font-bold text-lg mb-6 uppercase tracking-wide">
              Servicios
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-700 hover:text-cyan-800 hover:pl-2 transition-all duration-200 inline-block font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-cyan-800 font-bold text-lg mb-6 uppercase tracking-wide">
              Contacto
            </h4>
            <div className="space-y-4 mb-6">
              <a
                href="tel:+573001234567"
                className="flex items-center gap-3 text-gray-700 hover:text-cyan-800 transition-colors group"
              >
                <div className="bg-cyan-800 text-white p-2 rounded-lg group-hover:bg-cyan-900 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-medium text-sm">+57 3018594940</span>
              </a>
              <a
                href="mailto:info@grupocoactivasas.com"
                className="flex items-center gap-3 text-gray-700 hover:text-cyan-800 transition-colors group"
              >
                <div className="bg-cyan-800 text-white p-2 rounded-lg group-hover:bg-cyan-900 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-medium text-sm break-all">comercial@grupocoactivasas.com</span>
              </a>
            </div>

            {/* Social Links */}
            <div>
              <h5 className="text-gray-700 font-semibold mb-3">Síguenos</h5>
              <div className="space-y-2">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 hover:text-cyan-800 transition-colors group"
                    >
                      <div className="bg-cyan-800 text-white p-2 rounded-lg group-hover:bg-cyan-900 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-medium text-sm">{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-cyan-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="font-medium">
              © {currentYear} Grupo Coactiva S.A.S. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <Link
                href="/politica-de-privacidad-coactiva"
                className="hover:text-cyan-200 transition-colors font-medium underline-offset-4 hover:underline"
              >
                Política de Privacidad
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}