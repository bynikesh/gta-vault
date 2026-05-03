import type { Metadata } from 'next';
import { getSiteConfig } from './data';

const config = getSiteConfig();

interface SeoParams {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
}

/**
 * Generate page-level metadata for Next.js Metadata API.
 */
export function generatePageMetadata({
  title,
  description,
  path,
  ogImage,
  type = 'website',
  publishedTime,
  modifiedTime,
  tags,
}: SeoParams): Metadata {
  const url = `${config.siteUrl}${path}`;
  const image = ogImage || config.defaultOgImage;

  return {
    title: `${title} | ${config.siteName}`,
    description,
    keywords: tags,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${config.siteName}`,
      description,
      url,
      siteName: config.siteName,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      type,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${config.siteName}`,
      description,
      images: [image],
    },
  };
}

/**
 * Generate JSON-LD structured data for a NewsArticle.
 */
export function generateNewsJsonLd(article: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    description: article.description,
    url: article.url,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      '@type': 'Organization',
      name: article.author || config.siteName,
    },
    publisher: {
      '@type': 'Organization',
      name: config.siteName,
      url: config.siteUrl,
    },
  };
}

/**
 * Generate JSON-LD structured data for an Event.
 */
export function generateEventJsonLd(event: {
  name: string;
  description: string;
  url: string;
  startDate: string;
  endDate: string;
  location?: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.name,
    description: event.description,
    url: event.url,
    startDate: event.startDate,
    endDate: event.endDate,
    image: event.image,
    location: event.location
      ? { '@type': 'VirtualLocation', name: event.location }
      : undefined,
    organizer: {
      '@type': 'Organization',
      name: config.siteName,
    },
  };
}

/**
 * Generate JSON-LD structured data for a Guide / Article.
 */
export function generateGuideJsonLd(guide: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.description,
    url: guide.url,
    image: guide.image,
    datePublished: guide.datePublished,
    dateModified: guide.dateModified,
    author: {
      '@type': 'Organization',
      name: config.siteName,
    },
    publisher: {
      '@type': 'Organization',
      name: config.siteName,
      url: config.siteUrl,
    },
  };
}

/**
 * Generate JSON-LD for the WebSite (homepage).
 */
export function generateWebsiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: config.siteName,
    url: config.siteUrl,
    description: config.siteDescription,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${config.siteUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}
