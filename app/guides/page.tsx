import type { Metadata } from 'next';
import { getAllGuides } from '@/lib/data';
import { generatePageMetadata } from '@/lib/seo';
import GuideCard from '@/components/cards/GuideCard';
import Breadcrumbs from '@/components/shared/Breadcrumbs';

export const metadata: Metadata = generatePageMetadata({
  title: 'GTA 6 Guides',
  description: 'Comprehensive GTA 6 guides, walkthroughs, and tips for missions, collectibles, money-making, and more.',
  path: '/guides',
  tags: ['GTA 6 guides', 'GTA 6 walkthrough', 'GTA 6 tips'],
});

export default function GuidesPage() {
  const guides = getAllGuides();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
      <Breadcrumbs items={[{ label: 'Guides' }]} />

      <div className="mb-8">
        <h1 className="font-pricedown text-3xl sm:text-4xl text-ghost-white tracking-wide">
          GTA 6 <span className="text-electric-cyan">Guides</span>
        </h1>
        <p className="text-muted mt-2">Master every aspect of GTA 6 with our detailed walkthroughs and strategies.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {guides.map((guide) => (
          <GuideCard key={guide.id} guide={guide} />
        ))}
      </div>
    </div>
  );
}
