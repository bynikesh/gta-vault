import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllMapPins, getMapPinBySlug } from '@/lib/data';
import { generatePageMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import TagBadge from '@/components/shared/TagBadge';
import { capitalize } from '@/lib/utils';
import Link from 'next/link';

interface Props {
  params: Promise<{ 'location-id': string }>;
}

export async function generateStaticParams() {
  return getAllMapPins().map((p) => ({ 'location-id': p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { 'location-id': slug } = await params;
  const pin = getMapPinBySlug(slug);
  if (!pin) return {};
  return generatePageMetadata({
    title: `${pin.name} — GTA 6 Map Location`,
    description: pin.description,
    path: `/map/${pin.slug}`,
    tags: pin.tags,
  });
}

export default async function LocationPage({ params }: Props) {
  const { 'location-id': slug } = await params;
  const pin = getMapPinBySlug(slug);
  if (!pin) notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
      <Breadcrumbs items={[{ label: 'Map', href: '/map' }, { label: pin.name }]} />

      <article>
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <TagBadge tag={pin.category} size="md" />
          </div>
          <h1 className="font-pricedown text-3xl sm:text-4xl text-ghost-white tracking-wide mb-3">
            {pin.name}
          </h1>
          <p className="text-sm text-muted">
            {capitalize(pin.category)} · Coordinates: {pin.lat.toFixed(3)}, {pin.lng.toFixed(3)}
          </p>
        </header>

        <div className="aspect-video rounded-xl bg-obsidian-mid mb-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-electric-cyan/15 to-neon-pink/10" />
        </div>

        <div className="glass rounded-xl p-6 mb-8">
          <p className="text-ghost-white/80 leading-relaxed">{pin.description}</p>
        </div>

        {pin.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {pin.tags.map((tag) => (
              <TagBadge key={tag} tag={tag} />
            ))}
          </div>
        )}

        <Link href="/map" className="hud-btn hud-btn-cyan">
          ← Back to Map
        </Link>
      </article>
    </div>
  );
}
