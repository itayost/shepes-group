'use client';

import PropertyGrid from '@/components/properties/PropertyGrid';
import PropertyHero from '@/components/properties/PropertyHero';
import { soldProperties } from '@/data/soldProperties';
import { ArrowDownAZ, Award, Calendar, Clock, TrendingUp } from 'lucide-react';
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

  const sortOptions = [
    { value: 'date', label: 'תאריך מכירה', icon: Calendar },
    { value: 'price-high', label: 'מחיר גבוה', icon: TrendingUp },
    { value: 'price-low', label: 'מחיר נמוך', icon: ArrowDownAZ },
    { value: 'days-fast', label: 'מכירה מהירה', icon: Clock },
    { value: 'performance', label: 'ביצועים מעולים', icon: Award },
  ];

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section with Statistics */}
      <PropertyHero />

      {/* Sort Controls - Luxury Style */}
      <div className="relative bg-dark-950 border-b border-dark-800">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-transparent to-primary-500/5 pointer-events-none" />
        <div className="container relative z-10 py-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-2xl font-bold text-white">
              סינון תוצאות
              <span className="text-primary-500 mr-2">({soldProperties.length})</span>
            </h2>
            
            <div className="flex flex-wrap gap-2">
              {sortOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <button
                    key={option.value}
                    onClick={() => setSortBy(option.value)}
                    className={`
                      relative px-4 py-2 rounded-lg font-medium transition-all duration-300
                      ${sortBy === option.value 
                        ? 'bg-primary-500 text-black shadow-gold' 
                        : 'bg-black border border-dark-800 text-dark-300 hover:text-primary-500 hover:border-primary-500/50'
                      }
                    `}
                  >
                    <span className="flex items-center gap-2">
                      <Icon className="w-4 h-4" />
                      {option.label}
                    </span>
                    {sortBy === option.value && (
                      <span className="absolute inset-0 rounded-lg bg-primary-500/20 animate-pulse pointer-events-none" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Properties Grid */}
      <PropertyGrid properties={sortedProperties} />
    </main>
  );
}