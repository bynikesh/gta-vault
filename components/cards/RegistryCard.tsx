import Link from 'next/link';
import { ArrowRight, Gauge, Zap, RotateCcw, ShieldCheck, User, Swords, Star } from 'lucide-react';
import TagBadge from '@/components/shared/TagBadge';
import type { RegistryEntity } from '@/lib/types';

const statIcons: Record<string, React.ElementType> = {
  speed: Gauge,
  acceleration: Zap,
  handling: RotateCcw,
  braking: ShieldCheck,
  role: User,
  threat: Swords,
  default: Star,
};

function getStatIcon(key: string) {
  return statIcons[key.toLowerCase()] || statIcons.default;
}

export default function RegistryCard({ entity }: { entity: RegistryEntity }) {
  const typeSlugMap: Record<string, string> = {
    vehicle: 'vehicles',
    character: 'characters',
    mission: 'missions',
    collectible: 'collectibles',
  };
  const typeSlug = typeSlugMap[entity.type] || entity.type;

  const numericStats = Object.entries(entity.stats).filter(
    ([, v]) => typeof v === 'number'
  ) as [string, number][];

  const stringStats = Object.entries(entity.stats).filter(
    ([, v]) => typeof v === 'string'
  ) as [string, string][];

  return (
    <Link href={`/database/${typeSlug}`} id={`registry-card-${entity.slug}`}>
      <article className="group relative rounded-xl overflow-hidden bg-[rgba(20,20,25,0.6)] backdrop-blur-[20px] border border-neon-pink/[0.08] hover:border-neon-pink/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(255,0,255,0.12),inset_0_0_15px_rgba(255,0,255,0.04)] h-full flex flex-col">
        {/* Clipped image container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <div className="absolute inset-0 bg-obsidian-mid" />
          <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/15 to-electric-cyan/10 group-hover:from-neon-pink/25 group-hover:to-electric-cyan/15 transition-all duration-500" />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[rgba(20,20,25,0.9)] to-transparent" />
          <div className="absolute top-3 left-3 z-10">
            <TagBadge tag={entity.category} size="md" />
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex-1 flex flex-col">
          <h3 className="font-semibold text-ghost-white mb-1 text-[15px] group-hover:text-white transition-colors">
            {entity.name}
          </h3>
          <p className="text-[12px] text-muted/80 mb-3 line-clamp-2 leading-relaxed">{entity.summary}</p>

          {/* Stat Bars with Icons */}
          {numericStats.length > 0 && (
            <div className="space-y-2 mt-auto">
              {numericStats.slice(0, 4).map(([key, value]) => {
                const IconComp = getStatIcon(key);
                return (
                  <div key={key}>
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-wider mb-0.5">
                      <span className="text-muted flex items-center gap-1">
                        <IconComp className="w-3 h-3 text-electric-cyan/50" />
                        {key}
                      </span>
                      <span className="text-ghost-white tabular-nums">{value}</span>
                    </div>
                    <div className="stat-bar-track">
                      <div className="stat-bar-fill" style={{ width: `${value}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* String Stats with Icons */}
          {stringStats.length > 0 && numericStats.length === 0 && (
            <div className="space-y-1.5 mt-auto">
              {stringStats.slice(0, 4).map(([key, value]) => {
                const IconComp = getStatIcon(key);
                return (
                  <div key={key} className="flex items-center justify-between text-xs">
                    <span className="text-muted capitalize flex items-center gap-1.5">
                      <IconComp className="w-3 h-3 text-electric-cyan/50" />
                      {key}
                    </span>
                    <span className="text-ghost-white">{value}</span>
                  </div>
                );
              })}
            </div>
          )}

          {/* CTA */}
          <div className="mt-3 pt-2 border-t border-white/5 flex items-center gap-1.5 text-neon-pink text-xs font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
            View Details
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </article>
    </Link>
  );
}
