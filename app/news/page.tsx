import type { Metadata } from 'next';
import { getAllNews } from '@/lib/data';
import { generatePageMetadata } from '@/lib/seo';
import NewsCard from '@/components/cards/NewsCard';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import NewsletterBlock from '@/components/shared/NewsletterBlock';

export const metadata: Metadata = generatePageMetadata({
  title: 'GTA 6 News',
  description: 'The latest GTA 6 news, announcements, leaks, and analysis. Stay updated on everything Grand Theft Auto VI.',
  path: '/news',
  tags: ['GTA 6 news', 'GTA 6 announcements', 'GTA 6 updates', 'Rockstar news'],
});

export default function NewsPage() {
  const allNews = getAllNews();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
      <Breadcrumbs items={[{ label: 'News' }]} />

      <div className="mb-8">
        <h1 className="font-pricedown text-3xl sm:text-4xl text-ghost-white tracking-wide">
          GTA 6 <span className="text-neon-pink">News</span>
        </h1>
        <p className="text-muted mt-2">The latest announcements, analysis, and updates from the world of GTA 6.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
        {allNews.map((post) => (
          <NewsCard key={post.id} post={post} />
        ))}
      </div>

      <NewsletterBlock />
    </div>
  );
}
