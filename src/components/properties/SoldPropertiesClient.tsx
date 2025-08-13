'use client';

import PropertyFilters from '@/components/properties/PropertyFilters';
import PropertyGrid from '@/components/properties/PropertyGrid';
import PropertyHero from '@/components/properties/PropertyHero';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { soldProperties } from '@/data/soldProperties';
import { SITE_CONFIG } from '@/lib/constants';
import { MessageCircle, Phone } from 'lucide-react';
import { useState } from 'react';

export default function SoldPropertiesClient() {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('date');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Filter properties
  const filteredProperties = soldProperties.filter(property => {
    if (selectedType !== 'all' && property.type !== selectedType) return false;
    if (selectedNeighborhood !== 'all' && property.neighborhood !== selectedNeighborhood) return false;
    return true;
  });

  // Sort properties
  const sortedProperties = [...filteredProperties].sort((a, b) => {
    switch (sortBy) {
      case 'date':
        return b.soldDate.localeCompare(a.soldDate);
      case 'price':
        return b.soldPrice - a.soldPrice;
      case 'days':
        return a.daysOnMarket - b.daysOnMarket;
      default:
        return 0;
    }
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <PropertyHero />

      {/* Filters Section */}
      <PropertyFilters
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        selectedNeighborhood={selectedNeighborhood}
        setSelectedNeighborhood={setSelectedNeighborhood}
        sortBy={sortBy}
        setSortBy={setSortBy}
        viewMode={viewMode}
        setViewMode={setViewMode}
        resultsCount={sortedProperties.length}
      />

      {/* Properties Grid/List */}
      <PropertyGrid 
        properties={sortedProperties}
        viewMode={viewMode}
        onReset={() => {
          setSelectedType('all');
          setSelectedNeighborhood('all');
          setSortBy('date');
        }}
      />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            {/* Badge */}
            <Badge variant="secondary" size="lg" className="mb-6 bg-white/10 text-white border-white/20">
              הצטרפו להצלחה
            </Badge>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              רוצים למכור את הנכס שלכם?
            </h2>

            {/* Subtitle */}
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              הצטרפו למאות לקוחות מרוצים שמכרו את הנכס שלהם
              <br />
              במחיר הטוב ביותר ובזמן הקצר ביותר
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${SITE_CONFIG.phone}`}>
                <Button 
                  size="lg" 
                  variant="secondary"
                  icon={Phone}
                  className="bg-white text-primary-700 hover:bg-gray-100 shadow-2xl"
                >
                  קבלו ייעוץ חינם
                </Button>
              </a>
              
              <a 
                href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  variant="outline"
                  icon={MessageCircle}
                  className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20"
                >
                  שלחו וואטסאפ
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}