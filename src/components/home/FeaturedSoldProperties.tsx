import { getFeaturedProperties } from '@/data/soldProperties';
import { Bed, Building2, CheckCircle, Crown, Maximize2, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { Card } from '../ui/Card';

const FeaturedSoldProperties = () => {
  const featuredProperties = getFeaturedProperties();

  return (
    <section className="py-24 relative">
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="solid" size="lg" className="mb-6 animate-fade-in">
            <Crown className="w-4 h-4" />
            הצלחות מוכחות
          </Badge>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
            <span className="text-white">נכסים ש</span>
            <span className="text-gradient-gold">מכרנו בהצלחה</span>
          </h2>
          
          <p className="text-xl text-dark-300 max-w-2xl mx-auto animate-slide-up animation-delay-200">
            הצטרפו למאות לקוחות מרוצים שמכרו את הנכס שלהם במחיר הטוב ביותר
          </p>
        </div>
        
        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property, index) => (
            <Card 
              key={property.id} 
              variant="luxury"
              hover
              className="overflow-hidden group animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={property.images[0]}
                  alt={`${property.type} ב${property.neighborhood}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Sold Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <Badge variant="solid" className="shadow-gold">
                    <CheckCircle className="w-4 h-4" />
                    נמכר!
                  </Badge>
                </div>
                
                {/* Days on Market */}
                <div className="absolute bottom-4 right-4 z-10">
                  <div className="bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full border border-primary-500/50">
                    <span className="text-primary-400 text-sm font-bold">
                      נמכר תוך {property.daysOnMarket} ימים
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8">
                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-500 transition-colors">
                  {property.title}
                </h3>
                
                {/* Neighborhood */}
                <p className="text-primary-400 mb-4 font-semibold">
                  {property.neighborhood}
                </p>
                
                {/* Property Details */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 text-dark-300">
                    <Bed className="w-4 h-4 text-primary-500" />
                    <span>{property.rooms} חד׳</span>
                  </div>
                  <div className="flex items-center gap-2 text-dark-300">
                    <Maximize2 className="w-4 h-4 text-primary-500" />
                    <span>{property.size} מ״ר</span>
                  </div>
                  {property.floor > 0 && (
                    <div className="flex items-center gap-2 text-dark-300">
                      <Building2 className="w-4 h-4 text-primary-500" />
                      <span>קומה {property.floor}</span>
                    </div>
                  )}
                </div>
                
                {/* Testimonial */}
                {property.testimonial && (
                  <div className="pt-6 border-t border-dark-800">
                    <div className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-primary-500 flex-shrink-0 mt-1" />
                      <div>
                        <blockquote className="text-dark-300 italic mb-2">
                          {`"${property.testimonial.content}"`}
                        </blockquote>
                        <cite className="text-primary-400 text-sm font-semibold not-italic">
                          — {property.testimonial.name}
                        </cite>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col items-center">
            <p className="text-dark-400 mb-2">רוצים לראות עוד הצלחות?</p>
            <Link href="/sold-properties">
              <Button
                size="lg"
                variant="outline"
                icon={Crown}
                className="min-w-[300px]"
              >
                צפה בכל הנכסים שמכרנו
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSoldProperties;