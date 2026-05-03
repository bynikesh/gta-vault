import type { Metadata } from 'next';
import { getMissions } from '@/lib/data';
import { generatePageMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import RegistryGrid from '@/components/database/RegistryGrid';

export const metadata: Metadata = generatePageMetadata({
  title: 'GTA 6 Missions — Story, Heists & Side Quests',
  description: 'Complete list of GTA 6 missions including story missions, heists, and side activities with rewards and requirements.',
  path: '/database/missions',
  tags: ['GTA 6 missions', 'GTA 6 heists', 'GTA 6 story missions', 'GTA 6 mission list'],
});

export default function MissionsPage() {
  const missions = getMissions();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
      <Breadcrumbs items={[{ label: 'Database', href: '/database' }, { label: 'Missions' }]} />

      <div className="mb-8">
        <h1 className="font-pricedown text-3xl sm:text-4xl text-ghost-white tracking-wide">
          🎯 <span className="text-sunset-orange">Missions</span>
        </h1>
        <p className="text-muted mt-2">Story missions, heists, and side activities in GTA 6.</p>
      </div>

      <RegistryGrid entities={missions} title="missions" accentColor="sunset-orange" />
    </div>
  );
}
