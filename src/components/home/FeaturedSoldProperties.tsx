import { getFeaturedProperties } from '@/data/soldProperties';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedSoldProperties = () => {
  // מקבלים את 3 הנכסים המובילים
  const featuredProperties = getFeaturedProperties();

  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">נכסים שמכרנו לאחרונה</h2>
          <p className="text-xl text-text-secondary">
            הצטרפו למאות לקוחות מרוצים שמכרו את הנכס שלהם במחיר הטוב ביותר
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-gold-lg transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-64">
                <Image
                  src={property.images[0]}
                  alt={`${property.type} ב${property.neighborhood}`}
                  fill
                  className="object-cover"
                />
                {/* תגית "נמכר!" מעודכנת */}
                <div className="absolute top-4 left-4 sold-badge">
                  נמכר!
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  {property.title}
                </h3>
                <p className="text-text-secondary mb-3">{property.neighborhood}</p>
                
                <div className="flex gap-4 text-text-muted mb-4 text-sm">
                  <span>🛏️ {property.rooms} חד׳</span>
                  <span>📐 {property.size} מ״ר</span>
                  {property.floor > 0 && <span>🏢 קומה {property.floor}</span>}
                </div>
                
                <p className="text-sm text-text-muted mb-4">
                  נמכר תוך {property.daysOnMarket} ימים
                </p>
                
                {property.testimonial && (
                  <blockquote className="italic text-text-secondary border-r-4 border-primary-500 pr-4 text-sm">
                    "{property.testimonial.content}"
                    <cite className="block text-xs mt-2 not-italic font-semibold text-primary-600">
                      - {property.testimonial.name}
                    </cite>
                  </blockquote>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link
            href="/sold-properties"
            className="btn-primary inline-block"
          >
            צפה בכל הנכסים שמכרנו
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSoldProperties;