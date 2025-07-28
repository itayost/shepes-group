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

const PropertyFilters: React.FC<PropertyFiltersProps> = ({
  selectedType,
  setSelectedType,
  selectedNeighborhood,
  setSelectedNeighborhood,
  sortBy,
  setSortBy,
  resultsCount
}) => {
  return (
    <section className="py-8 bg-white border-y border-gray-200">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          {/* פילטרים */}
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            {/* סוג נכס */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent hover:border-primary-300 transition-colors"
            >
              <option value="all">כל סוגי הנכסים</option>
              {PROPERTY_TYPES.map(type => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>

            {/* שכונה */}
            <select
              value={selectedNeighborhood}
              onChange={(e) => setSelectedNeighborhood(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent hover:border-primary-300 transition-colors"
            >
              <option value="all">כל השכונות</option>
              {HAIFA_NEIGHBORHOODS.map(neighborhood => (
                <option key={neighborhood} value={neighborhood}>
                  {neighborhood}
                </option>
              ))}
            </select>

            {/* מיון */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent hover:border-primary-300 transition-colors"
            >
              <option value="date">תאריך מכירה - חדש לישן</option>
              <option value="price">מחיר - גבוה לנמוך</option>
              <option value="days">זמן מכירה - מהיר לאיטי</option>
            </select>
          </div>

          {/* מספר תוצאות */}
          <div className="text-text-secondary bg-primary-50 px-4 py-2 rounded-lg">
            נמצאו <span className="font-bold gradient-text-gold text-lg">{resultsCount}</span> נכסים
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyFilters;