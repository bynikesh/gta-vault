import Link from 'next/link';
import { BookOpen, ArrowRight } from 'lucide-react';
import GuideCard from '@/components/cards/GuideCard';
import type { Guide } from '@/lib/types';

export default function TrendingGuides({ guides }: { guides: Guide[] }) {
  return (
    <section className="py-8" id="trending-guides">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="font-pricedown text-2xl sm:text-3xl text-ghost-white tracking-wide flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-electric-cyan/60" />
            Trending Guides
          </h2>
          <p className="text-sm text-muted mt-1">Master GTA 6 with our latest walkthroughs</p>
        </div>
        <Link href="/guides" className="hud-btn text-xs hidden sm:flex items-center gap-1.5">
          All Guides
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {guides.map((guide) => (
          <GuideCard key={guide.id} guide={guide} />
        ))}
      </div>
    </section>
  );
}
