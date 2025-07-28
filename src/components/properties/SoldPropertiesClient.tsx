'use client';

import PropertyFilters from '@/components/properties/PropertyFilters';
import SoldPropertyCard from '@/components/properties/SoldPropertyCard';
import { soldProperties } from '@/data/soldProperties';
import { SITE_CONFIG, STATISTICS } from '@/lib/constants';
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
            <p className="text-xl text-gray-600">
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
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-4xl font-bold text-primary-600 mb-2">
                {STATISTICS.propertiesSold}
              </div>
              <div className="text-gray-600">נכסים נמכרו</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-4xl font-bold text-primary-600 mb-2">
                {STATISTICS.satisfiedClients}
              </div>
              <div className="text-gray-600">לקוחות מרוצים</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-4xl font-bold text-primary-600 mb-2">
                {STATISTICS.avgDaysToSell}
              </div>
              <div className="text-gray-600">ימים בממוצע למכירה</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-4xl font-bold text-primary-600 mb-2">
                {STATISTICS.yearsExperience}
              </div>
              <div className="text-gray-600">שנות ניסיון</div>
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
      <section className="py-16 bg-gray-50">
        <div className="container">
          {sortedProperties.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedProperties.map((property) => (
                <SoldPropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                לא נמצאו נכסים התואמים את החיפוש שלך
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            רוצים להצטרף לרשימת הלקוחות המרוצים שלנו?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            בין אם אתם מוכרים או קונים, אנחנו כאן כדי להפוך את החלום שלכם למציאות.
            צרו איתנו קשר עוד היום ותגלו למה מאות לקוחות בחרו בנו.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors inline-block"
            >
              קבעו פגישת ייעוץ חינם
            </a>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 px-8 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}