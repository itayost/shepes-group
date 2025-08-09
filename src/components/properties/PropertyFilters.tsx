'use client';

import { HAIFA_NEIGHBORHOODS, PROPERTY_TYPES } from '@/lib/constants';

interface PropertyFiltersProps {
  selectedType: string;
  setSelectedType: (type: string) => void;
  selectedNeighborhood: string;
  setSelectedNeighborhood: (neighborhood: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  resultsCount: number;
}

const PropertyFilters = ({
  selectedType,
  setSelectedType,
  selectedNeighborhood,
  setSelectedNeighborhood,
  sortBy,
  setSortBy,
  resultsCount
}: PropertyFiltersProps) => {
  const sortOptions = [
    { value: 'date', label: 'תאריך - חדש לישן' },
    { value: 'price', label: 'מחיר - גבוה לנמוך' },
    { value: 'days', label: 'זמן למכירה - קצר לארוך' }
  ];

  const handleReset = () => {
    setSelectedType('all');
    setSelectedNeighborhood('all');
    setSortBy('date');
  };

  return (
    <section className="py-8 bg-white sticky top-20 z-30 shadow-md">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-4">
          <div className="flex flex-wrap gap-4 items-center">
            {/* סוג נכס */}
            <div className="min-w-[180px]">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
              >
                {PROPERTY_TYPES.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            {/* שכונה */}
            <div className="min-w-[180px]">
              <select
                value={selectedNeighborhood}
                onChange={(e) => setSelectedNeighborhood(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
              >
                {HAIFA_NEIGHBORHOODS.map((neighborhood) => (
                  <option key={neighborhood.value} value={neighborhood.value}>
                    {neighborhood.label}
                  </option>
                ))}
              </select>
            </div>

            {/* מיון */}
            <div className="min-w-[180px]">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* כפתור איפוס */}
            {(selectedType !== 'all' || selectedNeighborhood !== 'all' || sortBy !== 'date') && (
              <button
                onClick={handleReset}
                className="px-4 py-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
              >
                נקה סינון
              </button>
            )}
          </div>

          {/* מספר תוצאות */}
          <div className="text-gray-600">
            נמצאו <span className="font-bold text-primary-600">{resultsCount}</span> נכסים
          </div>
        </div>

        {/* תגיות סינון פעיל */}
        {(selectedType !== 'all' || selectedNeighborhood !== 'all') && (
          <div className="flex flex-wrap gap-2">
            {selectedType !== 'all' && (
              <span className="inline-flex items-center gap-1 bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
                {PROPERTY_TYPES.find(t => t.value === selectedType)?.label}
                <button
                  onClick={() => setSelectedType('all')}
                  className="hover:text-primary-900"
                >
                  ×
                </button>
              </span>
            )}
            {selectedNeighborhood !== 'all' && (
              <span className="inline-flex items-center gap-1 bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
                {HAIFA_NEIGHBORHOODS.find(n => n.value === selectedNeighborhood)?.label}
                <button
                  onClick={() => setSelectedNeighborhood('all')}
                  className="hover:text-primary-900"
                >
                  ×
                </button>
              </span>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertyFilters;