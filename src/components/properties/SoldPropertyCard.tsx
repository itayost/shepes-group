// File: src/components/properties/SoldPropertyCard.tsx

'use client';

import { SoldProperty } from '@/data/soldProperties';
import {
  Bed,
  Calendar,
  CheckCircle,
  Clock,
  MapPin,
  Maximize2,
  Quote
} from 'lucide-react';
import Image from 'next/image';

interface SoldPropertyCardProps {
  property: SoldProperty;
}

const SoldPropertyCard = ({ property }: SoldPropertyCardProps) => {
  // Format date
  const formatDate = (dateStr: string) => {
    const [year, month] = dateStr.split('-');
    const months = ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 
                   'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'];
    return `${months[parseInt(month) - 1]} ${year}`;
  };

  // Format price
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('he-IL', {
      style: 'currency',
      currency: 'ILS',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="group bg-background-card rounded-xl overflow-hidden border border-primary-500/20 hover:border-primary-500/40 hover:shadow-gold-lg transition-all duration-300">
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={property.images[0]}
          alt={property.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
        
        {/* Sold Badge */}
        <div className="absolute top-4 left-4 bg-gradient-gold text-background px-3 py-1 rounded-full text-sm font-bold shadow-gold flex items-center gap-1">
          <CheckCircle className="w-4 h-4" />
          נמכר!
        </div>
        
        {/* Days on Market */}
        {property.daysOnMarket <= 21 && (
          <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm text-text-gold-bright px-3 py-1 rounded-full text-xs font-medium">
            {property.daysOnMarket} ימים בלבד
          </div>
        )}
        
        {/* Price */}
        <div className="absolute bottom-4 right-4 left-4">
          <div className="text-2xl font-bold text-text-gold-bright">
            {formatPrice(property.soldPrice)}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-text-gold transition-colors">
          {property.title}
        </h3>
        
        {/* Location */}
        <div className="flex items-center gap-2 text-text-muted mb-4">
          <MapPin className="w-4 h-4 text-primary-500" />
          <span className="text-sm">{property.neighborhood}</span>
        </div>
        
        {/* Property Details */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="text-center p-2 bg-primary-500/10 rounded-lg">
            <Bed className="w-4 h-4 text-primary-500 mx-auto mb-1" />
            <span className="text-xs text-text-secondary">{property.rooms} חד׳</span>
          </div>
          <div className="text-center p-2 bg-primary-500/10 rounded-lg">
            <Maximize2 className="w-4 h-4 text-primary-500 mx-auto mb-1" />
            <span className="text-xs text-text-secondary">{property.size} מ״ר</span>
          </div>
          <div className="text-center p-2 bg-primary-500/10 rounded-lg">
            <Clock className="w-4 h-4 text-primary-500 mx-auto mb-1" />
            <span className="text-xs text-text-secondary">{property.daysOnMarket} ימים</span>
          </div>
        </div>
        
        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {property.features.slice(0, 3).map((feature, idx) => (
            <span 
              key={idx}
              className="text-xs px-2 py-1 bg-primary-500/10 text-text-muted rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>
        
        {/* Testimonial */}
        {property.testimonial && (
          <div className="pt-4 border-t border-primary-500/20">
            <Quote className="w-4 h-4 text-primary-500/30 mb-2" />
            <p className="text-sm text-text-muted italic line-clamp-2 mb-2">
              {property.testimonial.content}
            </p>
            <p className="text-xs text-primary-500 font-medium">
              — {property.testimonial.name}
            </p>
          </div>
        )}
        
        {/* Sold Date */}
        <div className="flex items-center gap-1 mt-4 text-xs text-text-muted">
          <Calendar className="w-3 h-3" />
          <span>נמכר ב{formatDate(property.soldDate)}</span>
        </div>
      </div>
    </div>
  );
};

export default SoldPropertyCard;