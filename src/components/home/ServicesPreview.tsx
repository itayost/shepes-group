// src/components/home/ServicesPreview.tsx

import { getServicesPreview } from '@/data/services';
import Link from 'next/link';

const ServicesPreview = () => {
  const servicesPreview = getServicesPreview();
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">השירותים שלנו</h2>
          <p className="text-xl text-gray-600">
            פתרונות נדל"ן מקיפים עם ליווי אישי ומקצועי
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesPreview.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 text-center group"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <span className="text-primary-600 font-semibold group-hover:underline">
                למידע נוסף ←
              </span>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            כל השירותים שלנו
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;