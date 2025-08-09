import { services } from '@/data/services';
import { ArrowRight, CheckCircle, FileText, Home, Key, TrendingUp } from 'lucide-react';
import Image from 'next/image';

// Map service IDs to Lucide icons
const iconMap = {
  'selling': Home,
  'buying': Key,
  'rental': FileText,
  'valuation': TrendingUp,
};

const ServicesDetailedSection = () => {
  const getServiceIcon = (serviceId: string) => {
    const IconComponent = iconMap[serviceId as keyof typeof iconMap] || Home;
    return IconComponent;
  };

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          שירותים מפורטים
        </h2>
        
        {services.map((service, index) => {
          const IconComponent = getServiceIcon(service.id);
          const isEven = index % 2 === 0;
          
          return (
            <div
              key={service.id}
              id={service.id}
              className={`mb-20 scroll-mt-20 ${index !== 0 ? 'pt-20 border-t' : ''}`}
            >
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                {/* תמונה */}
                <div className={`relative h-[400px] rounded-2xl overflow-hidden shadow-xl ${isEven ? '' : 'lg:order-2'}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur rounded-full p-3">
                    <IconComponent className="w-8 h-8 text-primary-600" />
                  </div>
                </div>

                {/* תוכן */}
                <div className={`${isEven ? '' : 'lg:order-1'}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <IconComponent className="w-10 h-10 text-primary-600" />
                    <h3 className="text-3xl font-bold">{service.title}</h3>
                  </div>
                  
                  <p className="text-lg text-text-secondary mb-8">
                    {service.description}
                  </p>

                  {/* תהליך העבודה */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold mb-4">תהליך העבודה</h4>
                    <div className="space-y-3">
                      {service.process.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-bold text-primary-600">{idx + 1}</span>
                          </div>
                          <p className="text-text-secondary">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* יתרונות */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h5 className="font-semibold mb-1">{feature.title}</h5>
                          <p className="text-sm text-text-secondary">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* כפתור קריאה לפעולה */}
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors group"
                  >
                    בואו נתחיל
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesDetailedSection;