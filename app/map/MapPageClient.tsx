'use client';

import { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import MapSidebar from '@/components/map/MapSidebar';
import { getAllMapPins } from '@/lib/data';
import type { MapPin } from '@/lib/types';

const MapView = dynamic(() => import('@/components/map/MapContainer'), { ssr: false });

export default function MapPageClient({ pins }: { pins: MapPin[] }) {
  const [activePin, setActivePin] = useState<string | undefined>();

  const handlePinClick = useCallback((slug: string) => {
    setActivePin(slug);
    // Update URL without full navigation
    window.history.pushState(null, '', `/map/${slug}`);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-4 h-[calc(100vh-5rem)]">
      <MapSidebar pins={pins} activePin={activePin} onPinClick={handlePinClick} />
      <div className="flex-1 min-h-[400px]">
        <MapView pins={pins} activePin={activePin} onPinClick={handlePinClick} />
      </div>
    </div>
  );
}
