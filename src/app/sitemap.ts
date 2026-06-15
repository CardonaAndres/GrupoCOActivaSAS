import { MetadataRoute } from 'next';
import { blogPosts } from './blog-grupo-coactiva/data/posts.data';
import { postDates } from './blog-grupo-coactiva/data/post-dates.data';
import { cityLandingData } from '@/data/local-pages/city-landing.data';

const BASE_URL = 'https://www.grupocoactivasas.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/nuestros-servicios/cobro-de-cartera`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/quienes-somos-grupo-coactiva`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/comunicate-con-grupo-coactiva`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog-grupo-coactiva`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/politica-de-privacidad-coactiva`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  const blogRoutes: MetadataRoute.Sitemap = Object.keys(blogPosts).map((slug) => ({
    url: `${BASE_URL}/blog-grupo-coactiva/${slug}`,
    lastModified: postDates[slug]?.updatedAt ?? postDates[slug]?.publishedAt ?? new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const cityRoutes: MetadataRoute.Sitemap = Object.keys(cityLandingData).map((ciudad) => ({
    url: `${BASE_URL}/cobro-de-cartera/${ciudad}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  return [...staticRoutes, ...blogRoutes, ...cityRoutes];
}