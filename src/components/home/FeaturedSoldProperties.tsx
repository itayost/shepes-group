// File: src/components/home/FeaturedSoldProperties.tsx

import { getFeaturedProperties } from '@/data/soldProperties';
import { Bed, Building2, Maximize2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedSoldProperties = () => {
  const featuredProperties = getFeaturedProperties();

  return (
    <section className="py-16 bg-black">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
            נכסים שמכרנו לאחרונה
          </h2>
          <p className="text-xl text-gray-300">
            הצטרפו למאות לקוחות מרוצים שמכרו את הנכס שלהם במחיר הטוב ביותר
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <div key={property.id} className="bg-[#1a1a1a] rounded-lg overflow-hidden hover:shadow-gold-lg transition-all duration-300 hover:-translate-y-1 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40">
              <div className="relative h-64">
                <Image
                  src={property.images[0]}
                  alt={`${property.type} ב${property.neighborhood}`}
                  fill
                  className="object-cover"
                />
                {/* תגית "נמכר!" - Gold gradient */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#FFD700] text-black px-3 py-1 rounded-full text-sm font-bold shadow-gold">
                  נמכר!
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">
                  {property.title}
                </h3>
                <p className="text-gray-400 mb-3">{property.neighborhood}</p>
                
                <div className="flex gap-4 text-gray-500 mb-4 text-sm">
                  <span className="flex items-center gap-1 text-[#D4AF37]">
                    <Bed className="w-4 h-4" />
                    {property.rooms} חד׳
                  </span>
                  <span className="flex items-center gap-1 text-[#D4AF37]">
                    <Maximize2 className="w-4 h-4" />
                    {property.size} מ״ר
                  </span>
                  {property.floor > 0 && (
                    <span className="flex items-center gap-1 text-[#D4AF37]">
                      <Building2 className="w-4 h-4" />
                      קומה {property.floor}
                    </span>
                  )}
                </div>
                
                <p className="text-sm text-gray-500 mb-4">
                  נמכר תוך {property.daysOnMarket} ימים
                </p>
                
                {property.testimonial && (
                  <blockquote className="italic text-gray-400 border-r-4 border-[#D4AF37] pr-4 text-sm">
                    {`"${property.testimonial.content}"`}
                    <cite className="block text-xs mt-2 not-italic font-semibold text-[#D4AF37]">
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
            className="inline-block bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-black px-6 py-3 rounded-lg font-bold hover:from-[#FFD700] hover:to-[#D4AF37] shadow-gold hover:shadow-gold-glow transition-all"
          >
            צפה בכל הנכסים שמכרנו
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSoldProperties;