import Link from 'next/link';

const footerLinks = {
  explore: [
    { href: '/news', label: 'Latest News' },
    { href: '/events', label: 'Events' },
    { href: '/map', label: 'Interactive Map' },
    { href: '/guides', label: 'Guides' },
  ],
  database: [
    { href: '/database/vehicles', label: 'Vehicles' },
    { href: '/database/characters', label: 'Characters' },
    { href: '/database/missions', label: 'Missions' },
    { href: '/database/collectibles', label: 'Collectibles' },
  ],
  site: [
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/newsletter', label: 'Newsletter' },
    { href: '/newsletter/privacy', label: 'Privacy Policy' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-obsidian-border bg-obsidian-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-neon-pink to-electric-cyan flex items-center justify-center font-pricedown text-sm text-white">
                V
              </div>
              <span className="font-pricedown text-lg tracking-wider text-ghost-white">
                THE GTA <span className="text-neon-pink">VAULT</span>
              </span>
            </Link>
            <p className="text-sm text-muted leading-relaxed">
              Your ultimate GTA 6 utility hub. News, maps, database, and guides — all in one place.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-ghost-white mb-4">Explore</h3>
            <ul className="space-y-2">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted hover:text-electric-cyan transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Database */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-ghost-white mb-4">Database</h3>
            <ul className="space-y-2">
              {footerLinks.database.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted hover:text-electric-cyan transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Site */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-ghost-white mb-4">Site</h3>
            <ul className="space-y-2">
              {footerLinks.site.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted hover:text-electric-cyan transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-obsidian-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} The GTA Vault. Not affiliated with Rockstar Games or Take-Two Interactive.
          </p>
          <p className="text-xs text-muted">
            GTA 6 and related trademarks are property of their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}
