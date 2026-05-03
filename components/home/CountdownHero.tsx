'use client';

import { useState, useEffect } from 'react';
import { getTimeRemaining } from '@/lib/utils';
import { Newspaper, Map, Database, BookOpen, Gamepad2 } from 'lucide-react';

export default function CountdownHero({ launchDate }: { launchDate: string }) {
  const [time, setTime] = useState(getTimeRemaining(launchDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getTimeRemaining(launchDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [launchDate]);

  const blocks = [
    { label: 'Days', value: time.days },
    { label: 'Hrs', value: time.hours },
    { label: 'Min', value: time.minutes },
    { label: 'Sec', value: time.seconds },
  ];

  return (
    <section className="relative overflow-hidden" id="countdown-hero">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian-light to-obsidian" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(255,0,255,0.07),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(0,255,255,0.05),transparent_50%)]" />

      {/* Content — tight information density */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-6">
        {/* Title */}
        <div className="text-center mb-4">
          <p className="text-[10px] uppercase tracking-[0.35em] text-electric-cyan/70 font-semibold mb-2 animate-fade-in-up">
            Welcome to the Vault
          </p>
          <h1 className="font-pricedown text-3xl sm:text-4xl lg:text-5xl text-ghost-white mb-2 tracking-wide">
            GTA <span className="gradient-text">VI</span> IS COMING
          </h1>
          <p className="text-muted text-sm max-w-md mx-auto leading-relaxed">
            News, interactive maps, databases, and guides — your GTA 6 command center.
          </p>
        </div>

        {/* Countdown — compact */}
        {time.total > 0 ? (
          <div className="flex justify-center gap-2 sm:gap-3 mb-4">
            {blocks.map((block) => (
              <div key={block.label} className="rounded-lg px-3 sm:px-5 py-2 sm:py-2.5 text-center min-w-[56px] sm:min-w-[76px] bg-[rgba(20,20,25,0.6)] backdrop-blur-[20px] border border-electric-cyan/[0.08]">
                <div className="font-pricedown text-xl sm:text-3xl text-neon-pink tabular-nums">
                  {String(block.value).padStart(2, '0')}
                </div>
                <div className="text-[9px] sm:text-[10px] text-muted uppercase tracking-wider mt-0.5">
                  {block.label}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center mb-4">
            <div className="inline-flex items-center gap-2 bg-[rgba(20,20,25,0.6)] backdrop-blur-[20px] border border-neon-pink/20 rounded-lg px-6 py-3">
              <Gamepad2 className="w-5 h-5 text-neon-pink" />
              <p className="font-pricedown text-xl sm:text-2xl gradient-text">
                GTA 6 IS HERE!
              </p>
            </div>
          </div>
        )}

        {/* CTA row — tight, with icons */}
        <div className="flex justify-center gap-2 sm:gap-2.5 flex-wrap">
          <a href="/news" className="hud-btn text-xs inline-flex items-center gap-1.5">
            <Newspaper className="w-3.5 h-3.5" />
            Latest News
          </a>
          <a href="/map" className="hud-btn hud-btn-cyan text-xs inline-flex items-center gap-1.5">
            <Map className="w-3.5 h-3.5" />
            Explore Map
          </a>
          <a href="/database" className="hud-btn text-xs inline-flex items-center gap-1.5">
            <Database className="w-3.5 h-3.5" />
            Database
          </a>
          <a href="/guides" className="hud-btn hud-btn-pink text-xs inline-flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            Guides
          </a>
        </div>
      </div>
    </section>
  );
}
