import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllNews, getNewsBySlug } from '@/lib/data';
import { generatePageMetadata, generateNewsJsonLd } from '@/lib/seo';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import TagBadge from '@/components/shared/TagBadge';
import JsonLd from '@/components/shared/JsonLd';
import NewsletterBlock from '@/components/shared/NewsletterBlock';
import { formatDate } from '@/lib/utils';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllNews().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getNewsBySlug(slug);
  if (!post) return {};
  return generatePageMetadata({
    title: post.title,
    description: post.summary,
    path: `/news/${post.slug}`,
    type: 'article',
    publishedTime: post.datePublished,
    modifiedTime: post.dateUpdated,
    tags: post.tags,
  });
}

export default async function NewsPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getNewsBySlug(slug);
  if (!post) notFound();

  const jsonLd = generateNewsJsonLd({
    title: post.title,
    description: post.summary,
    url: `https://thegtavault.com/news/${post.slug}`,
    image: post.featuredImage,
    datePublished: post.datePublished,
    dateModified: post.dateUpdated,
    author: post.author,
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
      <JsonLd data={jsonLd} />
      <Breadcrumbs items={[{ label: 'News', href: '/news' }, { label: post.title }]} />

      <article>
        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.map((tag) => (
              <TagBadge key={tag} tag={tag} />
            ))}
          </div>
          <h1 className="font-pricedown text-3xl sm:text-4xl text-ghost-white tracking-wide mb-3">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-sm text-muted">
            <time>{formatDate(post.datePublished)}</time>
            {post.source && (
              <>
                <span>·</span>
                <span>Source: {post.source}</span>
              </>
            )}
          </div>
        </header>

        {/* Featured image area */}
        <div className="aspect-video rounded-xl bg-obsidian-mid mb-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/15 to-electric-cyan/10" />
        </div>

        {/* Content */}
        <div
          className="prose prose-invert prose-pink max-w-none mb-12
            [&_h2]:font-pricedown [&_h2]:text-xl [&_h2]:text-ghost-white [&_h2]:tracking-wide [&_h2]:mt-8 [&_h2]:mb-4
            [&_p]:text-ghost-white/80 [&_p]:leading-relaxed [&_p]:text-[15px]
            [&_strong]:text-neon-pink
            [&_a]:text-electric-cyan [&_a]:no-underline hover:[&_a]:underline"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      <div className="mt-12">
        <NewsletterBlock />
      </div>
    </div>
  );
}
