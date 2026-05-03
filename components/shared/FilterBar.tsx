'use client';

export default function FilterBar({
  filters,
  activeFilter,
  onFilterChange,
}: {
  filters: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onFilterChange('all')}
        className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded transition-all duration-200 ${
          activeFilter === 'all'
            ? 'bg-electric-cyan/15 text-electric-cyan border border-electric-cyan/40 shadow-[0_0_10px_rgba(0,255,255,0.1)]'
            : 'bg-[rgba(20,20,25,0.6)] text-muted border border-white/[0.06] hover:text-ghost-white hover:border-white/15 hover:scale-[1.03]'
        }`}
      >
        All
      </button>
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded transition-all duration-200 ${
            activeFilter === filter
              ? 'bg-electric-cyan/15 text-electric-cyan border border-electric-cyan/40 shadow-[0_0_10px_rgba(0,255,255,0.1)]'
              : 'bg-[rgba(20,20,25,0.6)] text-muted border border-white/[0.06] hover:text-ghost-white hover:border-white/15 hover:scale-[1.03]'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
