import { getServicesPreview } from '@/data/services';
import { ArrowRight, FileText, Home, Key, TrendingUp } from 'lucide-react';
import Link from 'next/link';

// Map service icons to Lucide components
const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  '🏠': Home,
  '🔑': Key,
  '📋': FileText,
  '📊': TrendingUp,
};

const ServicesPreview = () => {
  const servicesPreview = getServicesPreview();
  
  return (
    <section className="py-16 bg-background-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">השירותים שלנו</h2>
          <p className="text-xl text-text-secondary">
            פתרונות נדל"ן מקיפים עם ליווי אישי ומקצועי
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesPreview.map((service, index) => {
            // Get the appropriate icon component
            const IconComponent = iconMap[service.icon] || Home;
            
            return (
              <Link
                key={index}
                href={service.link}
                className="bg-white rounded-lg shadow-md hover:shadow-gold-lg transition-all duration-300 p-6 text-center group hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4 group-hover:bg-primary-600 transition-colors">
                  <IconComponent className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-secondary mb-4">{service.description}</p>
                <span className="text-primary-600 font-semibold group-hover:text-primary-700 inline-flex items-center gap-1">
                  למידע נוסף 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            );
          })}
        </div>
        
        <div className="text-center mt-10">
          <Link
            href="/services"
            className="btn-primary inline-block"
          >
            כל השירותים שלנו
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;