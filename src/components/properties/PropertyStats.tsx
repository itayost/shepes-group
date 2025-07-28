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
          <div className="bg-gray-100 rounded-lg p-1 inline-flex">
            <button
              onClick={() => setActiveTab('time')}
              className={`px-6 py-2 rounded-md transition-colors ${
                activeTab === 'time'
                  ? 'bg-white text-primary-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              זמן מכירה ממוצע
            </button>
            <button
              onClick={() => setActiveTab('accuracy')}
              className={`px-6 py-2 rounded-md transition-colors ${
                activeTab === 'accuracy'
                  ? 'bg-white text-primary-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              דיוק במחיר
            </button>
            <button
              onClick={() => setActiveTab('neighborhoods')}
              className={`px-6 py-2 rounded-md transition-colors ${
                activeTab === 'neighborhoods'
                  ? 'bg-white text-primary-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
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
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-4xl mb-2">🏢</div>
                <h3 className="font-bold text-lg mb-2">דירות</h3>
                <div className="text-3xl font-bold text-primary-600">
                  {statsData.averageDaysOnMarket.apartment} ימים
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  זמן ממוצע למכירת דירה
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-4xl mb-2">🏡</div>
                <h3 className="font-bold text-lg mb-2">בתים פרטיים</h3>
                <div className="text-3xl font-bold text-primary-600">
                  {statsData.averageDaysOnMarket.house} ימים
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  זמן ממוצע למכירת בית
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-4xl mb-2">🏙️</div>
                <h3 className="font-bold text-lg mb-2">פנטהאוזים</h3>
                <div className="text-3xl font-bold text-primary-600">
                  {statsData.averageDaysOnMarket.penthouse} ימים
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  זמן ממוצע למכירת פנטהאוז
                </p>
              </div>
            </div>
          )}

          {/* דיוק במחיר */}
          {activeTab === 'accuracy' && (
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-48 h-48 bg-primary-100 rounded-full mb-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary-600">
                    {statsData.priceAccuracy}%
                  </div>
                  <div className="text-sm text-gray-600 mt-2">דיוק בהערכת מחיר</div>
                </div>
              </div>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                הניסיון והמומחיות שלנו מאפשרים לנו להעריך את שווי הנכס שלכם בדיוק מרשים.
                97.5% מהנכסים שלנו נמכרים בטווח של 5% מהמחיר המוערך.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8 max-w-lg mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">45%</div>
                  <div className="text-sm text-gray-600">נמכרו במחיר המבוקש</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">38%</div>
                  <div className="text-sm text-gray-600">נמכרו עד 5% פחות</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">14.5%</div>
                  <div className="text-sm text-gray-600">נמכרו מעל המבוקש</div>
                </div>
              </div>
            </div>
          )}

          {/* נתוני שכונות */}
          {activeTab === 'neighborhoods' && (
            <div className="space-y-4">
              {statsData.neighborhoodStats.map((neighborhood, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-lg mb-1">{neighborhood.name}</h3>
                      <p className="text-gray-600">
                        זמן מכירה ממוצע: <span className="font-semibold">{neighborhood.avgDays} ימים</span>
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">מחיר ממוצע</div>
                      <div className="text-xl font-bold text-primary-600">
                        {formatPrice(neighborhood.avgPrice)}
                      </div>
                    </div>
                  </div>
                  {/* בר התקדמות לזמן מכירה */}
                  <div className="mt-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-primary-600 h-2 rounded-full transition-all duration-500"
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