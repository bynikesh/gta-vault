import type { Metadata } from 'next';
import { getVehicles } from '@/lib/data';
import { generatePageMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import RegistryGrid from '@/components/database/RegistryGrid';

export const metadata: Metadata = generatePageMetadata({
  title: 'GTA 6 Vehicles — Complete Vehicle Database',
  description: 'Browse every vehicle in GTA 6. Supercars, muscle cars, motorcycles, boats, and aircraft with full stats.',
  path: '/database/vehicles',
  tags: ['GTA 6 vehicles', 'GTA 6 cars', 'GTA 6 vehicle list', 'GTA 6 fastest car'],
});

export default function VehiclesPage() {
  const vehicles = getVehicles();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
      <Breadcrumbs items={[{ label: 'Database', href: '/database' }, { label: 'Vehicles' }]} />

      <div className="mb-8">
        <h1 className="font-pricedown text-3xl sm:text-4xl text-ghost-white tracking-wide">
          🚗 <span className="text-electric-cyan">Vehicles</span>
        </h1>
        <p className="text-muted mt-2">Complete list of vehicles in GTA 6 with performance stats.</p>
      </div>

      <RegistryGrid entities={vehicles} title="vehicles" accentColor="electric-cyan" />
    </div>
  );
}
