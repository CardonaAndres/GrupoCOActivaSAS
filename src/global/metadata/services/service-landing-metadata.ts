import type { Metadata } from 'next';
import { serviceLandings } from '@/data/service-pages/service-landing.data';
import { absoluteUrl, SITE_NAME, LOCALE } from '@/global/seo/site.config';

export const buildServiceLandingMetadata = (slug: string): Metadata => {
  const data = serviceLandings[slug];
  if (!data) return {};

  const url = absoluteUrl(`/${data.slug}`);

  return {
    title: data.seoTitle,
    description: data.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: data.h1,
      description: data.metaDescription,
      type: 'website',
      locale: LOCALE,
      url,
      siteName: SITE_NAME,
    },
    twitter: {
      card: 'summary_large_image',
      title: data.h1,
      description: data.metaDescription,
    },
  };
};
