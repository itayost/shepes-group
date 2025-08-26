import Badge from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';
import { Calendar, MapPin, Trophy } from 'lucide-react';

const timelineEvents = [
  {
    year: '2006',
    title: 'ההתחלה',
    description: 'גלית מתחילה את דרכה בתחום הנדל"ן בחיפה',
    agent: 'גלית',
    icon: Calendar
  },
  {
    year: '2009',
    title: 'הצטרפות לצוות',
    description: 'חיים מצטרף לתחום ומתמחה בנכסים מסחריים',
    agent: 'חיים',
    icon: MapPin
  },
  {
    year: '2015',
    title: 'הקמת שפס נדל"ן',
    description: 'פתיחת המשרד המשותף והתחלת שיתוף הפעולה המלא',
    agent: 'גלית וחיים',
    icon: Trophy
  },
  {
    year: '2020',
    title: 'הרחבת השירותים',
    description: 'הוספת שירותי ניהול נכסים והערכות שווי מקצועיות',
    agent: 'גלית וחיים',
    icon: Trophy
  },
  {
    year: '2024',
    title: 'מובילים בחיפה',
    description: 'מעל 150 נכסים נמכרו, 98% שביעות רצון',
    agent: 'גלית וחיים',
    icon: Trophy
  }
];

const TimelineSection = () => {
  return (
    <section className="relative py-20 lg:py-32">
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <Badge variant="solid" className="mb-4 animate-fade-in" glow>
            המסע שלנו
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-slide-up">
            <span className="text-white">הסיפור שלנו </span>
            <span className="bg-gradient-to-r from-primary-500 to-primary-400 bg-clip-text text-transparent">
              לאורך השנים
            </span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Line - Gold Gradient */}
            <div className="absolute right-1/2 transform translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-500/30 via-primary-500 to-primary-500/30" />

            {/* Timeline Events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => {
                const Icon = event.icon;
                const isLeft = index % 2 === 0;

                return (
                  <div key={index} className="relative">
                    <div className={`flex items-center ${isLeft ? 'justify-start' : 'justify-end'}`}>
                      <div className={`w-5/12 ${isLeft ? 'text-left' : 'text-right'}`}>
                        <Card 
                          variant="luxury" 
                          hover 
                          className="animate-fade-in"
                          style={{ animationDelay: `${index * 150}ms` }}
                        >
                          <CardContent className="p-6">
                            {/* Year Badge with Gold */}
                            <Badge variant="solid" size="lg" className="mb-3" glow>
                              {event.year}
                            </Badge>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-white mb-2">
                              {event.title}
                            </h3>

                            {/* Description */}
                            <p className="text-dark-300 mb-3">
                              {event.description}
                            </p>

                            {/* Agent Badge */}
                            <Badge 
                              variant={
                                event.agent === 'גלית' ? 'warning' :
                                event.agent === 'חיים' ? 'info' :
                                'primary'
                              }
                              size="sm"
                            >
                              {event.agent}
                            </Badge>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    {/* Center Icon with Gold Glow */}
                    <div className="absolute right-1/2 transform translate-x-1/2 -translate-y-1/2 top-1/2">
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary-500/50 rounded-full blur-xl animate-pulse" />
                        <div className="relative w-12 h-12 bg-black rounded-full shadow-gold flex items-center justify-center border-2 border-primary-500">
                          <Icon className="w-6 h-6 text-primary-500" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;