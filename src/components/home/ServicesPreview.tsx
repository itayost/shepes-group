import { getServicesPreview } from '@/data/services';
import Link from 'next/link';

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
          {servicesPreview.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className="bg-white rounded-lg shadow-md hover:shadow-gold-lg transition-all duration-300 p-6 text-center group hover:-translate-y-1"
            >
              <div className="text-5xl mb-4 group-hover:animate-shimmer inline-block">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-text-secondary mb-4">{service.description}</p>
              <span className="text-primary-600 font-semibold group-hover:text-primary-700 inline-flex items-center gap-1">
                למידע נוסף 
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
          ))}
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