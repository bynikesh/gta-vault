'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';

export default function SearchBar({
  placeholder = 'Search...',
  onSearch,
  className = '',
}: {
  placeholder?: string;
  onSearch: (query: string) => void;
  className?: string;
}) {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className={`relative ${className}`}>
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        id="search-input"
        className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[rgba(20,20,25,0.6)] backdrop-blur-[16px] border border-electric-cyan/[0.08] text-sm text-ghost-white placeholder-muted focus:outline-none focus:border-electric-cyan/40 focus:shadow-[0_0_15px_rgba(0,255,255,0.1)] transition-all duration-200"
      />
    </div>
  );
}
