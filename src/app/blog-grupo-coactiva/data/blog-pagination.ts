import { blogPosts } from './posts.data';
import { postDates } from './post-dates.data';

/**
 * Punto E6 / G del diagnóstico: el índice del blog servía los 23 artículos en
 * una sola página de 158 KB con 24 encabezados H2. Se pagina a 9 artículos por
 * página para reducir el peso y repartir mejor la autoridad interna.
 */
export const BLOG_PAGE_SIZE = 9;

/** Slugs ordenados del más reciente al más antiguo. */
export const orderedSlugs = (): string[] =>
  Object.keys(blogPosts).sort((a, b) => {
    const dateA = postDates[a]?.publishedAt ?? '';
    const dateB = postDates[b]?.publishedAt ?? '';
    return dateB.localeCompare(dateA);
  });

export const totalBlogPages = (): number =>
  Math.max(1, Math.ceil(Object.keys(blogPosts).length / BLOG_PAGE_SIZE));

export const slugsForPage = (page: number): string[] => {
  const start = (page - 1) * BLOG_PAGE_SIZE;
  return orderedSlugs().slice(start, start + BLOG_PAGE_SIZE);
};
