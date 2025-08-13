import SoldPropertyCard from '@/components/properties/SoldPropertyCard';
import Button from '@/components/ui/Button';
import { SoldProperty } from '@/data/soldProperties';
import { RotateCcw } from 'lucide-react';

interface PropertyGridProps {
  properties: SoldProperty[];
  viewMode: 'grid' | 'list';
  onReset: () => void;
}

const PropertyGrid = ({ properties, viewMode, onReset }: PropertyGridProps) => {
  if (properties.length === 0) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              לא נמצאו נכסים
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              לא נמצאו נכסים התואמים את הסינון שבחרת
            </p>
            <Button 
              variant="primary" 
              size="lg" 
              icon={RotateCcw}
              onClick={onReset}
            >
              נקה סינון וצפה בכל הנכסים
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className={`
          ${viewMode === 'grid' 
            ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' 
            : 'space-y-6 max-w-5xl mx-auto'
          }
        `}>
          {properties.map((property) => (
            <SoldPropertyCard 
              key={property.id} 
              property={property}
              viewMode={viewMode}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyGrid;