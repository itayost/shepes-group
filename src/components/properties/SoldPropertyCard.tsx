import { Bed, Building2, Calendar, Clock, Maximize2, TrendingUp } from 'lucide-react';
import Image from 'next/image';

interface SoldPropertyProps {
  property: {
    id: number;
    type: string;
    typeLabel: string;
    title: string;
    neighborhood: string;
    rooms: number;
    size: number;
    floor: number;
    totalFloors: number;
    soldDate: string;
    soldPrice: number;
    askingPrice: number;
    daysOnMarket: number;
    images: string[];
    features: string[];
    testimonial?: {
      name: string;
      content: string;
    };
  };
}

const SoldPropertyCard: React.FC<SoldPropertyProps> = ({ property }) => {
  // פורמט תאריך
  const formatDate = (dateStr: string) => {
    const [year, month] = dateStr.split('-');
    const months = ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 
                   'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'];
    return `${months[parseInt(month) - 1]} ${year}`;
  };

  // פורמט מחיר
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('he-IL', {
      style: 'currency',
      currency: 'ILS',
      maximumFractionDigits: 0
    }).format(price);
  };

  // חישוב אחוז מהמחיר המבוקש
  const pricePercentage = ((property.soldPrice / property.askingPrice) * 100).toFixed(1);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-gold-lg transition-all duration-300 group hover:-translate-y-1">
      {/* תמונה */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={property.images[0]}
          alt={property.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* תגיות */}
        <div className="absolute top-4 left-4 space-y-2">
          <div className="sold-badge">
            נמכר!
          </div>
          {property.daysOnMarket <= 14 && (
            <div className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-gold animate-shimmer">
              מכירה מהירה
            </div>
          )}
        </div>
        {/* מחיר */}
        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-lg">
          <div className="font-bold text-lg price-tag">{formatPrice(property.soldPrice)}</div>
          {pricePercentage !== '100.0' && (
            <div className="text-sm text-text-secondary flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              {parseFloat(pricePercentage) > 100 ? '+' : ''}{(parseFloat(pricePercentage) - 100).toFixed(1)}% מהמבוקש
            </div>
          )}
        </div>
      </div>
      
      {/* תוכן */}
      <div className="p-6">
        {/* כותרת ומיקום */}
        <h3 className="text-xl font-bold mb-2">{property.title}</h3>
        <p className="text-text-secondary mb-4">{property.typeLabel} ב{property.neighborhood}</p>
        
        {/* פרטים */}
        <div className="flex flex-wrap gap-4 text-sm text-text-muted mb-4">
          <span className="flex items-center gap-1">
            <Bed className="w-4 h-4" />
            <span>{property.rooms} חד׳</span>
          </span>
          <span className="flex items-center gap-1">
            <Maximize2 className="w-4 h-4" />
            <span>{property.size} מ״ר</span>
          </span>
          {property.floor > 0 && (
            <span className="flex items-center gap-1">
              <Building2 className="w-4 h-4" />
              <span>קומה {property.floor}/{property.totalFloors}</span>
            </span>
          )}
        </div>

        {/* תכונות */}
        <div className="flex flex-wrap gap-2 mb-4">
          {property.features.slice(0, 3).map((feature, idx) => (
            <span key={idx} className="bg-primary-50 px-2 py-1 rounded text-xs text-primary-700">
              {feature}
            </span>
          ))}
          {property.features.length > 3 && (
            <span className="text-xs text-text-muted">
              +{property.features.length - 3} נוספים
            </span>
          )}
        </div>

        {/* מידע על המכירה */}
        <div className="border-t pt-4 space-y-2">
          <div className="flex justify-between items-center text-sm">
            <span className="text-text-secondary flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              נמכר ב:
            </span>
            <span className="font-semibold">{formatDate(property.soldDate)}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-text-secondary flex items-center gap-1">
              <Clock className="w-3 h-3" />
              זמן בשוק:
            </span>
            <span className="font-semibold text-primary-600">{property.daysOnMarket} ימים</span>
          </div>
        </div>
        
        {/* המלצה */}
        {property.testimonial && (
          <blockquote className="mt-4 pt-4 border-t italic text-text-secondary text-sm">
            <p className="mb-2">"{property.testimonial.content}"</p>
            <cite className="text-xs not-italic font-semibold text-primary-600">
              - {property.testimonial.name}
            </cite>
          </blockquote>
        )}
      </div>
    </div>
  );
};

export default SoldPropertyCard;