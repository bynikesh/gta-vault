import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllGuides, getGuideBySlug } from '@/lib/data';
import { generatePageMetadata, generateGuideJsonLd } from '@/lib/seo';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import TagBadge from '@/components/shared/TagBadge';
import JsonLd from '@/components/shared/JsonLd';
import NewsletterBlock from '@/components/shared/NewsletterBlock';
import { formatDate } from '@/lib/utils';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllGuides().map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return generatePageMetadata({
    title: guide.title,
    description: guide.summary,
    path: `/guides/${guide.slug}`,
    type: 'article',
    publishedTime: guide.datePublished,
    modifiedTime: guide.dateUpdated,
    tags: guide.tags,
  });
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const jsonLd = generateGuideJsonLd({
    title: guide.title,
    description: guide.summary,
    url: `https://thegtavault.com/guides/${guide.slug}`,
    image: guide.featuredImage,
    datePublished: guide.datePublished,
    dateModified: guide.dateUpdated,
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
      <JsonLd data={jsonLd} />
      <Breadcrumbs items={[{ label: 'Guides', href: '/guides' }, { label: guide.title }]} />

      <article>
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            {guide.difficulty && <TagBadge tag={guide.difficulty} size="md" />}
            {guide.tags.map((tag) => (
              <TagBadge key={tag} tag={tag} />
            ))}
          </div>
          <h1 className="font-pricedown text-3xl sm:text-4xl text-ghost-white tracking-wide mb-3">
            {guide.title}
          </h1>
          <div className="flex items-center gap-3 text-sm text-muted">
            <time>{formatDate(guide.datePublished)}</time>
            {guide.estimatedTime && (
              <>
                <span>·</span>
                <span>⏱ {guide.estimatedTime}</span>
              </>
            )}
          </div>
        </header>

        <div className="aspect-video rounded-xl bg-obsidian-mid mb-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-electric-cyan/15 to-neon-pink/10" />
        </div>

        <div
          className="prose prose-invert prose-pink max-w-none mb-12
            [&_h2]:font-pricedown [&_h2]:text-xl [&_h2]:text-ghost-white [&_h2]:tracking-wide [&_h2]:mt-8 [&_h2]:mb-4
            [&_p]:text-ghost-white/80 [&_p]:leading-relaxed [&_p]:text-[15px]
            [&_strong]:text-electric-cyan
            [&_a]:text-neon-pink [&_a]:no-underline hover:[&_a]:underline"
          dangerouslySetInnerHTML={{ __html: guide.content }}
        />
      </article>

      <div className="mt-12">
        <NewsletterBlock />
      </div>
    </div>
  );
}
