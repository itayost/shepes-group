// File: src/components/home/ServicesPreview.tsx

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
    <section className="py-20 bg-gradient-to-b from-black to-[#0a0a0a]">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-[#D4AF37] text-[#D4AF37] bg-[#D4AF37]/10">
            השירותים שלנו
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
            {`פתרונות נדל"ן מקיפים`}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
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
                  className="h-full group bg-[#1a1a1a] border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 hover:shadow-gold transition-all"
                >
                  <CardContent className="p-6">
                    {/* Icon */}
                    <div className="mb-4">
                      <div className="inline-flex items-center justify-center w-14 h-14 bg-[#D4AF37]/10 rounded-xl group-hover:bg-gradient-to-br group-hover:from-[#D4AF37] group-hover:to-[#B8860B] transition-all duration-300">
                        <Icon className="w-7 h-7 text-[#D4AF37] group-hover:text-black transition-colors" />
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FFD700] transition-colors">
                      {service.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-400 mb-4">
                      {service.description}
                    </p>
                    
                    {/* Link */}
                    <div className="flex items-center text-[#D4AF37] font-semibold group-hover:text-[#FFD700]">
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
            <Button 
              size="lg" 
              variant="primary" 
              icon={ArrowLeft}
              className="bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-black hover:from-[#FFD700] hover:to-[#D4AF37] shadow-gold hover:shadow-gold-glow"
            >
              צפה בכל השירותים
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;