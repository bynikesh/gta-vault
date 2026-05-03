import type { Metadata } from 'next';
import { getCollectibles } from '@/lib/data';
import { generatePageMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import RegistryGrid from '@/components/database/RegistryGrid';

export const metadata: Metadata = generatePageMetadata({
  title: 'GTA 6 Collectibles — Hidden Packages, Action Figures & More',
  description: 'Find every collectible in GTA 6. Locations and rewards for hidden packages, action figures, and secret items.',
  path: '/database/collectibles',
  tags: ['GTA 6 collectibles', 'GTA 6 hidden packages', 'GTA 6 action figures', 'GTA 6 100 percent'],
});

export default function CollectiblesPage() {
  const collectibles = getCollectibles();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
      <Breadcrumbs items={[{ label: 'Database', href: '/database' }, { label: 'Collectibles' }]} />

      <div className="mb-8">
        <h1 className="font-pricedown text-3xl sm:text-4xl text-ghost-white tracking-wide">
          💎 <span className="text-purple-400">Collectibles</span>
        </h1>
        <p className="text-muted mt-2">Hidden packages, action figures, and secret items across Vice City.</p>
      </div>

      <RegistryGrid entities={collectibles} title="collectibles" />
    </div>
  );
}
