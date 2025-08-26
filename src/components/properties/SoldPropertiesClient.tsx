'use client';

import PropertyGrid from '@/components/properties/PropertyGrid';
import PropertyHero from '@/components/properties/PropertyHero';
import { soldProperties } from '@/data/soldProperties';
import { useState } from 'react';

export default function SoldPropertiesClient() {
  const [sortBy, setSortBy] = useState<string>('date');

  // Sort properties
  const sortedProperties = [...soldProperties].sort((a, b) => {
    switch (sortBy) {
      case 'date':
        return b.soldDate.localeCompare(a.soldDate);
      case 'price-high':
        return b.soldPrice - a.soldPrice;
      case 'price-low':
        return a.soldPrice - b.soldPrice;
      case 'days-fast':
        return a.daysOnMarket - b.daysOnMarket;
      case 'days-slow':
        return b.daysOnMarket - a.daysOnMarket;
      case 'performance':
        return (b.soldPrice / b.askingPrice) - (a.soldPrice / a.askingPrice);
      default:
        return 0;
    }
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section with Statistics */}
      <PropertyHero />

      {/* Properties Grid */}
      <PropertyGrid properties={sortedProperties} />
    </main>
  );
}