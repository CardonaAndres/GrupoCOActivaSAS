'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/nuestros-servicios/insolvencia', label: 'Insolvencia' },
  { href: '/nuestros-servicios/cobro-de-cartera', label: 'Cobro de cartera' },
  { href: '/quienes-somos-grupo-coactiva', label: 'Nosotros' },
  { href: '/comunicate-con-grupo-coactiva', label: 'Contacto' },
  { href: '/blog-grupo-coactiva', label: 'Blog' },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 group"
            aria-label="Grupo Coactiva SAS - Inicio"
          >
            <Image
              src='/imgs/logos/logo-full.png'
              alt='Logo | Grupo Coactiva S.A.S'
              width={140}
              height={40}
              className="w-25 sm:w-30 md:w-32.5 h-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-cyan-600 font-medium transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-700 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Contact Info & CTA - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/comunicate-con-grupo-coactiva"
              className="bg-cyan-700 hover:bg-cyan-600 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Solicitar Consulta
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-cyan-600 transition-colors"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-3 border-t border-gray-200">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-gray-700 hover:text-cyan-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 space-y-3 border-t border-gray-200">
              <Link
                href="/comunicate-con-grupo-coactiva"
                className="block w-full bg-cyan-700 hover:bg-cyan-600 text-white text-center px-6 py-3 rounded-lg font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Solicitar Consulta
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}