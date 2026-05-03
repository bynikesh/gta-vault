import Link from 'next/link';
import { MapPin as MapPinIcon, Navigation } from 'lucide-react';
import MapPinCard from '@/components/cards/MapPinCard';
import type { MapPin } from '@/lib/types';

/**
 * Stylized dark-mode Vice City coastline preview with pulsing neon pins.
 * Shows as a graphic map placeholder + pin cards below.
 */
export default function PopularPins({ pins }: { pins: MapPin[] }) {
  // Distribute pins visually across the map graphic
  const pinPositions = [
    { top: '28%', left: '65%' },
    { top: '42%', left: '40%' },
    { top: '55%', left: '72%' },
    { top: '35%', left: '52%' },
    { top: '62%', left: '30%' },
  ];

  const pinColors = ['#FF00FF', '#00FFFF', '#FF8C00', '#00FF88', '#AA66FF'];

  return (
    <section className="py-8" id="popular-pins">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="font-pricedown text-2xl sm:text-3xl text-ghost-white tracking-wide flex items-center gap-2">
            <Navigation className="w-6 h-6 text-electric-cyan/60" />
            Explore Vice City
          </h2>
          <p className="text-sm text-muted mt-1">Key locations across the Leonida map</p>
        </div>
        <Link href="/map" className="hud-btn hud-btn-cyan text-xs hidden sm:flex items-center gap-1.5">
          <MapPinIcon className="w-3.5 h-3.5" />
          Open Map →
        </Link>
      </div>

      {/* Stylized dark map preview */}
      <div className="relative rounded-xl overflow-hidden mb-4 aspect-[21/9] bg-obsidian-mid border border-electric-cyan/[0.08]">
        {/* Vice City coastline silhouette */}
        <svg viewBox="0 0 1200 500" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
          {/* Ocean */}
          <rect width="1200" height="500" fill="#0A0A0F" />

          {/* Water — subtle gradient */}
          <defs>
            <linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0a1628" />
              <stop offset="100%" stopColor="#0d1f3c" />
            </linearGradient>
            <linearGradient id="land" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1A1A2E" />
              <stop offset="100%" stopColor="#12121A" />
            </linearGradient>
          </defs>

          <rect width="1200" height="500" fill="url(#water)" />

          {/* Mainland coastline (stylized Vice City / Miami shape) */}
          <path
            d="M0,200 C100,180 200,210 300,190 C350,180 380,250 450,230
               C500,215 520,280 600,260 C650,250 680,200 750,220
               C800,235 850,180 900,200 C950,220 1000,190 1050,210
               C1100,230 1150,200 1200,220 L1200,500 L0,500 Z"
            fill="url(#land)"
          />

          {/* Barrier islands / Miami Beach strip */}
          <path
            d="M700,100 C720,95 740,110 760,105 C780,100 800,120 820,115
               C840,110 850,130 870,125 C890,120 900,140 910,135
               L910,180 C900,185 890,165 870,170 C850,175 840,155 820,160
               C800,165 780,145 760,150 C740,155 720,140 700,145 Z"
            fill="url(#land)"
            opacity="0.8"
          />

          {/* Road grid suggestion */}
          <line x1="400" y1="250" x2="400" y2="500" stroke="rgba(0,255,255,0.04)" strokeWidth="1" />
          <line x1="600" y1="270" x2="600" y2="500" stroke="rgba(0,255,255,0.04)" strokeWidth="1" />
          <line x1="800" y1="230" x2="800" y2="500" stroke="rgba(0,255,255,0.04)" strokeWidth="1" />
          <line x1="0" y1="350" x2="1200" y2="350" stroke="rgba(0,255,255,0.04)" strokeWidth="1" />
          <line x1="0" y1="420" x2="1200" y2="420" stroke="rgba(0,255,255,0.04)" strokeWidth="1" />

          {/* Coastline glow line */}
          <path
            d="M0,200 C100,180 200,210 300,190 C350,180 380,250 450,230
               C500,215 520,280 600,260 C650,250 680,200 750,220
               C800,235 850,180 900,200 C950,220 1000,190 1050,210
               C1100,230 1150,200 1200,220"
            fill="none" stroke="rgba(0,255,255,0.15)" strokeWidth="1.5"
          />
        </svg>

        {/* Pulsing neon pins */}
        {pins.slice(0, 5).map((pin, i) => (
          <div
            key={pin.id}
            className="absolute"
            style={{ top: pinPositions[i]?.top, left: pinPositions[i]?.left }}
          >
            {/* Pulse ring */}
            <div
              className="absolute -inset-3 rounded-full animate-ping"
              style={{
                backgroundColor: pinColors[i],
                opacity: 0.15,
                animationDuration: `${2 + i * 0.4}s`,
              }}
            />
            {/* Pin dot */}
            <div
              className="w-3 h-3 rounded-full relative z-10 border border-white/40"
              style={{
                backgroundColor: pinColors[i],
                boxShadow: `0 0 12px ${pinColors[i]}80, 0 0 24px ${pinColors[i]}40`,
              }}
            />
            {/* Label */}
            <div className="absolute left-5 top-1/2 -translate-y-1/2 whitespace-nowrap">
              <span className="text-[10px] text-ghost-white/80 font-medium bg-obsidian/70 px-1.5 py-0.5 rounded">
                {pin.name}
              </span>
            </div>
          </div>
        ))}

        {/* Overlay gradient edges */}
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/60 via-transparent to-obsidian/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/30 via-transparent to-obsidian/60" />
      </div>

      {/* Pin cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
        {pins.map((pin) => (
          <MapPinCard key={pin.id} pin={pin} />
        ))}
      </div>
    </section>
  );
}
