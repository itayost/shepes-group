import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { getServicesPreview } from '@/data/services';
import { ArrowLeft, Award, FileText, Home, Key, Sparkles, TrendingUp } from 'lucide-react';
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
    <section className="py-24 relative">
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="primary" size="lg" className="mb-6 animate-fade-in" glow>
            <Sparkles className="w-4 h-4" />
            השירותים שלנו
          </Badge>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
            <span className="text-gradient-gold">פתרונות נדל"ן</span>
            <br />
            <span className="text-white">ברמה הגבוהה ביותר</span>
          </h2>
          
          <p className="text-xl text-dark-300 max-w-2xl mx-auto animate-slide-up animation-delay-200">
            ליווי אישי ומקצועי בכל שלב של העסקה
          </p>
          
          {/* Luxury Divider */}
          <div className="divider-gold mt-8" />
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Home;
            
            return (
              <Link key={index} href={service.link}>
                <Card 
                  variant="luxury" 
                  hover
                  className="h-full group animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-8">
                    {/* Icon Container */}
                    <div className="mb-6">
                      <div className="relative inline-flex">
                        <div className="absolute inset-0 bg-primary-500/20 rounded-2xl blur-xl group-hover:bg-primary-500/30 transition-all duration-500" />
                        <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl shadow-gold group-hover:shadow-gold-lg transition-all duration-500 group-hover:scale-110">
                          <Icon className="w-10 h-10 text-black" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-500 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-dark-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Link with Arrow */}
                    <div className="flex items-center text-primary-500 font-semibold group-hover:text-primary-400 transition-colors">
                      <span>למידע נוסף</span>
                      <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                    </div>
                    
                    {/* Gold Line at Bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col items-center">
            <p className="text-dark-400 mb-6">רוצים לשמוע עוד?</p>
            <Link href="/services">
              <Button 
                size="lg" 
                variant="gradient" 
                icon={Award}
                glow
                className="min-w-[300px]"
              >
                צפה בכל השירותים
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;