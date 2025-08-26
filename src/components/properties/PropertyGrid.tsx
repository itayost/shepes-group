import SoldPropertyCard from '@/components/properties/SoldPropertyCard';
import Button from '@/components/ui/Button';
import { SoldProperty } from '@/data/soldProperties';
import { Phone, Sparkles } from 'lucide-react';

interface PropertyGridProps {
  properties: SoldProperty[];
}

const PropertyGrid = ({ properties }: PropertyGridProps) => {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-dark-950 via-black to-dark-950">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
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

        {/* Bottom CTA Section - Luxury Style */}
        {properties.length > 9 && (
          <div className="mt-20">
            {/* Luxury Divider */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="h-[1px] w-32 bg-gradient-to-r from-transparent to-primary-500" />
              <Sparkles className="w-6 h-6 text-primary-500" />
              <div className="h-[1px] w-32 bg-gradient-to-l from-transparent to-primary-500" />
            </div>

            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-white">מעוניינים למכור את </span>
                <span className="bg-gradient-to-r from-primary-500 to-primary-400 bg-clip-text text-transparent">
                  הנכס שלכם?
                </span>
              </h3>
              <p className="text-xl text-dark-300 mb-8 max-w-2xl mx-auto">
                הצטרפו למאות הלקוחות המרוצים שלנו וקבלו את המחיר הטוב ביותר עבור הנכס שלכם
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact">
                  <Button 
                    variant="primary" 
                    size="lg" 
                    icon={Phone}
                    glow
                  >
                    צרו איתנו קשר
                  </Button>
                </a>
                <a href="/services">
                  <Button 
                    variant="secondary" 
                    size="lg"
                  >
                    למידע נוסף
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertyGrid;