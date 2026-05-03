import Link from 'next/link';

interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-muted mb-6">
      <ol className="flex items-center flex-wrap gap-1">
        <li>
          <Link href="/" className="hover:text-electric-cyan transition-colors">Home</Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            <span className="text-obsidian-border">/</span>
            {item.href ? (
              <Link href={item.href} className="hover:text-electric-cyan transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-ghost-white">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
