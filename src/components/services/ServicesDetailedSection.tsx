// File: src/components/services/ServicesDetailedSection.tsx

import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Tabs from '@/components/ui/Tabs';
import { services } from '@/data/services';
import { Building2, CheckCircle, FileText, Home, Key, Phone, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const iconMap = {
  'selling': Home,
  'buying': Key,
  'project-marketing': Building2,
  'secondhand-marketing': Home,
  'rental': FileText,
  'valuation': TrendingUp,
};

const ServicesDetailedSection = () => {
  // Create tabs from services
  const tabs = services.map(service => {
    const Icon = iconMap[service.id as keyof typeof iconMap] || Home;
    
    return {
      id: service.id,
      label: service.title,
      icon: <Icon className="w-4 h-4" />,
      content: (
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
            {/* Image Section */}
            <div className="relative">
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-primary-500/20">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                
                {/* Floating Badge */}
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-black/80 backdrop-blur-sm text-primary-500 border-primary-500/50">
                    <Icon className="w-3 h-3" />
                    {service.title}
                  </Badge>
                </div>
              </div>

              {/* Process Timeline - Hidden on mobile for better UX */}
              <Card className="mt-6 hidden md:block bg-background-card border border-primary-500/20">
                <CardHeader>
                  <CardTitle className="text-lg text-primary-400">תהליך העבודה</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {service.process.slice(0, 4).map((step, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-primary-500">{idx + 1}</span>
                        </div>
                        <p className="text-sm text-gray-400">{step}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Content Section */}
            <div>
              {/* Description */}
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-primary-400 mb-4">
                  {service.title}
                </h3>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Features Grid */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-primary-500 mb-4">
                  היתרונות שלנו
                </h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <Card key={idx} variant="default" className="p-4 bg-background-card border border-primary-500/20 hover:border-primary-500/40">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <h5 className="font-semibold text-white mb-1">
                            {feature.title}
                          </h5>
                          <p className="text-sm text-gray-400">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Process Timeline - Show on mobile here */}
              <Card className="mb-8 md:hidden bg-background-card border border-primary-500/20">
                <CardHeader>
                  <CardTitle className="text-lg text-primary-400">תהליך העבודה</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {service.process.slice(0, 4).map((step, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-primary-500">{idx + 1}</span>
                        </div>
                        <p className="text-sm text-gray-400">{step}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <Card className="p-4 text-center bg-background-card border border-primary-500/20">
                  <div className="text-xl md:text-2xl font-bold text-primary-400">98%</div>
                  <div className="text-xs text-primary-500">שביעות רצון</div>
                </Card>
                <Card className="p-4 text-center bg-background-card border border-success-400/20">
                  <div className="text-xl md:text-2xl font-bold text-success-400">21</div>
                  <div className="text-xs text-success-400/70">ימים בממוצע</div>
                </Card>
                <Card className="p-4 text-center bg-background-card border border-primary-500/20">
                  <div className="text-xl md:text-2xl font-bold text-primary-400">150+</div>
                  <div className="text-xs text-primary-500">עסקאות</div>
                </Card>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button 
                    size="lg" 
                    variant="gradient" 
                    icon={Phone}
                    className="shadow-xl w-full bg-gradient-to-r from-primary-500 to-primary-600 text-black hover:from-primary-400 hover:to-primary-500 hover:shadow-gold-glow"
                  >
                    בואו נתחיל
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )
    };
  });

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-background-secondary to-background" id="services">
      {/* Section Header */}
      <div className="container">
        <div className="text-center mb-8 md:mb-12">
          <Badge variant="outline" className="mb-4 border-primary-500 text-primary-500 bg-primary-500/10">
            מידע מפורט
          </Badge>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-700 via-primary-500 to-primary-400 bg-clip-text text-transparent">
            כל מה שצריך לדעת על השירותים שלנו
          </h2>
        </div>
      </div>

      {/* Full Width Sticky Tabs Component */}
      <Tabs 
        tabs={tabs} 
        defaultTab="selling"
        variant="pills"
        className="w-full"
        sticky={true}
        stickyOffset={80}
        scrollToTopOnChange={true}
      />
    </section>
  );
};

export default ServicesDetailedSection;