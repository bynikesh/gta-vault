import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import NewsletterBlock from '@/components/shared/NewsletterBlock';

export const metadata: Metadata = generatePageMetadata({
  title: 'Newsletter — GTA 6 Updates Straight to Your Inbox',
  description: 'Subscribe to The GTA Vault newsletter for the latest GTA 6 news, map updates, and guide drops.',
  path: '/newsletter',
});

export default function NewsletterPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
      <Breadcrumbs items={[{ label: 'Newsletter' }]} />

      <div className="text-center mb-10">
        <h1 className="font-pricedown text-3xl sm:text-4xl text-ghost-white tracking-wide mb-3">
          Join the <span className="gradient-text">Vault</span>
        </h1>
        <p className="text-muted max-w-lg mx-auto">
          Get the latest GTA 6 news, map discoveries, database updates, and exclusive guides
          delivered straight to your inbox. No spam, ever.
        </p>
      </div>

      <NewsletterBlock />

      <div className="mt-10 glass rounded-xl p-6">
        <h2 className="font-pricedown text-xl text-ghost-white mb-4">What You&apos;ll Get</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="text-center p-4">
            <div className="text-2xl mb-2">📰</div>
            <h3 className="text-sm font-semibold text-ghost-white mb-1">Breaking News</h3>
            <p className="text-xs text-muted">First to know about GTA 6 updates</p>
          </div>
          <div className="text-center p-4">
            <div className="text-2xl mb-2">🗺️</div>
            <h3 className="text-sm font-semibold text-ghost-white mb-1">Map Updates</h3>
            <p className="text-xs text-muted">New locations and discoveries</p>
          </div>
          <div className="text-center p-4">
            <div className="text-2xl mb-2">📖</div>
            <h3 className="text-sm font-semibold text-ghost-white mb-1">Exclusive Guides</h3>
            <p className="text-xs text-muted">Strategies before anyone else</p>
          </div>
        </div>
      </div>
    </div>
  );
}
