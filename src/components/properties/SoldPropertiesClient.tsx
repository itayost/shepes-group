'use client';

import PropertyFilters from '@/components/properties/PropertyFilters';
import SoldPropertyCard from '@/components/properties/SoldPropertyCard';
import { soldProperties } from '@/data/soldProperties';
import { SITE_CONFIG, STATISTICS } from '@/lib/constants';
import Link from 'next/link';
import { useState } from 'react';

export default function SoldPropertiesClient() {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('date');

  // סינון הנכסים
  const filteredProperties = soldProperties.filter(property => {
    if (selectedType !== 'all' && property.type !== selectedType) return false;
    if (selectedNeighborhood !== 'all' && property.neighborhood !== selectedNeighborhood) return false;
    return true;
  });

  // מיון הנכסים
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
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary-50 py-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              נכסים שמכרנו בהצלחה
            </h1>
            <p className="text-xl text-text-secondary">
              עשרות משפחות מרוצות שמצאו את הבית המושלם בעזרתנו.
              כל נכס מספר סיפור של הצלחה ושביעות רצון מלאה.
            </p>
          </div>
        </div>
      </section>

      {/* סטטיסטיקות */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-primary-50 rounded-lg p-6 hover:shadow-gold transition-all duration-300">
              <div className="text-4xl font-bold gradient-text-gold mb-2">
                {STATISTICS.propertiesSold}
              </div>
              <div className="text-text-secondary">נכסים נמכרו</div>
            </div>
            <div className="bg-primary-50 rounded-lg p-6 hover:shadow-gold transition-all duration-300">
              <div className="text-4xl font-bold gradient-text-gold mb-2">
                {STATISTICS.satisfiedClients}
              </div>
              <div className="text-text-secondary">לקוחות מרוצים</div>
            </div>
            <div className="bg-primary-50 rounded-lg p-6 hover:shadow-gold transition-all duration-300">
              <div className="text-4xl font-bold gradient-text-gold mb-2">
                {STATISTICS.avgDaysToSell}
              </div>
              <div className="text-text-secondary">ימים בממוצע למכירה</div>
            </div>
            <div className="bg-primary-50 rounded-lg p-6 hover:shadow-gold transition-all duration-300">
              <div className="text-4xl font-bold gradient-text-gold mb-2">
                {STATISTICS.yearsExperience}
              </div>
              <div className="text-text-secondary">שנות ניסיון</div>
            </div>
          </div>
        </div>
      </section>

      {/* פילטרים */}
      <PropertyFilters
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        selectedNeighborhood={selectedNeighborhood}
        setSelectedNeighborhood={setSelectedNeighborhood}
        sortBy={sortBy}
        setSortBy={setSortBy}
        resultsCount={sortedProperties.length}
      />

      {/* גלריית נכסים */}
      <section className="py-16 bg-background-secondary">
        <div className="container">
          {sortedProperties.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedProperties.map((property) => (
                <SoldPropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-text-secondary">
                לא נמצאו נכסים התואמים את החיפוש שלך
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-luxury text-white relative overflow-hidden">
        {/* אפקט רקע דקורטיבי */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            רוצים להצטרף לרשימת הלקוחות המרוצים שלנו?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto animate-slide-up">
            בין אם אתם מוכרים או קונים, אנחנו כאן כדי להפוך את החלום שלכם למציאות.
            צרו איתנו קשר עוד היום ותגלו למה מאות לקוחות בחרו בנו.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="btn-primary shadow-gold-lg animate-glow inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              התקשרו עכשיו
            </a>
            
            <Link
              href="/contact"
              className="btn-secondary hover:shadow-gold inline-block"
            >
              מלאו פרטים ונחזור אליכם
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}