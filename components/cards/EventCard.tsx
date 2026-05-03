import Link from 'next/link';
import { ArrowRight, CalendarDays } from 'lucide-react';
import TagBadge from '@/components/shared/TagBadge';
import { formatDate } from '@/lib/utils';
import type { GameEvent } from '@/lib/types';

export default function EventCard({ event }: { event: GameEvent }) {
  return (
    <Link href={`/events/${event.slug}`} id={`event-card-${event.slug}`}>
      <article className="group relative rounded-xl overflow-hidden bg-[rgba(20,20,25,0.6)] backdrop-blur-[20px] border border-sunset-orange/[0.08] hover:border-sunset-orange/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(255,140,0,0.12),inset_0_0_15px_rgba(255,140,0,0.04)] h-full flex flex-col">
        {/* Clipped image container */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <div className="absolute inset-0 bg-obsidian-mid" />
          <div className="absolute inset-0 bg-gradient-to-br from-sunset-orange/20 to-neon-pink/10 group-hover:from-sunset-orange/30 group-hover:to-neon-pink/20 transition-all duration-500" />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[rgba(20,20,25,0.9)] to-transparent" />
          {event.isLive && (
            <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-red-500/90 px-2 py-0.5 rounded text-[10px] font-bold uppercase text-white z-10">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              Live
            </div>
          )}
          <div className="absolute bottom-3 left-3 flex gap-1.5 z-10">
            <TagBadge tag={event.category} />
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex-1 flex flex-col">
          <div className="flex items-center gap-1.5 mb-1.5">
            <CalendarDays className="w-3 h-3 text-sunset-orange/60" />
            <time className="text-[10px] text-muted uppercase tracking-[0.12em] font-medium">{formatDate(event.startDate)}</time>
            <span className="text-[10px] text-obsidian-border">→</span>
            <time className="text-[10px] text-muted uppercase tracking-[0.12em] font-medium">{formatDate(event.endDate)}</time>
          </div>
          <h3 className="font-semibold text-ghost-white mb-2 line-clamp-2 text-[15px] leading-snug group-hover:text-white transition-colors">
            {event.title}
          </h3>
          <p className="text-[13px] text-muted/80 line-clamp-2 leading-relaxed flex-1">{event.summary}</p>

          <div className="mt-3 flex items-center gap-1.5 text-sunset-orange text-xs font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
            View Event
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </article>
    </Link>
  );
}
