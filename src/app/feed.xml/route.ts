import { blogPosts } from '../blog-grupo-coactiva/data/posts.data';
import { postDates } from '../blog-grupo-coactiva/data/post-dates.data';
import { blogSeo, blogCategories } from '../blog-grupo-coactiva/data/blog-taxonomy.data';
import { orderedSlugs } from '../blog-grupo-coactiva/data/blog-pagination';
import { ARTICLE_AUTHOR } from '@/data/team/authors.data';
import { SITE_URL, SITE_NAME, NAP } from '@/global/seo/site.config';

/**
 * Canal de sindicación RSS (punto E5 del diagnóstico).
 *
 * `/feed.xml` y `/rss.xml` no resolvían. Es una vía habitual de descubrimiento
 * para agregadores y para los rastreadores que alimentan motores de IA.
 */

export const dynamic = 'force-static';

const escapeXml = (value: string): string =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

export async function GET() {
  const slugs = orderedSlugs();

  const items = slugs
    .map((slug) => {
      const post = blogPosts[slug];
      const seo = blogSeo[slug];
      const dates = postDates[slug];
      if (!post) return '';

      const url = `${SITE_URL}/blog-grupo-coactiva/${slug}`;
      const pubDate = new Date(
        `${dates?.updatedAt ?? dates?.publishedAt ?? '2026-08-22'}T12:00:00Z`
      ).toUTCString();

      return `    <item>
      <title>${escapeXml(seo?.seoTitle ?? post.content.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(seo?.description ?? post.seo.metaDescription)}</description>
      <pubDate>${pubDate}</pubDate>
      <dc:creator>${escapeXml(ARTICLE_AUTHOR.name)}</dc:creator>${
        seo ? `\n      <category>${escapeXml(blogCategories[seo.category].name)}</category>` : ''
      }
    </item>`;
    })
    .join('\n');

  const lastBuildDate = new Date().toUTCString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escapeXml(SITE_NAME)} — Blog de cobro y recuperación de cartera</title>
    <link>${SITE_URL}/blog-grupo-coactiva</link>
    <description>Guías sobre cobro de cartera, cobranza empresarial, recuperación de deudas e insolvencia en Colombia.</description>
    <language>es-CO</language>
    <copyright>${escapeXml(SITE_NAME)}</copyright>
    <managingEditor>${NAP.email} (${escapeXml(ARTICLE_AUTHOR.name)})</managingEditor>
    <webMaster>${NAP.email}</webMaster>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
