import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllEvents, getEventBySlug } from '@/lib/data';
import { generatePageMetadata, generateEventJsonLd } from '@/lib/seo';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import TagBadge from '@/components/shared/TagBadge';
import JsonLd from '@/components/shared/JsonLd';
import { formatDate } from '@/lib/utils';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllEvents().map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return {};
  return generatePageMetadata({
    title: event.title,
    description: event.summary,
    path: `/events/${event.slug}`,
    tags: event.tags,
  });
}

export default async function EventPage({ params }: Props) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  const jsonLd = generateEventJsonLd({
    name: event.title,
    description: event.summary,
    url: `https://thegtavault.com/events/${event.slug}`,
    startDate: event.startDate,
    endDate: event.endDate,
    location: event.location,
    image: event.featuredImage,
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
      <JsonLd data={jsonLd} />
      <Breadcrumbs items={[{ label: 'Events', href: '/events' }, { label: event.title }]} />

      <article>
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            {event.isLive && (
              <span className="inline-flex items-center gap-1 bg-red-500/90 px-2 py-0.5 rounded text-[10px] font-bold uppercase text-white">
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" /> Live
              </span>
            )}
            {event.tags.map((tag) => (
              <TagBadge key={tag} tag={tag} />
            ))}
          </div>
          <h1 className="font-pricedown text-3xl sm:text-4xl text-ghost-white tracking-wide mb-4">
            {event.title}
          </h1>

          <div className="glass rounded-lg p-4 space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-muted">Start:</span>
              <span className="text-ghost-white">{formatDate(event.startDate)}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-muted">End:</span>
              <span className="text-ghost-white">{formatDate(event.endDate)}</span>
            </div>
            {event.location && (
              <div className="flex items-center gap-2 text-sm">
                <span className="text-muted">Location:</span>
                <span className="text-ghost-white">{event.location}</span>
              </div>
            )}
          </div>
        </header>

        <div className="aspect-video rounded-xl bg-obsidian-mid mb-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-sunset-orange/15 to-neon-pink/10" />
        </div>

        <p className="text-ghost-white/80 leading-relaxed text-[15px]">{event.summary}</p>
      </article>
    </div>
  );
}
