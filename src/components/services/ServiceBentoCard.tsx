import Link from 'next/link';

export interface ServiceData {
  id: string;
  title: string;
  icon: string;
  description: string;
  features: string[];
  color: string;
  size: 'large' | 'medium' | 'small';
  stats: {
    label: string;
    value: string;
  };
}

interface ServiceBentoCardProps {
  service: ServiceData;
  onHover: (id: string | null) => void;
}

const ServiceBentoCard: React.FC<ServiceBentoCardProps> = ({ service, onHover }) => {
  // קביעת גודל התא לפי סוג השירות
  const getSizeClasses = () => {
    switch (service.size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2';
      case 'medium':
        return 'md:col-span-1 md:row-span-2';
      case 'small':
        return 'md:col-span-1 md:row-span-1';
      default:
        return '';
    }
  };

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 ${getSizeClasses()} ${service.color} text-white hover:shadow-gold-lg hover:-translate-y-1`}
      onMouseEnter={() => onHover(service.id)}
      onMouseLeave={() => onHover(null)}
    >
      <div className={`${service.size === 'large' ? 'p-8' : 'p-6'} h-full flex flex-col justify-between relative z-10`}>
        {/* תוכן עליון */}
        <div>
          <div className={`${service.size === 'large' ? 'text-6xl' : service.size === 'medium' ? 'text-5xl' : 'text-4xl'} mb-${service.size === 'large' ? '4' : '3'} animate-shimmer inline-block`}>
            {service.icon}
          </div>
          <h2 className={`${service.size === 'large' ? 'text-3xl' : service.size === 'medium' ? 'text-2xl' : 'text-xl'} font-bold mb-${service.size === 'large' ? '3' : '2'}`}>
            {service.title}
          </h2>
          <p className={`${service.size === 'large' ? 'text-lg' : service.size === 'medium' ? 'text-sm' : 'text-sm'} mb-${service.size === 'large' ? '6' : '4'} opacity-90`}>
            {service.description}
          </p>

          {/* רשימת תכונות - רק לכרטיסים גדולים ובינוניים */}
          {service.size !== 'small' && (
            service.size === 'large' ? (
              <div className="grid grid-cols-2 gap-3 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center text-xs">✓</span>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            ) : (
              <ul className="space-y-2 text-sm">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center text-xs">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            )
          )}
        </div>

        {/* תוכן תחתון */}
        <div className={service.size === 'large' ? 'flex items-end justify-between' : ''}>
          <div className={service.size === 'medium' ? 'mb-4' : ''}>
            <div className={`${service.size === 'large' ? 'text-4xl' : service.size === 'medium' ? 'text-3xl' : 'text-2xl'} font-bold`}>
              {service.stats.value}
            </div>
            <div className={`${service.size === 'large' ? 'text-sm' : 'text-xs'} opacity-75`}>
              {service.stats.label}
            </div>
          </div>
          
          {/* CTA - רק לכרטיסים גדולים ובינוניים */}
          {service.size === 'large' && (
            <Link href="/contact" className="btn-secondary group-hover:shadow-gold">
              התחל עכשיו ←
            </Link>
          )}
          {service.size === 'medium' && (
            <Link href="/contact" className="text-sm font-semibold hover:underline">
              גלה עוד ←
            </Link>
          )}
        </div>
      </div>

      {/* רקע דקורטיבי - רק לכרטיס גדול */}
      {service.size === 'large' && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
      )}
    </div>
  );
};

export default ServiceBentoCard;