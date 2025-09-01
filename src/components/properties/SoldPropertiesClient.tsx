// File: src/components/properties/SoldPropertiesClient.tsx

'use client';

import PropertyGrid from '@/components/properties/PropertyGrid';
import PropertyHero from '@/components/properties/PropertyHero';
import { soldProperties } from '@/data/soldProperties';
import { useState } from 'react';

export default function SoldPropertiesClient() {
  const [sortBy, setSortBy] = useState<string>('date-desc');
  const [filterType, setFilterType] = useState<string>('all');
  const [filterNeighborhood, setFilterNeighborhood] = useState<string>('all');

  // Filter properties
  let filteredProperties = [...soldProperties];
  
  // Apply type filter
  if (filterType !== 'all') {
    filteredProperties = filteredProperties.filter(p => p.type === filterType);
  }
  
  // Apply neighborhood filter
  if (filterNeighborhood !== 'all') {
    filteredProperties = filteredProperties.filter(p => p.neighborhood === filterNeighborhood);
  }

  return (
    <>
      {/* Hero Section with Statistics */}
      <PropertyHero />

      {/* Properties Grid */}
      <PropertyGrid properties={filteredProperties} />
    </>
  );
}