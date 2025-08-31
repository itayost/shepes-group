// File: src/components/properties/PropertyGrid.tsx

import SoldPropertyCard from '@/components/properties/SoldPropertyCard';
import { SoldProperty } from '@/data/soldProperties';

interface PropertyGridProps {
  properties: SoldProperty[];
}

const PropertyGrid = ({ properties }: PropertyGridProps) => {
  return (
    <section className="py-16 bg-gradient-to-b from-[#0a0a0a] to-black">
      <div className="container">
        {/* Grid Layout - Always 3 columns on desktop */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <div
              key={property.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <SoldPropertyCard property={property} />
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        {properties.length > 9 && (
          <div className="text-center mt-12">
            <p className="text-lg text-gray-300">
              מעוניינים למכור את הנכס שלכם?{' '}
              <a href="/contact" className="text-[#D4AF37] hover:text-[#FFD700] font-semibold underline">
                צרו איתנו קשר
              </a>
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertyGrid;