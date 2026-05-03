/**
 * Format an ISO date string to a human-readable format.
 */
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Format a short date (e.g., "May 26").
 */
export function formatShortDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });
}

/**
 * Calculate time remaining until a target date.
 */
export function getTimeRemaining(targetDate: string) {
  const total = new Date(targetDate).getTime() - Date.now();
  if (total <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 };

  return {
    days: Math.floor(total / (1000 * 60 * 60 * 24)),
    hours: Math.floor((total / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((total / (1000 * 60)) % 60),
    seconds: Math.floor((total / 1000) % 60),
    total,
  };
}

/**
 * Truncate text to a given length with ellipsis.
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + '…';
}

/**
 * Generate a CSS class string from conditional classes.
 */
export function cn(...classes: (string | false | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Capitalize the first letter of a string.
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Get category color class for tag badges.
 */
export function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    mission: 'text-pink-400 border-pink-400/30 bg-pink-400/10',
    collectible: 'text-cyan-400 border-cyan-400/30 bg-cyan-400/10',
    safehouse: 'text-orange-400 border-orange-400/30 bg-orange-400/10',
    business: 'text-green-400 border-green-400/30 bg-green-400/10',
    poi: 'text-purple-400 border-purple-400/30 bg-purple-400/10',
    vehicle: 'text-cyan-400 border-cyan-400/30 bg-cyan-400/10',
    character: 'text-pink-400 border-pink-400/30 bg-pink-400/10',
    update: 'text-orange-400 border-orange-400/30 bg-orange-400/10',
    rumor: 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10',
    official: 'text-green-400 border-green-400/30 bg-green-400/10',
    beginner: 'text-green-400 border-green-400/30 bg-green-400/10',
    intermediate: 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10',
    advanced: 'text-red-400 border-red-400/30 bg-red-400/10',
  };
  return colors[category.toLowerCase()] || 'text-gray-400 border-gray-400/30 bg-gray-400/10';
}
