import Link from 'next/link';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  ctaText?: string;
  ctaLink?: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  features,
  ctaText = 'למידע נוסף',
  ctaLink = '/contact',
  className = ''
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg hover:shadow-gold-lg transition-all duration-300 p-6 hover:-translate-y-1 ${className}`}>
      {/* Icon & Title */}
      <div className="text-center mb-6">
        <div className="text-5xl mb-4 animate-shimmer inline-block">{icon}</div>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-text-secondary">{description}</p>
      </div>

      {/* Features List */}
      <div className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <svg 
              className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 13l4 4L19 7" 
              />
            </svg>
            <span className="text-text-secondary text-sm">{feature}</span>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <Link
        href={ctaLink}
        className="btn-primary block w-full text-center"
      >
        {ctaText}
      </Link>
    </div>
  );
};

export default ServiceCard;