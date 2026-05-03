import CountdownHero from '@/components/home/CountdownHero';
import LatestNews from '@/components/home/LatestNews';
import PopularPins from '@/components/home/PopularPins';
import TrendingGuides from '@/components/home/TrendingGuides';
import NewsletterBlock from '@/components/shared/NewsletterBlock';
import JsonLd from '@/components/shared/JsonLd';
import AdSlot from '@/components/layout/AdSlot';
import { getSiteConfig, getLatestNews, getFeaturedMapPins, getFeaturedGuides } from '@/lib/data';
import { generateWebsiteJsonLd } from '@/lib/seo';

export default function HomePage() {
  const config = getSiteConfig();
  const latestNews = getLatestNews(3);
  const popularPins = getFeaturedMapPins(5);
  const trendingGuides = getFeaturedGuides(3);

  return (
    <>
      <JsonLd data={generateWebsiteJsonLd()} />

      <CountdownHero launchDate={config.launchDate} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdSlot type="banner" className="my-4" />

        <LatestNews posts={latestNews} />

        <PopularPins pins={popularPins} />

        <AdSlot type="banner" className="my-4" />

        <TrendingGuides guides={trendingGuides} />

        <div className="py-12">
          <NewsletterBlock />
        </div>
      </div>
    </>
  );
}
