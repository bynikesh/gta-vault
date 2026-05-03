export default function AdSlot({ type = 'banner', className = '' }: { type?: 'banner' | 'in-feed' | 'sidebar'; className?: string }) {
  // Placeholder for future ad integration (Google AdSense, Mediavine, etc.)
  // Replace the inner content with actual ad code when ready.
  return (
    <div
      className={`${className}`}
      data-ad-slot={type}
      aria-hidden="true"
    >
      {/* Ad code will be inserted here */}
    </div>
  );
}
