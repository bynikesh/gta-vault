'use client';

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { MapPin } from '@/lib/types';

const categoryColors: Record<string, string> = {
  mission: '#FF00FF',
  collectible: '#00FFFF',
  safehouse: '#FF8C00',
  business: '#00FF88',
  poi: '#AA66FF',
};

function createPinIcon(category: string) {
  const color = categoryColors[category] || '#FF00FF';
  return L.divIcon({
    className: 'custom-pin',
    html: `<div style="
      width: 24px; height: 24px;
      border-radius: 50%;
      background: ${color};
      border: 2px solid rgba(255,255,255,0.8);
      box-shadow: 0 0 12px ${color}80, 0 0 24px ${color}40;
      cursor: pointer;
    "></div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  });
}

export default function MapView({
  pins,
  activePin,
  onPinClick,
}: {
  pins: MapPin[];
  activePin?: string;
  onPinClick: (slug: string) => void;
}) {
  const mapRef = useRef<L.Map | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      center: [25.775, -80.19],
      zoom: 13,
      zoomControl: true,
      attributionControl: false,
    });

    // CartoDB Dark Matter tiles (free, no API key)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      maxZoom: 19,
    }).addTo(map);

    // Add attribution manually
    L.control.attribution({ position: 'bottomright' })
      .addAttribution('&copy; <a href="https://carto.com/">CARTO</a>')
      .addTo(map);

    // Add pins
    pins.forEach((pin) => {
      const marker = L.marker([pin.lat, pin.lng], {
        icon: createPinIcon(pin.category),
      }).addTo(map);

      marker.bindPopup(`
        <div style="min-width: 160px;">
          <strong style="font-size: 14px;">${pin.name}</strong>
          <p style="font-size: 11px; opacity: 0.7; margin: 4px 0 0;">${pin.category.toUpperCase()}</p>
        </div>
      `);

      marker.on('click', () => {
        onPinClick(pin.slug);
      });
    });

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [pins, onPinClick]);

  // Pan to active pin
  useEffect(() => {
    if (!mapRef.current || !activePin) return;
    const pin = pins.find((p) => p.slug === activePin);
    if (pin) {
      mapRef.current.flyTo([pin.lat, pin.lng], 15, { duration: 0.8 });
    }
  }, [activePin, pins]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[500px] rounded-xl overflow-hidden"
      id="leaflet-map"
    />
  );
}
