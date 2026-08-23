import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/global/seo/og-image';
import { totalBlogPages } from '../../data/blog-pagination';

export function generateStaticParams() {
  const total = totalBlogPages();
  return Array.from({ length: Math.max(total - 1, 0) }, (_, index) => ({
    page: String(index + 2),
  }));
}

export const alt = 'Blog de Grupo Coactiva SAS';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: 'Blog',
    title: 'Cobro y recuperación de cartera',
    subtitle: 'Guías jurídicas para empresas acreedoras en Colombia',
  });
}
