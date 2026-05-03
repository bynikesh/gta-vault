import Link from 'next/link';
import type { MapPin } from '@/lib/types';
import { capitalize } from '@/lib/utils';

/**
 * Server-rendered fallback for the map page.
 * Provides SEO-crawlable content when JavaScript is disabled.
 */
export default function MapFallback({ pins }: { pins: MapPin[] }) {
  const grouped = pins.reduce<Record<string, MapPin[]>>((acc, pin) => {
    acc[pin.category] = acc[pin.category] || [];
    acc[pin.category].push(pin);
    return acc;
  }, {});

  return (
    <noscript>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="font-pricedown text-2xl text-ghost-white mb-6">Vice City Locations</h2>
        {Object.entries(grouped).map(([category, catPins]) => (
          <div key={category} className="mb-8">
            <h3 className="text-lg font-semibold text-neon-pink mb-3 capitalize">{capitalize(category)}s</h3>
            <div className="space-y-3">
              {catPins.map((pin) => (
                <div key={pin.id} className="glass rounded-lg p-4">
                  <Link href={`/map/${pin.slug}`} className="text-electric-cyan hover:underline font-semibold">
                    {pin.name}
                  </Link>
                  <p className="text-sm text-muted mt-1">{pin.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </noscript>
  );
}
