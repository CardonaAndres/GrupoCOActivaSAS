import { SITE_URL, absoluteUrl } from '@/global/seo/site.config';

/**
 * Autoría humana verificable (bloque C del diagnóstico: E-E-A-T).
 *
 * Google aplica criterios reforzados de autoría en contenido jurídico y
 * financiero. Aquí se declara el autor real, con credenciales y perfiles
 * verificables; el schema `Person` reemplaza al `Organization` que firmaba
 * antes los 23 artículos.
 *
 * Para firmar artículos con otros abogados del equipo basta con añadirlos a
 * `authors` y mapear el slug del artículo en `postAuthors`.
 */
export interface Author {
  id: string;
  name: string;
  jobTitle: string;
  bio: string;
  image: string;
  profileUrl: string;
  schemaId: string;
  sameAs: string[];
}

export const authors: Record<string, Author> = {
  'esteban-restrepo': {
    id: 'esteban-restrepo',
    name: 'Esteban Restrepo',
    jobTitle: 'Socio-Fundador y Director Jurídico',
    bio: 'Abogado y director jurídico de Grupo Coactiva SAS. Más de 15 años dirigiendo procesos de cobro de cartera empresarial, procesos ejecutivos e insolvencia en Colombia.',
    image: `${SITE_URL}/imgs/people/esteban-restrepo.webp`,
    profileUrl: absoluteUrl('/quienes-somos-grupo-coactiva'),
    schemaId: `${SITE_URL}/#esteban-restrepo`,
    sameAs: [
      'https://www.linkedin.com/in/estebanrestrepoo',
      'https://www.instagram.com/estebanrlegal',
    ],
  },
};

/** Autor por defecto de los artículos mientras no se asigne uno específico. */
export const ARTICLE_AUTHOR = authors['esteban-restrepo'];

/** Asignación explícita de autor por artículo. Si falta, se usa ARTICLE_AUTHOR. */
export const postAuthors: Record<string, string> = {};

export const authorForPost = (slug: string): Author =>
  authors[postAuthors[slug]] ?? ARTICLE_AUTHOR;
