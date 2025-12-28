import { Metadata } from "next";
import { blogPosts } from "@/app/blog-grupo-coactiva/data/posts.data";

export async function generateBlogSlugMetadata({ params }: { params: Promise<{ slug: string }>; }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return {
      title: 'Artículo no encontrado',
    };
  }

  return {
    title: post.seo.title,
    description: post.seo.metaDescription,
    keywords: post.seo.metaTags.keywords.split(', '),
    authors: [{ name: post.seo.metaTags.author }],
    openGraph: {
      title: post.seo.metaTags.title,
      description: post.seo.metaTags.description,
      type: 'article',
      locale: 'es_CO',
      url: `https://grupocoactivasas.com/blog-grupo-coactiva/${slug}`,
      siteName: 'Grupo Coactiva SAS',
      images: [
        {
          url: post.images[0].url,
          alt: post.images[0].alt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seo.metaTags.title,
      description: post.seo.metaTags.description,
      images: [post.images[0].url],
    },
    alternates: {
      canonical: `https://grupocoactivasas.com/blog-grupo-coactiva/${slug}`,
    },
  };
}