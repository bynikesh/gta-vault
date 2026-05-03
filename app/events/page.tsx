import type { Metadata } from 'next';
import { getAllEvents } from '@/lib/data';
import { generatePageMetadata } from '@/lib/seo';
import EventCard from '@/components/cards/EventCard';
import Breadcrumbs from '@/components/shared/Breadcrumbs';

export const metadata: Metadata = generatePageMetadata({
  title: 'GTA 6 Events',
  description: 'Upcoming and ongoing GTA 6 in-game events, challenges, and community activities.',
  path: '/events',
  tags: ['GTA 6 events', 'GTA 6 challenges', 'GTA Online events'],
});

export default function EventsPage() {
  const events = getAllEvents();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
      <Breadcrumbs items={[{ label: 'Events' }]} />

      <div className="mb-8">
        <h1 className="font-pricedown text-3xl sm:text-4xl text-ghost-white tracking-wide">
          GTA 6 <span className="text-sunset-orange">Events</span>
        </h1>
        <p className="text-muted mt-2">Upcoming and ongoing in-game events and community challenges.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
