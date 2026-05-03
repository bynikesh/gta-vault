'use client';

import { useState } from 'react';
import SearchBar from '@/components/shared/SearchBar';
import FilterBar from '@/components/shared/FilterBar';
import type { MapPin } from '@/lib/types';
import { capitalize } from '@/lib/utils';

const categoryIcons: Record<string, string> = {
  mission: '🎯',
  collectible: '💎',
  safehouse: '🏠',
  business: '💼',
  poi: '📍',
};

export default function MapSidebar({
  pins,
  activePin,
  onPinClick,
}: {
  pins: MapPin[];
  activePin?: string;
  onPinClick: (slug: string) => void;
}) {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const categories = [...new Set(pins.map((p) => p.category))];

  const filtered = pins.filter((pin) => {
    const matchesSearch = pin.name.toLowerCase().includes(search.toLowerCase()) ||
      pin.description.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === 'all' || pin.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <aside className="w-full lg:w-80 glass-strong rounded-xl p-4 flex flex-col gap-4 max-h-[calc(100vh-8rem)] overflow-hidden" id="map-sidebar">
      <h2 className="font-pricedown text-xl text-ghost-white tracking-wide">
        Vice City <span className="text-electric-cyan">Locations</span>
      </h2>

      <SearchBar placeholder="Search locations..." onSearch={setSearch} />
      <FilterBar filters={categories} activeFilter={filter} onFilterChange={setFilter} />

      <div className="flex-1 overflow-y-auto space-y-2 pr-1 -mr-1">
        {filtered.map((pin) => (
          <button
            key={pin.id}
            onClick={() => onPinClick(pin.slug)}
            className={`w-full text-left p-3 rounded-lg flex items-start gap-3 transition-all ${
              activePin === pin.slug
                ? 'bg-neon-pink/10 border border-neon-pink/30'
                : 'hover:bg-white/5 border border-transparent'
            }`}
          >
            <span className="text-lg shrink-0">{categoryIcons[pin.category] || '📍'}</span>
            <div className="min-w-0">
              <p className={`text-sm font-semibold truncate ${
                activePin === pin.slug ? 'text-neon-pink' : 'text-ghost-white'
              }`}>
                {pin.name}
              </p>
              <p className="text-[11px] text-muted">{capitalize(pin.category)}</p>
            </div>
          </button>
        ))}
        {filtered.length === 0 && (
          <p className="text-sm text-muted text-center py-8">No locations found.</p>
        )}
      </div>
    </aside>
  );
}
