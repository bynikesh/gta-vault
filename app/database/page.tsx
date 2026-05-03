import type { Metadata } from 'next';
import Link from 'next/link';
import { Car, Users, Target, Gem, ArrowRight } from 'lucide-react';
import { generatePageMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/shared/Breadcrumbs';

export const metadata: Metadata = generatePageMetadata({
  title: 'GTA 6 Database — Vehicles, Characters, Missions & Collectibles',
  description: 'Browse the complete GTA 6 database. Explore vehicles, characters, missions, and collectibles with detailed stats and information.',
  path: '/database',
  tags: ['GTA 6 database', 'GTA 6 vehicles', 'GTA 6 characters', 'GTA 6 missions'],
});

const categories = [
  {
    title: 'Vehicles',
    href: '/database/vehicles',
    icon: Car,
    description: 'Supercars, muscle cars, motorcycles, boats, and aircraft.',
    gradient: 'from-electric-cyan/20 to-neon-pink/10',
    accent: 'text-electric-cyan',
    border: 'hover:border-electric-cyan/30',
    glow: 'hover:shadow-[0_0_30px_rgba(0,255,255,0.12)]',
  },
  {
    title: 'Characters',
    href: '/database/characters',
    icon: Users,
    description: 'Protagonists, antagonists, allies, and key NPCs.',
    gradient: 'from-neon-pink/20 to-sunset-orange/10',
    accent: 'text-neon-pink',
    border: 'hover:border-neon-pink/30',
    glow: 'hover:shadow-[0_0_30px_rgba(255,0,255,0.12)]',
  },
  {
    title: 'Missions',
    href: '/database/missions',
    icon: Target,
    description: 'Story missions, side quests, heists, and activities.',
    gradient: 'from-sunset-orange/20 to-neon-pink/10',
    accent: 'text-sunset-orange',
    border: 'hover:border-sunset-orange/30',
    glow: 'hover:shadow-[0_0_30px_rgba(255,140,0,0.12)]',
  },
  {
    title: 'Collectibles',
    href: '/database/collectibles',
    icon: Gem,
    description: 'Hidden packages, action figures, and secret items.',
    gradient: 'from-purple-500/20 to-electric-cyan/10',
    accent: 'text-purple-400',
    border: 'hover:border-purple-400/30',
    glow: 'hover:shadow-[0_0_30px_rgba(170,102,255,0.12)]',
  },
];

export default function DatabasePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
      <Breadcrumbs items={[{ label: 'Database' }]} />

      <div className="mb-10">
        <h1 className="font-pricedown text-3xl sm:text-4xl text-ghost-white tracking-wide">
          GTA 6 <span className="gradient-text">Database</span>
        </h1>
        <p className="text-muted mt-2">Your comprehensive registry of everything in GTA 6.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <Link key={cat.href} href={cat.href} id={`db-${cat.title.toLowerCase()}`}>
              <div className={`group relative rounded-xl p-6 overflow-hidden h-full bg-[rgba(20,20,25,0.6)] backdrop-blur-[20px] border border-white/[0.06] ${cat.border} ${cat.glow} transition-all duration-300 hover:scale-[1.02]`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-lg bg-obsidian-mid/80 flex items-center justify-center mb-4 ${cat.accent}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h2 className={`font-pricedown text-2xl ${cat.accent} tracking-wide mb-2`}>
                    {cat.title}
                  </h2>
                  <p className="text-sm text-muted leading-relaxed">{cat.description}</p>

                  <div className={`mt-4 flex items-center gap-1.5 ${cat.accent} text-xs font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300`}>
                    Browse {cat.title}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
