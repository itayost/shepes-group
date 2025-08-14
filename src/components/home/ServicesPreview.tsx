import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { getServicesPreview } from '@/data/services';
import { ArrowLeft, FileText, Home, Key, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const iconMap: Record<string, typeof Home> = {
  '🏠': Home,
  '🔑': Key,
  '📋': FileText,
  '📊': TrendingUp,
};

const ServicesPreview = () => {
  const services = getServicesPreview();
  
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            השירותים שלנו
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {`פתרונות נדל"ן מקיפים`}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ליווי אישי ומקצועי בכל שלב של העסקה
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Home;
            
            return (
              <Link key={index} href={service.link}>
                <Card 
                  variant="gradient" 
                  hover
                  className="h-full group"
                >
                  <CardContent className="p-6">
                    {/* Icon */}
                    <div className="mb-4">
                      <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 rounded-xl group-hover:bg-primary-600 transition-all duration-300">
                        <Icon className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {service.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    
                    {/* Link */}
                    <div className="flex items-center text-primary-600 font-semibold group-hover:text-primary-700">
                      <span>למידע נוסף</span>
                      <ArrowLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
        
        {/* CTA Button */}
        <div className="text-center mt-10">
          <Link href="/services">
            <Button size="lg" variant="primary" icon={ArrowLeft}>
              צפה בכל השירותים
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;