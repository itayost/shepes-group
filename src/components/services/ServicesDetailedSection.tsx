'use client';

import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { services } from '@/data/services';
import {
  ArrowRight,
  CheckCircle,
  FileText,
  Home,
  Key,
  Phone,
  Sparkles,
  TrendingUp
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const ServicesDetailedSection = () => {
  const [activeTab, setActiveTab] = useState('selling');
  
  // מציאת השירות הפעיל
  const activeService = services.find(s => s.id === activeTab) || services[0];

  // מיפוי אייקונים לפי ID השירות
  const getIconForService = (serviceId: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
      'selling': Home,
      'buying': Key,
      'rental': FileText,
      'valuation': TrendingUp
    };
    return iconMap[serviceId] || Home;
  };

  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {services.map((service) => {
            const isActive = activeTab === service.id;
            const TabIcon = getIconForService(service.id);
            
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`
                  relative px-6 py-4 rounded-xl font-semibold transition-all duration-300
                  ${isActive 
                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-black shadow-gold-xl scale-105' 
                    : 'bg-dark-900 text-dark-300 border border-dark-800 hover:border-primary-500/50 hover:text-primary-500 hover:bg-dark-950'
                  }
                `}
              >
                <div className="flex items-center gap-3">
                  <TabIcon className="w-5 h-5" />
                  <span>{service.title}</span>
                </div>
                
                {isActive && (
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Service Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto animate-fade-in">
          {/* Image Section */}
          <div className="relative">
            <Card variant="luxury" className="overflow-hidden">
              <div className="relative h-[500px]">
                <Image
                  src={activeService.image}
                  alt={activeService.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Floating Badge */}
                <div className="absolute top-6 left-6">
                  <Badge variant="solid" className="shadow-gold-lg">
                    <span className="text-2xl ml-2">{activeService.icon}</span>
                    {activeService.title}
                  </Badge>
                </div>
              </div>
            </Card>

            {/* Process Steps */}
            {activeService.process && activeService.process.length > 0 && (
              <Card variant="glass" className="mt-6">
                <CardHeader>
                  <CardTitle className="text-white">תהליך העבודה</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {activeService.process.map((step, idx) => (
                      <div key={idx} className="relative flex items-start gap-4">
                        <div className="relative">
                          <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-black font-bold">
                            {idx + 1}
                          </div>
                          {idx < activeService.process.length - 1 && (
                            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-primary-500 to-transparent" />
                          )}
                        </div>
                        <p className="text-dark-300 pt-2">{step}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Content Section */}
          <div>
            {/* Description */}
            <div className="mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {activeService.title}
              </h3>
              <p className="text-xl text-dark-300 leading-relaxed">
                {activeService.description}
              </p>
            </div>

            {/* Features Grid */}
            {activeService.features && activeService.features.length > 0 && (
              <div className="mb-8">
                <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-primary-500" />
                  היתרונות שלנו
                </h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {activeService.features.map((feature, idx) => (
                    <Card key={idx} variant="glass" className="group hover:border-primary-500/50 transition-all duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                          <div>
                            <h5 className="font-semibold text-white mb-1 group-hover:text-primary-400 transition-colors">
                              {feature.title}
                            </h5>
                            <p className="text-sm text-dark-400">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="flex-1">
                <Button 
                  size="lg" 
                  variant="gradient" 
                  icon={Phone}
                  fullWidth
                  glow
                  className="shadow-gold-xl"
                >
                  בואו נתחיל
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline"
                icon={ArrowRight}
                className="flex-1"
              >
                מידע נוסף
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesDetailedSection;