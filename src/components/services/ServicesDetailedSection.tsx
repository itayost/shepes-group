import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Tabs from '@/components/ui/Tabs';
import { services } from '@/data/services';
<<<<<<< HEAD
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
=======
import { CheckCircle, FileText, Home, Key, Phone, TrendingUp } from 'lucide-react';
>>>>>>> parent of 0101384 (םל)
import Image from 'next/image';
import Link from 'next/link';

const ServicesDetailedSection = () => {
<<<<<<< HEAD
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
=======
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
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
>>>>>>> parent of 0101384 (םל)
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Floating Badge */}
<<<<<<< HEAD
                <div className="absolute top-6 left-6">
                  <Badge variant="solid" className="shadow-gold-lg">
                    <span className="text-2xl ml-2">{activeService.icon}</span>
                    {activeService.title}
=======
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm">
                    <Icon className="w-3 h-3" />
                    {service.title}
>>>>>>> parent of 0101384 (םל)
                  </Badge>
                </div>
              </div>

<<<<<<< HEAD
            {/* Process Steps */}
            {activeService.process && activeService.process.length > 0 && (
              <Card variant="glass" className="mt-6">
=======
              {/* Process Timeline - Hidden on mobile for better UX */}
              <Card className="mt-6 hidden md:block">
>>>>>>> parent of 0101384 (םל)
                <CardHeader>
                  <CardTitle className="text-lg">תהליך העבודה</CardTitle>
                </CardHeader>
                <CardContent>
<<<<<<< HEAD
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
=======
                  <div className="space-y-3">
                    {service.process.slice(0, 4).map((step, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-primary-600">{idx + 1}</span>
>>>>>>> parent of 0101384 (םל)
                        </div>
                        <p className="text-sm text-gray-600">{step}</p>
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
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Features Grid */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  היתרונות שלנו
                </h4>
                <div className="grid sm:grid-cols-2 gap-4">
<<<<<<< HEAD
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
=======
                  {service.features.map((feature, idx) => (
                    <Card key={idx} variant="default" className="p-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-1">
                            {feature.title}
                          </h5>
                          <p className="text-sm text-gray-600">
                            {feature.description}
                          </p>
>>>>>>> parent of 0101384 (םל)
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

<<<<<<< HEAD
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
=======
              {/* Process Timeline - Show on mobile here */}
              <Card className="mb-8 md:hidden">
                <CardHeader>
                  <CardTitle className="text-lg">תהליך העבודה</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {service.process.slice(0, 4).map((step, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-primary-600">{idx + 1}</span>
                        </div>
                        <p className="text-sm text-gray-600">{step}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <Card className="p-4 text-center bg-primary-50">
                  <div className="text-xl md:text-2xl font-bold text-primary-700">98%</div>
                  <div className="text-xs text-gray-600">שביעות רצון</div>
                </Card>
                <Card className="p-4 text-center bg-green-50">
                  <div className="text-xl md:text-2xl font-bold text-green-700">21</div>
                  <div className="text-xs text-gray-600">ימים בממוצע</div>
                </Card>
                <Card className="p-4 text-center bg-amber-50">
                  <div className="text-xl md:text-2xl font-bold text-amber-700">150+</div>
                  <div className="text-xs text-gray-600">עסקאות</div>
                </Card>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button 
                    size="lg" 
                    variant="gradient" 
                    icon={Phone}
                    className="shadow-xl w-full"
                  >
                    בואו נתחיל
                  </Button>
                </Link>
              </div>
>>>>>>> parent of 0101384 (םל)
            </div>
          </div>
        </div>
      )
    };
  });

  return (
    <section className="py-16 md:py-20 bg-white">
      {/* Section Header */}
      <div className="container">
        <div className="text-center mb-8 md:mb-12">
          <Badge variant="outline" className="mb-4">
            מידע מפורט
          </Badge>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
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
        stickyOffset={80} // Adjust based on your header height
        scrollToTopOnChange={true}
      />
    </section>
  );
};

export default ServicesDetailedSection;