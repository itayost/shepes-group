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
    <div className={`bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 ${className}`}>
      {/* Icon & Title */}
      <div className="text-center mb-6">
        <div className="text-5xl mb-4">{icon}</div>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
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
            <span className="text-gray-700 text-sm">{feature}</span>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <Link
        href={ctaLink}
        className="block w-full text-center bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
      >
        {ctaText}
      </Link>
    </div>
  );
};

export default ServiceCard;