'use client';

import { useState, useMemo } from 'react';
import SearchBar from '@/components/shared/SearchBar';
import FilterBar from '@/components/shared/FilterBar';
import RegistryCard from '@/components/cards/RegistryCard';
import type { RegistryEntity } from '@/lib/types';

export default function RegistryGrid({
  entities,
  title,
  accentColor = 'neon-pink',
}: {
  entities: RegistryEntity[];
  title: string;
  accentColor?: string;
}) {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const categories = useMemo(
    () => [...new Set(entities.map((e) => e.category))],
    [entities]
  );

  const filtered = useMemo(() => {
    return entities.filter((entity) => {
      const matchesSearch =
        entity.name.toLowerCase().includes(search.toLowerCase()) ||
        entity.summary.toLowerCase().includes(search.toLowerCase());
      const matchesFilter = filter === 'all' || entity.category === filter;
      return matchesSearch && matchesFilter;
    });
  }, [entities, search, filter]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
        <SearchBar
          placeholder={`Search ${title.toLowerCase()}...`}
          onSearch={setSearch}
          className="flex-1"
        />
      </div>
      <div className="mb-6">
        <FilterBar filters={categories} activeFilter={filter} onFilterChange={setFilter} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filtered.map((entity) => (
          <RegistryCard key={entity.id} entity={entity} />
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted text-lg">No results found.</p>
          <p className="text-sm text-muted mt-1">Try adjusting your search or filters.</p>
        </div>
      )}
    </div>
  );
}
