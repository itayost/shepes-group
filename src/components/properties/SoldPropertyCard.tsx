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
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
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
          <div className="bg-secondary-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            נמכר!
          </div>
          {property.daysOnMarket <= 14 && (
            <div className="bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              מכירה מהירה
            </div>
          )}
        </div>
        {/* מחיר */}
        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg">
          <div className="font-bold text-lg">{formatPrice(property.soldPrice)}</div>
          {pricePercentage !== '100.0' && (
            <div className="text-sm text-gray-600">
              {parseFloat(pricePercentage) > 100 ? '+' : ''}{(parseFloat(pricePercentage) - 100).toFixed(1)}% מהמבוקש
            </div>
          )}
        </div>
      </div>
      
      {/* תוכן */}
      <div className="p-6">
        {/* כותרת ומיקום */}
        <h3 className="text-xl font-bold mb-2">{property.title}</h3>
        <p className="text-gray-600 mb-4">{property.typeLabel} ב{property.neighborhood}</p>
        
        {/* פרטים */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
          <span className="flex items-center gap-1">
            <span>🛏️</span> {property.rooms} חד׳
          </span>
          <span className="flex items-center gap-1">
            <span>📐</span> {property.size} מ״ר
          </span>
          {property.floor > 0 && (
            <span className="flex items-center gap-1">
              <span>🏢</span> קומה {property.floor}/{property.totalFloors}
            </span>
          )}
        </div>

        {/* תכונות */}
        <div className="flex flex-wrap gap-2 mb-4">
          {property.features.slice(0, 3).map((feature, idx) => (
            <span key={idx} className="bg-gray-100 px-2 py-1 rounded text-xs">
              {feature}
            </span>
          ))}
          {property.features.length > 3 && (
            <span className="text-xs text-gray-500">
              +{property.features.length - 3} נוספים
            </span>
          )}
        </div>

        {/* מידע על המכירה */}
        <div className="border-t pt-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">נמכר ב:</span>
            <span className="font-semibold">{formatDate(property.soldDate)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">זמן בשוק:</span>
            <span className="font-semibold text-primary-600">{property.daysOnMarket} ימים</span>
          </div>
        </div>
        
        {/* המלצה */}
        {property.testimonial && (
          <blockquote className="mt-4 pt-4 border-t italic text-gray-600 text-sm">
            <p className="mb-2">"{property.testimonial.content}"</p>
            <cite className="text-xs not-italic font-semibold">
              - {property.testimonial.name}
            </cite>
          </blockquote>
        )}
      </div>
    </div>
  );
};

export default SoldPropertyCard;