import { Metadata } from "next";
import { blogPosts } from "@/app/blog-grupo-coactiva/data/posts.data";
import { blogSeo, blogCategories } from "@/app/blog-grupo-coactiva/data/blog-taxonomy.data";
import { postDates } from "@/app/blog-grupo-coactiva/data/post-dates.data";
import { ARTICLE_AUTHOR } from "@/data/team/authors.data";
import { absoluteUrl, SITE_NAME, LOCALE } from "@/global/seo/site.config";

export async function generateBlogSlugMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return { title: "Artículo no encontrado", robots: { index: false, follow: true } };
  }

  const seo = blogSeo[slug];
  const dates = postDates[slug];

  // Título absoluto: los artículos no arrastran la marca, evitando la
  // duplicación por template y manteniéndose dentro de los 60 caracteres.
  const title = seo?.seoTitle ?? post.content.title;
  const description = seo?.description ?? post.seo.metaDescription;
  const url = absoluteUrl(`/blog-grupo-coactiva/${slug}`);

  return {
    title: { absolute: title },
    description,
    authors: [{ name: ARTICLE_AUTHOR.name, url: ARTICLE_AUTHOR.profileUrl }],
    category: seo ? blogCategories[seo.category].name : undefined,

    alternates: { canonical: url },

    openGraph: {
      title,
      description,
      type: "article",
      locale: LOCALE,
      url,
      siteName: SITE_NAME,
      publishedTime: dates?.publishedAt,
      modifiedTime: dates?.updatedAt ?? dates?.publishedAt,
      authors: [ARTICLE_AUTHOR.name],
      section: seo ? blogCategories[seo.category].name : undefined,
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
