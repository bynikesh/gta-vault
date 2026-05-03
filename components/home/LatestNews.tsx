import Link from 'next/link';
import { Newspaper, ArrowRight } from 'lucide-react';
import NewsCard from '@/components/cards/NewsCard';
import type { NewsPost } from '@/lib/types';

export default function LatestNews({ posts }: { posts: NewsPost[] }) {
  return (
    <section className="py-8" id="latest-news">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="font-pricedown text-2xl sm:text-3xl text-ghost-white tracking-wide flex items-center gap-2">
            <Newspaper className="w-6 h-6 text-electric-cyan/60" />
            Latest News
          </h2>
          <p className="text-sm text-muted mt-1">Stay up to date with GTA 6 announcements</p>
        </div>
        <Link href="/news" className="hud-btn text-xs hidden sm:flex items-center gap-1.5">
          View All
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post) => (
          <NewsCard key={post.id} post={post} />
        ))}
      </div>
      <div className="mt-4 sm:hidden text-center">
        <Link href="/news" className="hud-btn text-xs inline-flex items-center gap-1.5">
          View All News
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  );
}
