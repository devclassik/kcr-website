import type { Metadata } from 'next';
import { BlogDetailClient } from '@/components/BlogDetailClient';
import { INITIAL_BLOG_POSTS } from '@/data/blogData';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return INITIAL_BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = INITIAL_BLOG_POSTS.find((p) => p.slug.toLowerCase() === slug.toLowerCase() || p.id === slug);

  if (!post) {
    return {
      title: 'Article Not Found | KCR Nig Ltd Blog',
      description: 'The requested technical article could not be found.',
    };
  }

  return {
    title: `${post.title} | KCR Engineering Blog`,
    description: post.excerpt,
    keywords: post.tags,
    alternates: {
      canonical: `https://kolacrenee.com.ng/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | KCR Nig Ltd`,
      description: post.excerpt,
      url: `https://kolacrenee.com.ng/blog/${post.slug}`,
      siteName: 'KCR Nig Ltd',
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  return <BlogDetailClient slug={slug} />;
}
