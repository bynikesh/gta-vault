'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Home, Newspaper, CalendarDays, Map, Database, BookOpen, Mail, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/news', label: 'News', icon: Newspaper },
  { href: '/events', label: 'Events', icon: CalendarDays },
  { href: '/map', label: 'Map', icon: Map },
  { href: '/database', label: 'Database', icon: Database },
  { href: '/guides', label: 'Guides', icon: BookOpen },
];

export default function HudNavbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" id="nav-logo">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-neon-pink to-electric-cyan flex items-center justify-center font-pricedown text-sm text-white">
              V
            </div>
            <span className="font-pricedown text-xl tracking-wider text-ghost-white group-hover:text-neon-pink transition-colors">
              THE GTA <span className="text-neon-pink">VAULT</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  id={`nav-${link.label.toLowerCase()}`}
                  className={`px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 rounded flex items-center gap-1.5 ${
                    isActive
                      ? 'text-neon-pink text-glow-pink bg-neon-pink/10'
                      : 'text-muted hover:text-ghost-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link href="/newsletter" className="hidden sm:flex items-center gap-1.5 hud-btn-filled hud-btn text-xs" id="nav-newsletter">
              <Mail className="w-3.5 h-3.5" />
              Newsletter
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-ghost-white"
              aria-label="Toggle menu"
              id="nav-mobile-toggle"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
          <div className="flex flex-col gap-1 pt-2 border-t border-obsidian-border">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-3 py-2.5 text-sm font-semibold uppercase tracking-wider rounded transition-colors flex items-center gap-2 ${
                    isActive
                      ? 'text-neon-pink bg-neon-pink/10'
                      : 'text-muted hover:text-ghost-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/newsletter"
              onClick={() => setMobileOpen(false)}
              className="hud-btn-filled hud-btn text-xs text-center mt-2 flex items-center justify-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              Newsletter
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
