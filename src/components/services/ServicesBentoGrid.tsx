import { services } from '@/data/services';
import { ArrowRight, Check, ChevronRight, FileText, Home, Key, TrendingUp } from 'lucide-react';
import Link from 'next/link';

// Map service IDs to Lucide icons
const iconMap = {
  'selling': Home,
  'buying': Key,
  'rental': FileText,
  'valuation': TrendingUp,
};

const ServicesBentoGrid = () => {
  const getServiceIcon = (serviceId: string) => {
    const IconComponent = iconMap[serviceId as keyof typeof iconMap] || Home;
    return IconComponent;
  };

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[320px]">
          
          {/* מכירת נכס - כרטיס גדול */}
          {services[0] && (
            <div className="group relative lg:col-span-2 bg-gradient-luxury rounded-3xl p-8 text-white overflow-hidden hover:shadow-luxury transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl transform translate-x-20 -translate-y-20"></div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="mb-6">
                  {(() => {
                    const IconComponent = getServiceIcon(services[0].id);
                    return <IconComponent className="w-16 h-16 text-primary-400 filter drop-shadow-lg" />;
                  })()}
                </div>
                <h3 className="text-3xl font-bold mb-4 text-primary-400">{services[0].title}</h3>
                <p className="text-lg mb-6 text-gray-300 flex-grow">{services[0].description}</p>
                
                <div className="grid grid-cols-2 gap-3">
                  {services[0].features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-5 h-5 bg-primary-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary-400" />
                      </div>
                      <span className="text-sm text-gray-300">{feature.title}</span>
                    </div>
                  ))}
                </div>
                
                <Link
                  href="#selling"
                  className="mt-6 inline-flex items-center gap-2 text-primary-400 font-semibold hover:gap-3 transition-all hover:text-primary-300"
                >
                  למידע נוסף
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          )}

          {/* קניית נכס */}
          {services[1] && (
            <div className="group relative bg-gradient-gold rounded-3xl p-6 text-secondary-900 overflow-hidden hover:shadow-gold-lg transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="mb-4">
                  {(() => {
                    const IconComponent = getServiceIcon(services[1].id);
                    return <IconComponent className="w-12 h-12 text-secondary-800 filter drop-shadow" />;
                  })()}
                </div>
                <h3 className="text-2xl font-bold mb-3">{services[1].title}</h3>
                <p className="text-base text-secondary-800 mb-4 flex-grow">{services[1].description}</p>
                
                <div className="space-y-2 mb-4">
                  {services[1].features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-secondary-700 flex-shrink-0" />
                      <span className="text-sm">{feature.title}</span>
                    </div>
                  ))}
                </div>
                
                <Link
                  href="#buying"
                  className="mt-auto inline-flex items-center gap-2 text-secondary-900 font-semibold hover:gap-3 transition-all hover:text-secondary-950"
                >
                  גלה עוד
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}

          {/* השכרה */}
          {services[2] && (
            <div className="group relative bg-primary-500 rounded-3xl p-6 text-white overflow-hidden hover:shadow-gold-lg transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="mb-4">
                  {(() => {
                    const IconComponent = getServiceIcon(services[2].id);
                    return <IconComponent className="w-12 h-12 text-white filter drop-shadow" />;
                  })()}
                </div>
                <h3 className="text-2xl font-bold mb-3">{services[2].title}</h3>
                <p className="text-base text-white/90 mb-4 flex-grow">{services[2].description}</p>
                
                <div className="space-y-2 mb-4">
                  {services[2].features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-white/80 flex-shrink-0" />
                      <span className="text-sm text-white/90">{feature.title}</span>
                    </div>
                  ))}
                </div>
                
                <Link
                  href="#rental"
                  className="mt-auto inline-flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all"
                >
                  גלה עוד
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}

          {/* הערכת שווי - כרטיס רחב */}
          {services[3] && (
            <div className="group relative lg:col-span-2 bg-accent-500 rounded-3xl p-8 text-secondary-900 overflow-hidden hover:shadow-gold-lg transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl transform -translate-x-20 translate-y-20"></div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="mb-4">
                      {(() => {
                        const IconComponent = getServiceIcon(services[3].id);
                        return <IconComponent className="w-12 h-12 text-secondary-800 filter drop-shadow" />;
                      })()}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{services[3].title}</h3>
                  </div>
                  <div className="bg-white/80 backdrop-blur rounded-full px-4 py-2 text-sm font-semibold shadow-md">
                    חינם ללקוחותינו
                  </div>
                </div>
                
                <p className="text-lg text-secondary-800 mb-6">{services[3].description}</p>
                
                <div className="grid grid-cols-3 gap-4 mt-auto">
                  {services[3].features.slice(0, 6).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-secondary-700 flex-shrink-0" />
                      <span className="text-sm">{feature.title}</span>
                    </div>
                  ))}
                </div>
                
                <Link
                  href="#valuation"
                  className="mt-6 inline-flex items-center gap-2 text-secondary-900 font-semibold hover:gap-3 transition-all"
                >
                  למידע נוסף
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default ServicesBentoGrid;