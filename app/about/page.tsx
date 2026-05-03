import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/shared/Breadcrumbs';

export const metadata: Metadata = generatePageMetadata({
  title: 'About The GTA Vault',
  description: 'Learn about The GTA Vault — your ultimate utility hub for GTA 6 news, interactive maps, databases, and guides.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
      <Breadcrumbs items={[{ label: 'About' }]} />

      <h1 className="font-pricedown text-3xl sm:text-4xl text-ghost-white tracking-wide mb-6">
        About <span className="gradient-text">The GTA Vault</span>
      </h1>

      <div className="space-y-6 text-ghost-white/80 leading-relaxed">
        <div className="glass rounded-xl p-6">
          <h2 className="font-pricedown text-xl text-neon-pink mb-3">Our Mission</h2>
          <p>
            The GTA Vault is built to be the most comprehensive, fastest, and most useful GTA 6 utility hub on the web.
            We combine breaking news, an interactive Vice City map, a detailed game database, and in-depth guides
            into a single, high-performance platform designed for hardcore fans and casual players alike.
          </p>
        </div>

        <div className="glass rounded-xl p-6">
          <h2 className="font-pricedown text-xl text-electric-cyan mb-3">What We Offer</h2>
          <ul className="space-y-2 list-disc list-inside">
            <li><strong className="text-ghost-white">Latest News</strong> — Real-time coverage of GTA 6 announcements, leaks, and analysis.</li>
            <li><strong className="text-ghost-white">Interactive Map</strong> — Explore Vice City with searchable pins for missions, collectibles, and more.</li>
            <li><strong className="text-ghost-white">Game Database</strong> — Detailed entries for vehicles, characters, missions, and collectibles.</li>
            <li><strong className="text-ghost-white">Guides & Walkthroughs</strong> — Expert strategies for every aspect of GTA 6.</li>
            <li><strong className="text-ghost-white">Event Tracker</strong> — Stay on top of in-game events and community challenges.</li>
          </ul>
        </div>

        <div className="glass rounded-xl p-6">
          <h2 className="font-pricedown text-xl text-sunset-orange mb-3">Disclaimer</h2>
          <p className="text-sm text-muted">
            The GTA Vault is a fan-made project and is not affiliated with, endorsed by, or connected to Rockstar Games,
            Take-Two Interactive, or any of their subsidiaries. Grand Theft Auto, GTA, Vice City, and all related marks
            are trademarks of their respective owners. All game content and materials referenced are property of their
            respective publishers and developers.
          </p>
        </div>
      </div>
    </div>
  );
}
