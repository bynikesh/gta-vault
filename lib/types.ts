// ─── Base Content Model ──────────────────────────────────────────────
export interface BaseContent {
  id: string;
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  category: string;
  datePublished: string;
  dateUpdated: string;
  featuredImage: string;
  author?: string;
  relatedSlugs?: string[];
}

// ─── News ────────────────────────────────────────────────────────────
export interface NewsPost extends BaseContent {
  type: 'news';
  content: string;
  source?: string;
}

// ─── Events ──────────────────────────────────────────────────────────
export interface GameEvent extends BaseContent {
  type: 'event';
  startDate: string;
  endDate: string;
  location?: string;
  isLive: boolean;
}

// ─── Guides ──────────────────────────────────────────────────────────
export interface Guide extends BaseContent {
  type: 'guide';
  content: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime?: string;
}

// ─── Map Pins ────────────────────────────────────────────────────────
export type MapPinCategory = 'mission' | 'collectible' | 'safehouse' | 'business' | 'poi';

export interface MapPin {
  id: string;
  slug: string;
  name: string;
  category: MapPinCategory;
  lat: number;
  lng: number;
  description: string;
  tags: string[];
  featuredImage?: string;
  relatedSlugs?: string[];
}

// ─── Registry Entities ───────────────────────────────────────────────
export type RegistryType = 'vehicle' | 'character' | 'mission' | 'collectible';

export interface RegistryEntity {
  id: string;
  slug: string;
  name: string;
  category: string;
  type: RegistryType;
  tags: string[];
  featuredImage: string;
  summary: string;
  stats: Record<string, string | number>;
  unlockCondition?: string;
  dateUpdated: string;
  relatedSlugs?: string[];
  affiliateUrl?: string;
}

// ─── Site Config ─────────────────────────────────────────────────────
export interface SiteConfig {
  siteName: string;
  siteUrl: string;
  siteDescription: string;
  launchDate: string;
  socialLinks: {
    twitter: string;
    youtube: string;
    discord: string;
    instagram: string;
  };
  contactEmail: string;
  defaultOgImage: string;
}
