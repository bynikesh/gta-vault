import { getCategoryColor } from '@/lib/utils';

export default function TagBadge({ tag, size = 'sm' }: { tag: string; size?: 'sm' | 'md' }) {
  const colorClass = getCategoryColor(tag);
  return (
    <span
      className={`inline-flex items-center rounded border font-medium uppercase tracking-wider ${colorClass} ${
        size === 'sm' ? 'px-2 py-0.5 text-[10px]' : 'px-2.5 py-1 text-xs'
      }`}
    >
      {tag}
    </span>
  );
}
