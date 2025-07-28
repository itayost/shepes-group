'use client';

import { useState } from 'react';

interface StatsData {
  averageDaysOnMarket: {
    apartment: number;
    house: number;
    penthouse: number;
  };
  priceAccuracy: number;
  neighborhoodStats: {
    name: string;
    avgDays: number;
    avgPrice: number;
  }[];
}

const statsData: StatsData = {
  averageDaysOnMarket: {
    apartment: 18,
    house: 28,
    penthouse: 35
  },
  priceAccuracy: 97.5,
  neighborhoodStats: [
    { name: 'אחוזה', avgDays: 15, avgPrice: 2800000 },
    { name: 'כרמל צרפתי', avgDays: 22, avgPrice: 3500000 },
    { name: 'דניה', avgDays: 19, avgPrice: 2200000 },
    { name: 'הדר', avgDays: 25, avgPrice: 1400000 },
    { name: 'נווה שאנן', avgDays: 20, avgPrice: 1900000 }
  ]
};

const PropertyStats: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'time' | 'accuracy' | 'neighborhoods'>('time');

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('he-IL', {
      style: 'currency',
      currency: 'ILS',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">
          סטטיסטיקות ונתונים
        </h2>

        {/* טאבים */}
        <div className="flex justify-center mb-8">
          <div className="bg-primary-50 rounded-lg p-1 inline-flex">
            <button
              onClick={() => setActiveTab('time')}
              className={`px-6 py-2 rounded-md transition-all duration-300 ${
                activeTab === 'time'
                  ? 'bg-gradient-gold text-white shadow-gold'
                  : 'text-text-secondary hover:text-primary-700'
              }`}
            >
              זמן מכירה ממוצע
            </button>
            <button
              onClick={() => setActiveTab('accuracy')}
              className={`px-6 py-2 rounded-md transition-all duration-300 ${
                activeTab === 'accuracy'
                  ? 'bg-gradient-gold text-white shadow-gold'
                  : 'text-text-secondary hover:text-primary-700'
              }`}
            >
              דיוק במחיר
            </button>
            <button
              onClick={() => setActiveTab('neighborhoods')}
              className={`px-6 py-2 rounded-md transition-all duration-300 ${
                activeTab === 'neighborhoods'
                  ? 'bg-gradient-gold text-white shadow-gold'
                  : 'text-text-secondary hover:text-primary-700'
              }`}
            >
              נתוני שכונות
            </button>
          </div>
        </div>

        {/* תוכן הטאבים */}
        <div className="max-w-4xl mx-auto">
          {/* זמן מכירה ממוצע */}
          {activeTab === 'time' && (
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-primary-50 rounded-lg p-6 text-center hover:shadow-gold transition-all duration-300">
                <div className="text-4xl mb-2">🏢</div>
                <h3 className="font-bold text-lg mb-2">דירות</h3>
                <div className="text-3xl font-bold gradient-text-gold mb-1">
                  {statsData.averageDaysOnMarket.apartment}
                </div>
                <div className="text-sm text-text-secondary">ימים בממוצע</div>
              </div>
              <div className="bg-primary-50 rounded-lg p-6 text-center hover:shadow-gold transition-all duration-300">
                <div className="text-4xl mb-2">🏠</div>
                <h3 className="font-bold text-lg mb-2">בתים פרטיים</h3>
                <div className="text-3xl font-bold gradient-text-gold mb-1">
                  {statsData.averageDaysOnMarket.house}
                </div>
                <div className="text-sm text-text-secondary">ימים בממוצע</div>
              </div>
              <div className="bg-primary-50 rounded-lg p-6 text-center hover:shadow-gold transition-all duration-300">
                <div className="text-4xl mb-2">🌆</div>
                <h3 className="font-bold text-lg mb-2">פנטהאוזים</h3>
                <div className="text-3xl font-bold gradient-text-gold mb-1">
                  {statsData.averageDaysOnMarket.penthouse}
                </div>
                <div className="text-sm text-text-secondary">ימים בממוצע</div>
              </div>
            </div>
          )}

          {/* דיוק במחיר */}
          {activeTab === 'accuracy' && (
            <div className="text-center bg-primary-50 rounded-lg p-8">
              <div className="text-6xl font-bold gradient-text-gold mb-4">
                {statsData.priceAccuracy}%
              </div>
              <p className="text-xl text-text-secondary mb-6">
                מהנכסים שלנו נמכרים בטווח של 5% מהמחיר המוערך
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8 max-w-lg mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">45%</div>
                  <div className="text-sm text-text-secondary">נמכרו במחיר המבוקש</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">38%</div>
                  <div className="text-sm text-text-secondary">נמכרו עד 5% פחות</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-600">14.5%</div>
                  <div className="text-sm text-text-secondary">נמכרו מעל המבוקש</div>
                </div>
              </div>
            </div>
          )}

          {/* נתוני שכונות */}
          {activeTab === 'neighborhoods' && (
            <div className="space-y-4">
              {statsData.neighborhoodStats.map((neighborhood, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-gold transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-lg mb-1">{neighborhood.name}</h3>
                      <p className="text-text-secondary">
                        זמן מכירה ממוצע: <span className="font-semibold text-primary-600">{neighborhood.avgDays} ימים</span>
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-text-secondary">מחיר ממוצע</div>
                      <div className="text-xl font-bold price-tag">
                        {formatPrice(neighborhood.avgPrice)}
                      </div>
                    </div>
                  </div>
                  {/* בר התקדמות לזמן מכירה */}
                  <div className="mt-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-gold h-2 rounded-full transition-all duration-500"
                        style={{ width: `${100 - (neighborhood.avgDays / 40) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PropertyStats;