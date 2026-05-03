import type { Metadata } from 'next';
import { getAllMapPins } from '@/lib/data';
import { generatePageMetadata } from '@/lib/seo';
import MapFallback from '@/components/map/MapFallback';
import MapPageClient from './MapPageClient';

export const metadata: Metadata = generatePageMetadata({
  title: 'GTA 6 Interactive Map — Vice City Locations',
  description: 'Explore the GTA 6 Vice City interactive map. Find missions, collectibles, safehouses, businesses, and points of interest.',
  path: '/map',
  tags: ['GTA 6 map', 'Vice City map', 'GTA 6 locations', 'GTA 6 collectible locations'],
});

export default function MapPage() {
  const pins = getAllMapPins();

  return (
    <div className="pt-20 px-4 sm:px-6 lg:px-8 pb-4">
      {/* SEO-visible heading */}
      <div className="mb-4">
        <h1 className="font-pricedown text-2xl sm:text-3xl text-ghost-white tracking-wide">
          Vice City <span className="text-electric-cyan">Interactive Map</span>
        </h1>
        <p className="text-sm text-muted mt-1">
          Explore missions, collectibles, safehouses, and businesses across Vice City and Leonida.
        </p>
      </div>

      <MapPageClient pins={pins} />

      {/* No-JS fallback for SEO */}
      <MapFallback pins={pins} />
    </div>
  );
}
