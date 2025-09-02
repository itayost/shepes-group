'use client';

import PropertyGrid from '@/components/properties/PropertyGrid';
import PropertyHero from '@/components/properties/PropertyHero';
import { soldProperties } from '@/data/soldProperties';

export default function SoldPropertiesClient() {
  // Simply pass all properties without filtering
  // Remove this component entirely if no client-side logic is needed
  
  return (
    <>
      {/* Hero Section with Statistics */}
      <PropertyHero />

      {/* Properties Grid */}
      <PropertyGrid properties={soldProperties} />
    </>
  );
}