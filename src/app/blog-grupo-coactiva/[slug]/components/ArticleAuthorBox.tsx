import Link from 'next/link';
import Image from 'next/image';
import { Author } from '@/data/team/authors.data';

interface Props {
  author: Author;
}

/**
 * Ficha de autor al pie del artículo.
 *
 * Bloque C del diagnóstico: en contenido jurídico Google valora la autoría
 * humana identificable con credenciales verificables. La ficha acompaña al
 * schema `Person` con una señal visible para el lector.
 */
export const ArticleAuthorBox = ({ author }: Props) => (
  <section className="py-12 bg-white border-t border-gray-100">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto rounded-xl border border-gray-100 bg-gray-50 p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start">
        <div className="relative w-24 h-24 shrink-0 rounded-full overflow-hidden bg-white">
          <Image
            src="/imgs/people/esteban-restrepo.webp"
            alt={`Fotografía de ${author.name}, ${author.jobTitle} de Grupo Coactiva SAS`}
            fill
            sizes="96px"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan-700 mb-1">
            Escrito por
          </p>
          <h2 className="text-xl font-bold text-gray-900">{author.name}</h2>
          <p className="text-gray-600 text-sm mb-3">{author.jobTitle}</p>
          <p className="text-gray-700 mb-4">{author.bio}</p>
          <div className="flex flex-wrap gap-4 text-sm font-semibold">
            <Link href={author.profileUrl} className="text-cyan-700 hover:underline">
              Conocer al equipo
            </Link>
            {author.sameAs.map((url) => (
              <a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer me"
                className="text-cyan-700 hover:underline"
              >
                {url.includes('linkedin') ? 'LinkedIn' : 'Instagram'}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
