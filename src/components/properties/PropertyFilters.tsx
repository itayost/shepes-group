'use client';

import { HAIFA_NEIGHBORHOODS, PROPERTY_TYPES } from '@/lib/constants';
import { ChevronDown, ChevronUp, Filter, RotateCcw, SlidersHorizontal, X } from 'lucide-react';
import { useEffect, useState } from 'react';

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
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      // On desktop, always expand
      if (window.innerWidth >= 1024) {
        setIsExpanded(true);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  const hasActiveFilters = selectedType !== 'all' || selectedNeighborhood !== 'all' || sortBy !== 'date';

  return (
    <section className={`${isMobile ? 'py-4' : 'py-8'} bg-white ${!isMobile ? 'sticky top-20' : ''} z-30 shadow-md`}>
      <div className="container">
        {/* Mobile Header - Always Visible */}
        {isMobile && (
          <div className="flex items-center justify-between mb-3">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 text-gray-700 font-medium"
            >
              <SlidersHorizontal className="w-5 h-5" />
              <span>סינון ומיון</span>
              {hasActiveFilters && (
                <span className="bg-primary-600 text-white text-xs px-2 py-0.5 rounded-full">
                  {[selectedType !== 'all', selectedNeighborhood !== 'all', sortBy !== 'date'].filter(Boolean).length}
                </span>
              )}
              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            <div className="text-sm text-gray-600">
              <span className="font-bold text-primary-600">{resultsCount}</span> נכסים
            </div>
          </div>
        )}

        {/* Desktop Header - Always Visible */}
        {!isMobile && (
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-gray-600">
              <Filter className="w-5 h-5" />
              <span className="font-medium">סינון ומיון:</span>
            </div>
            <div className="text-gray-600">
              נמצאו <span className="font-bold text-primary-600">{resultsCount}</span> נכסים
            </div>
          </div>
        )}

        {/* Collapsible Filters Section */}
        {(isExpanded || !isMobile) && (
          <div className={`${isMobile ? 'animate-slide-down' : ''}`}>
            <div className={`${isMobile ? 'space-y-3' : 'flex flex-wrap gap-4 items-center'}`}>
              {/* סוג נכס */}
              <div className={`${isMobile ? 'w-full' : 'min-w-[180px]'}`}>
                {isMobile && <label className="text-xs text-gray-600 mb-1 block">סוג נכס</label>}
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white appearance-none bg-no-repeat"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                    backgroundPosition: 'left 12px center',
                    backgroundSize: '12px'
                  }}
                >
                  {PROPERTY_TYPES.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* שכונה */}
              <div className={`${isMobile ? 'w-full' : 'min-w-[180px]'}`}>
                {isMobile && <label className="text-xs text-gray-600 mb-1 block">שכונה</label>}
                <select
                  value={selectedNeighborhood}
                  onChange={(e) => setSelectedNeighborhood(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white appearance-none bg-no-repeat"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                    backgroundPosition: 'left 12px center',
                    backgroundSize: '12px'
                  }}
                >
                  {HAIFA_NEIGHBORHOODS.map((neighborhood) => (
                    <option key={neighborhood.value} value={neighborhood.value}>
                      {neighborhood.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* מיון */}
              <div className={`${isMobile ? 'w-full' : 'min-w-[180px]'}`}>
                {isMobile && <label className="text-xs text-gray-600 mb-1 block">מיון לפי</label>}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white appearance-none bg-no-repeat"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                    backgroundPosition: 'left 12px center',
                    backgroundSize: '12px'
                  }}
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* כפתור איפוס */}
              {hasActiveFilters && (
                <button
                  onClick={handleReset}
                  className={`flex items-center gap-1 text-primary-600 hover:text-primary-700 font-medium transition-colors ${
                    isMobile ? 'w-full justify-center py-2 border border-primary-600 rounded-lg' : ''
                  }`}
                >
                  <RotateCcw className="w-4 h-4" />
                  נקה סינון
                </button>
              )}
            </div>

            {/* תגיות סינון פעיל - Desktop Only */}
            {!isMobile && (selectedType !== 'all' || selectedNeighborhood !== 'all') && (
              <div className="flex flex-wrap gap-2 mt-4">
                {selectedType !== 'all' && (
                  <span className="inline-flex items-center gap-1 bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
                    {PROPERTY_TYPES.find(t => t.value === selectedType)?.label}
                    <button
                      onClick={() => setSelectedType('all')}
                      className="hover:text-primary-900 flex items-center justify-center w-4 h-4"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {selectedNeighborhood !== 'all' && (
                  <span className="inline-flex items-center gap-1 bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
                    {HAIFA_NEIGHBORHOODS.find(n => n.value === selectedNeighborhood)?.label}
                    <button
                      onClick={() => setSelectedNeighborhood('all')}
                      className="hover:text-primary-900 flex items-center justify-center w-4 h-4"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
              </div>
            )}
          </div>
        )}

        {/* Active Filters Tags - Mobile Only (when collapsed) */}
        {isMobile && !isExpanded && hasActiveFilters && (
          <div className="flex flex-wrap gap-2 mt-3">
            {selectedType !== 'all' && (
              <span className="inline-flex items-center gap-1 bg-primary-100 text-primary-700 px-2 py-0.5 rounded-full text-xs">
                {PROPERTY_TYPES.find(t => t.value === selectedType)?.label}
              </span>
            )}
            {selectedNeighborhood !== 'all' && (
              <span className="inline-flex items-center gap-1 bg-primary-100 text-primary-700 px-2 py-0.5 rounded-full text-xs">
                {HAIFA_NEIGHBORHOODS.find(n => n.value === selectedNeighborhood)?.label}
              </span>
            )}
            {sortBy !== 'date' && (
              <span className="inline-flex items-center gap-1 bg-primary-100 text-primary-700 px-2 py-0.5 rounded-full text-xs">
                {sortOptions.find(s => s.value === sortBy)?.label}
              </span>
            )}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default PropertyFilters;