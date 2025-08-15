'use client';

import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { services } from '@/data/services';
import { ArrowRight, CheckCircle, FileText, Home, Key, Phone, Sparkles, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const iconMap = {
  'selling': Home,
  'buying': Key,
  'rental': FileText,
  'valuation': TrendingUp,
};

const ServicesDetailedSection = () => {
  const [activeTab, setActiveTab] = useState('selling');
  const activeService = services.find(s => s.id === activeTab)!;
  const Icon = iconMap[activeTab as keyof typeof iconMap] || Home;

  return (
    <section className="py-24 relative">
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="primary" size="lg" className="mb-6 animate-fade-in" glow>
            <Sparkles className="w-4 h-4" />
            מידע מפורט
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
            <span className="text-white">כל מה שצריך לדעת על </span>
            <span className="text-gradient-gold">השירותים שלנו</span>
          </h2>
        </div>

        {/* Luxury Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {services.map(service => {
            const TabIcon = iconMap[service.id as keyof typeof iconMap] || Home;
            const isActive = activeTab === service.id;
            
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`
                  relative px-8 py-4 rounded-xl font-semibold transition-all duration-500
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
                    <Icon className="w-4 h-4" />
                    {activeService.title}
                  </Badge>
                </div>

                {/* Stats Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-black/80 backdrop-blur-sm rounded-lg p-3 border border-primary-500/30">
                      <div className="text-2xl font-bold text-primary-400">98%</div>
                      <div className="text-xs text-dark-400">שביעות רצון</div>
                    </div>
                    <div className="bg-black/80 backdrop-blur-sm rounded-lg p-3 border border-primary-500/30">
                      <div className="text-2xl font-bold text-primary-400">21</div>
                      <div className="text-xs text-dark-400">ימים בממוצע</div>
                    </div>
                    <div className="bg-black/80 backdrop-blur-sm rounded-lg p-3 border border-primary-500/30">
                      <div className="text-2xl font-bold text-primary-400">150+</div>
                      <div className="text-xs text-dark-400">עסקאות</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Process Timeline */}
            {activeService.process && activeService.process.length > 0 && (
              <Card variant="glass" className="mt-6">
                <CardHeader>
                  <CardTitle className="text-white">תהליך העבודה</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {activeService.process.slice(0, 4).map((step, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <div className="relative">
                          <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-gold">
                            <span className="text-sm font-bold text-black">{idx + 1}</span>
                          </div>
                          {idx < Math.min(3, activeService.process.length - 1) && (
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
                              {typeof feature === 'string' ? feature : feature.title}
                            </h5>
                            {typeof feature !== 'string' && feature.description && (
                              <p className="text-sm text-dark-400">
                                {feature.description}
                              </p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Benefits List */}
            {activeService.benefits && activeService.benefits.length > 0 && (
              <Card variant="luxury" className="mb-8">
                <CardHeader>
                  <CardTitle className="text-white">מה תקבלו אצלנו?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {activeService.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-dark-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
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