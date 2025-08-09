'use client';

import PropertyFilters from '@/components/properties/PropertyFilters';
import SoldPropertyCard from '@/components/properties/SoldPropertyCard';
import { soldProperties } from '@/data/soldProperties';
import { SITE_CONFIG, STATISTICS } from '@/lib/constants';
import { Award, Clock, Home, Users } from 'lucide-react';
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

  const statisticsData = [
    {
      icon: Home,
      value: STATISTICS.propertiesSold,
      label: 'נכסים נמכרו'
    },
    {
      icon: Users,
      value: STATISTICS.satisfiedClients,
      label: 'לקוחות מרוצים'
    },
    {
      icon: Clock,
      value: STATISTICS.avgDaysToSell,
      label: 'ימים בממוצע למכירה'
    },
    {
      icon: Award,
      value: STATISTICS.yearsExperience,
      label: 'שנות ניסיון'
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary-50 py-8 md:py-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              נכסים שמכרנו בהצלחה
            </h1>
            <p className="text-lg md:text-xl text-text-secondary px-4 md:px-0">
              עשרות משפחות מרוצות שמצאו את הבית המושלם בעזרתנו.
              כל נכס מספר סיפור של הצלחה ושביעות רצון מלאה.
            </p>
          </div>
        </div>
      </section>

      {/* סטטיסטיקות */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
            {statisticsData.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-primary-50 rounded-lg p-4 md:p-6 hover:shadow-gold transition-all duration-300 group">
                  <div className="flex justify-center mb-2 md:mb-3">
                    <IconComponent className="w-6 md:w-8 h-6 md:h-8 text-primary-600 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-2xl md:text-4xl font-bold gradient-text-gold mb-1 md:mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-base text-text-secondary">{stat.label}</div>
                </div>
              );
            })}
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
      <section className="py-8 md:py-16 bg-background-secondary">
        <div className="container">
          {sortedProperties.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {sortedProperties.map((property) => (
                <SoldPropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-8 md:py-12">
              <p className="text-lg md:text-xl text-text-secondary">
                לא נמצאו נכסים התואמים את הסינון שבחרת
              </p>
              <button
                onClick={() => {
                  setSelectedType('all');
                  setSelectedNeighborhood('all');
                  setSortBy('date');
                }}
                className="mt-4 btn-primary"
              >
                נקה סינון
              </button>
            </div>
          )}
        </div>
      </section>

      {/* קריאה לפעולה */}
      <section className="py-12 md:py-16 bg-gradient-luxury text-white">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            רוצה למכור את הנכס שלך?
          </h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto px-4 md:px-0">
            הצטרף למאות לקוחות מרוצים שמכרו את הנכס שלהם במחיר הטוב ביותר ובזמן הקצר ביותר
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
            <Link
              href="/contact"
              className="bg-white text-primary-600 px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              קבל הערכת שווי חינם
            </Link>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="bg-primary-500 text-white px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors inline-block"
            >
              התקשר עכשיו
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}