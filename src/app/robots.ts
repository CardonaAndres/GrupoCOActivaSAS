import { MetadataRoute } from 'next';
import { SITE_URL } from '@/global/seo/site.config';

/**
 * Se declaran explícitamente los rastreadores de IA (bloque F del diagnóstico).
 * El comodín ya los cubría, pero la declaración explícita evita que un cambio
 * futuro en las reglas generales los excluya por accidente y deja constancia
 * de la decisión editorial de permitir el acceso.
 */
const AI_CRAWLERS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'CCBot',
  'meta-externalagent',
  'Bytespider',
  'cohere-ai',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: '/',
        disallow: ['/api/'],
      })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
