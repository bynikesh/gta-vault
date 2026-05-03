import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import TagBadge from '@/components/shared/TagBadge';
import type { Guide } from '@/lib/types';

export default function GuideCard({ guide }: { guide: Guide }) {
  return (
    <Link href={`/guides/${guide.slug}`} id={`guide-card-${guide.slug}`}>
      <article className="group relative rounded-xl overflow-hidden bg-[rgba(20,20,25,0.6)] backdrop-blur-[20px] border border-electric-cyan/[0.08] hover:border-electric-cyan/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(0,255,255,0.12),inset_0_0_15px_rgba(0,255,255,0.04)] h-full flex flex-col">
        {/* Clipped image container */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <div className="absolute inset-0 bg-obsidian-mid" />
          <div className="absolute inset-0 bg-gradient-to-br from-electric-cyan/15 to-neon-pink/10 group-hover:from-electric-cyan/25 group-hover:to-neon-pink/15 transition-all duration-500" />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[rgba(20,20,25,0.9)] to-transparent" />
          <div className="absolute bottom-3 left-3 flex gap-1.5 z-10">
            {guide.difficulty && <TagBadge tag={guide.difficulty} />}
            <TagBadge tag={guide.category} />
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex-1 flex flex-col">
          {guide.estimatedTime && (
            <div className="flex items-center gap-1.5 mb-1.5">
              <Clock className="w-3 h-3 text-electric-cyan/60" />
              <span className="text-[10px] text-muted uppercase tracking-[0.12em] font-medium">{guide.estimatedTime}</span>
            </div>
          )}
          <h3 className="font-semibold text-ghost-white mb-2 line-clamp-2 text-[15px] leading-snug group-hover:text-white transition-colors">
            {guide.title}
          </h3>
          <p className="text-[13px] text-muted/80 line-clamp-2 leading-relaxed flex-1">{guide.summary}</p>

          <div className="mt-3 flex items-center gap-1.5 text-electric-cyan text-xs font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
            Read Guide
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </article>
    </Link>
  );
}
