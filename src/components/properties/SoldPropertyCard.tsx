// File: src/components/properties/SoldPropertyCard.tsx

import Avatar from '@/components/ui/Avatar';
import Badge from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';
import { SoldProperty } from '@/data/soldProperties';
import {
  Bed, Building2, Calendar,
  CheckCircle,
  Clock,
  MapPin,
  Maximize2,
  Sparkles,
  Star,
  TrendingUp
} from 'lucide-react';
import Image from 'next/image';

interface SoldPropertyCardProps {
  property: SoldProperty;
  viewMode?: 'grid' | 'list';
}

const SoldPropertyCard = ({ property, viewMode = 'grid' }: SoldPropertyCardProps) => {
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

  // Calculate price performance
  const pricePerformance = ((property.soldPrice / property.askingPrice) * 100);
  const isAboveAsking = pricePerformance > 100;

  if (viewMode === 'list') {
    return (
      <Card variant="elevated" hover className="overflow-hidden bg-[#1a1a1a] border border-[#D4AF37]/20">
        <div className="flex flex-col lg:flex-row">
          {/* Image */}
          <div className="relative h-64 lg:h-auto lg:w-96">
            <Image
              src={property.images[0]}
              alt={property.title}
              fill
              className="object-cover"
            />
            <div className="absolute top-4 left-4">
              <Badge variant="success" icon={CheckCircle} className="bg-green-900/80 text-green-400 border-green-400/30">
                נמכר!
              </Badge>
            </div>
          </div>

          {/* Content */}
          <CardContent className="flex-1 p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {property.title}
                </h3>
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                  <span>{property.typeLabel} ב{property.neighborhood}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-[#FFD700]">
                  {formatPrice(property.soldPrice)}
                </div>
                <Badge 
                  variant={isAboveAsking ? 'success' : 'warning'}
                  size="sm"
                  className="mt-1"
                >
                  {isAboveAsking ? '+' : ''}{(pricePerformance - 100).toFixed(1)}% מהמבוקש
                </Badge>
              </div>
            </div>

            {/* Property Details */}
            <div className="flex flex-wrap gap-4 mb-4">
              <Badge variant="outline" icon={Bed} className="border-[#D4AF37]/30 text-[#D4AF37]">
                {property.rooms} חדרים
              </Badge>
              <Badge variant="outline" icon={Maximize2} className="border-[#D4AF37]/30 text-[#D4AF37]">
                {property.size} מ״ר
              </Badge>
              {property.floor > 0 && (
                <Badge variant="outline" icon={Building2} className="border-[#D4AF37]/30 text-[#D4AF37]">
                  קומה {property.floor}/{property.totalFloors}
                </Badge>
              )}
              <Badge variant="outline" icon={Calendar} className="border-[#D4AF37]/30 text-[#D4AF37]">
                נמכר ב{formatDate(property.soldDate)}
              </Badge>
              <Badge variant="outline" icon={Clock} className="border-[#D4AF37]/30 text-[#D4AF37]">
                תוך {property.daysOnMarket} ימים
              </Badge>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-2 mb-4">
              {property.features.map((feature, idx) => (
                <Badge key={idx} variant="default" size="sm" className="bg-[#D4AF37]/10 text-[#D4AF37] border-[#D4AF37]/20">
                  {feature}
                </Badge>
              ))}
            </div>

            {/* Testimonial */}
            {property.testimonial && (
              <div className="bg-black/50 rounded-lg p-4 border-r-4 border-[#D4AF37]">
                <p className="text-gray-300 italic mb-2">
                  {`"${property.testimonial.content}"`}
                </p>
                <div className="flex items-center gap-2">
                  <Avatar size="xs" fallback={property.testimonial.name[0]} className="border-[#D4AF37]" />
                  <span className="text-sm font-semibold text-[#D4AF37]">
                    {property.testimonial.name}
                  </span>
                </div>
              </div>
            )}
          </CardContent>
        </div>
      </Card>
    );
  }

  // Grid View (Default)
  return (
    <Card variant="elevated" hover className="overflow-hidden group bg-[#1a1a1a] border border-[#D4AF37]/20 hover:border-[#D4AF37]/40">
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={property.images[0]}
          alt={property.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 space-y-2">
          <Badge variant="success" icon={CheckCircle} className="shadow-lg bg-green-900/80 text-green-400 border-green-400/30">
            נמכר!
          </Badge>
          {property.daysOnMarket <= 14 && (
            <Badge variant="warning" icon={Sparkles} className="shadow-lg bg-yellow-900/80 text-yellow-400 border-yellow-400/30">
              מכירה מהירה
            </Badge>
          )}
        </div>

        {/* Price Overlay */}
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-4">
          <div className="text-white">
            <div className="text-2xl font-bold mb-1 text-[#FFD700]">
              {formatPrice(property.soldPrice)}
            </div>
            <div className="flex items-center gap-2 text-sm text-[#D4AF37]">
              <TrendingUp className="w-4 h-4" />
              <span>
                {isAboveAsking ? '+' : ''}{(pricePerformance - 100).toFixed(1)}% מהמבוקש
              </span>
            </div>
          </div>
        </div>
      </div>

      <CardContent className="p-6">
        {/* Title & Location */}
        <h3 className="text-xl font-bold text-white mb-2">
          {property.title}
        </h3>
        <div className="flex items-center gap-2 text-gray-400 mb-4">
          <MapPin className="w-4 h-4 text-[#D4AF37]" />
          <span>{property.typeLabel} ב{property.neighborhood}</span>
        </div>

        {/* Property Details */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="text-center">
            <Bed className="w-5 h-5 mx-auto mb-1 text-[#D4AF37]" />
            <div className="text-sm font-semibold text-white">{property.rooms}</div>
            <div className="text-xs text-gray-500">חדרים</div>
          </div>
          <div className="text-center border-x border-[#D4AF37]/20">
            <Maximize2 className="w-5 h-5 mx-auto mb-1 text-[#D4AF37]" />
            <div className="text-sm font-semibold text-white">{property.size}</div>
            <div className="text-xs text-gray-500">מ״ר</div>
          </div>
          <div className="text-center">
            <Clock className="w-5 h-5 mx-auto mb-1 text-[#D4AF37]" />
            <div className="text-sm font-semibold text-white">{property.daysOnMarket}</div>
            <div className="text-xs text-gray-500">ימים</div>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-1 mb-4">
          {property.features.slice(0, 3).map((feature, idx) => (
            <Badge key={idx} variant="outline" size="xs" className="border-[#D4AF37]/30 text-[#D4AF37] bg-[#D4AF37]/5">
              {feature}
            </Badge>
          ))}
        </div>

        {/* Testimonial */}
        {property.testimonial && (
          <div className="pt-4 border-t border-[#D4AF37]/20">
            <div className="flex items-start gap-3">
              <Avatar 
                size="sm" 
                fallback={property.testimonial.name[0]}
                className="flex-shrink-0 border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37]"
              />
              <div className="flex-1">
                <p className="text-sm text-gray-400 italic line-clamp-2">
                  {`"${property.testimonial.content}"`}
                </p>
                <p className="text-xs font-semibold text-[#D4AF37] mt-1">
                  {property.testimonial.name}
                </p>
                <div className="flex gap-0.5 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#FFD700] text-[#FFD700]" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SoldPropertyCard;