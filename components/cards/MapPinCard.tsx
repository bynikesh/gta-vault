import Link from 'next/link';
import { MapPin as MapPinIcon, Target, Gem, Home as HomeIcon, Briefcase, Navigation } from 'lucide-react';
import type { MapPin } from '@/lib/types';
import { capitalize } from '@/lib/utils';

const categoryIcons: Record<string, React.ElementType> = {
  mission: Target,
  collectible: Gem,
  safehouse: HomeIcon,
  business: Briefcase,
  poi: Navigation,
};

const categoryColors: Record<string, string> = {
  mission: 'text-neon-pink',
  collectible: 'text-electric-cyan',
  safehouse: 'text-sunset-orange',
  business: 'text-green-400',
  poi: 'text-purple-400',
};

export default function MapPinCard({ pin }: { pin: MapPin }) {
  const Icon = categoryIcons[pin.category] || MapPinIcon;
  const color = categoryColors[pin.category] || 'text-electric-cyan';

  return (
    <Link href={`/map/${pin.slug}`} id={`pin-card-${pin.slug}`}>
      <div className="group relative rounded-lg p-3 bg-[rgba(20,20,25,0.6)] backdrop-blur-[20px] border border-electric-cyan/[0.08] hover:border-electric-cyan/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,255,255,0.1),inset_0_0_10px_rgba(0,255,255,0.03)] flex items-start gap-3">
        <div className={`w-10 h-10 rounded-lg bg-obsidian-mid/80 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 ${color}`}>
          <Icon className="w-5 h-5" />
        </div>
        <div className="min-w-0">
          <h4 className="text-sm font-semibold text-ghost-white group-hover:text-white transition-colors truncate">
            {pin.name}
          </h4>
          <p className="text-[10px] text-muted uppercase tracking-[0.12em] font-medium">
            {capitalize(pin.category)}
          </p>
        </div>
      </div>
    </Link>
  );
}
