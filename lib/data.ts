import type { NewsPost, GameEvent, Guide, MapPin, RegistryEntity, SiteConfig } from './types';

import siteConfigData from '@/data/site-config.json';
import newsData from '@/data/news.json';
import eventsData from '@/data/events.json';
import guidesData from '@/data/guides.json';
import mapPinsData from '@/data/map-pins.json';
import vehiclesData from '@/data/vehicles.json';
import charactersData from '@/data/characters.json';
import missionsData from '@/data/missions.json';
import collectiblesData from '@/data/collectibles.json';

// ─── Site Config ─────────────────────────────────────────────────────
export function getSiteConfig(): SiteConfig {
  return siteConfigData as SiteConfig;
}

// ─── News ────────────────────────────────────────────────────────────
export function getAllNews(): NewsPost[] {
  return (newsData as NewsPost[]).sort(
    (a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
  );
}

export function getNewsBySlug(slug: string): NewsPost | undefined {
  return (newsData as NewsPost[]).find((n) => n.slug === slug);
}

export function getLatestNews(count: number = 3): NewsPost[] {
  return getAllNews().slice(0, count);
}

// ─── Events ──────────────────────────────────────────────────────────
export function getAllEvents(): GameEvent[] {
  return (eventsData as GameEvent[]).sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  );
}

export function getEventBySlug(slug: string): GameEvent | undefined {
  return (eventsData as GameEvent[]).find((e) => e.slug === slug);
}

// ─── Guides ──────────────────────────────────────────────────────────
export function getAllGuides(): Guide[] {
  return (guidesData as Guide[]).sort(
    (a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
  );
}

export function getGuideBySlug(slug: string): Guide | undefined {
  return (guidesData as Guide[]).find((g) => g.slug === slug);
}

export function getFeaturedGuides(count: number = 3): Guide[] {
  return getAllGuides().slice(0, count);
}

// ─── Map Pins ────────────────────────────────────────────────────────
export function getAllMapPins(): MapPin[] {
  return mapPinsData as MapPin[];
}

export function getMapPinBySlug(slug: string): MapPin | undefined {
  return (mapPinsData as MapPin[]).find((p) => p.slug === slug);
}

export function getFeaturedMapPins(count: number = 5): MapPin[] {
  return getAllMapPins().slice(0, count);
}

// ─── Registry (Database) ────────────────────────────────────────────
export function getVehicles(): RegistryEntity[] {
  return vehiclesData as unknown as RegistryEntity[];
}

export function getCharacters(): RegistryEntity[] {
  return charactersData as unknown as RegistryEntity[];
}

export function getMissions(): RegistryEntity[] {
  return missionsData as unknown as RegistryEntity[];
}

export function getCollectibles(): RegistryEntity[] {
  return collectiblesData as unknown as RegistryEntity[];
}

export function getRegistryByType(type: string): RegistryEntity[] {
  const map: Record<string, () => RegistryEntity[]> = {
    vehicles: getVehicles,
    characters: getCharacters,
    missions: getMissions,
    collectibles: getCollectibles,
  };
  return map[type]?.() ?? [];
}
