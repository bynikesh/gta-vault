import type { Metadata } from 'next';
import { getCharacters } from '@/lib/data';
import { generatePageMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import RegistryGrid from '@/components/database/RegistryGrid';

export const metadata: Metadata = generatePageMetadata({
  title: 'GTA 6 Characters — Protagonists, Antagonists & NPCs',
  description: 'Meet every character in GTA 6. Detailed profiles of protagonists Lucia and Jason, antagonists, and key NPCs.',
  path: '/database/characters',
  tags: ['GTA 6 characters', 'GTA 6 Lucia', 'GTA 6 Jason', 'GTA 6 protagonist'],
});

export default function CharactersPage() {
  const characters = getCharacters();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
      <Breadcrumbs items={[{ label: 'Database', href: '/database' }, { label: 'Characters' }]} />

      <div className="mb-8">
        <h1 className="font-pricedown text-3xl sm:text-4xl text-ghost-white tracking-wide">
          👤 <span className="text-neon-pink">Characters</span>
        </h1>
        <p className="text-muted mt-2">Protagonists, antagonists, and key characters of GTA 6.</p>
      </div>

      <RegistryGrid entities={characters} title="characters" />
    </div>
  );
}
