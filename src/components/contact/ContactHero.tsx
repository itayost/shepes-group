import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';

const ContactHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-gray-50 py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-100 rounded-full blur-3xl opacity-50 animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-50 animate-pulse" />
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <Badge 
            variant="primary" 
            size="lg" 
            icon={Phone}
            className="mb-6 animate-fade-in"
          >
            בואו נדבר
          </Badge>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-slide-up">
            צור קשר
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed animate-slide-up animation-delay-200">
            אנחנו כאן בשבילכם בכל שאלה, התייעצות או בקשה
            <br />
            זמינים 24/7 בטלפון, וואטסאפ ואימייל
          </p>

          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-400">
            <a href={`tel:${SITE_CONFIG.phone}`}>
              <Button size="lg" variant="gradient" icon={Phone}>
                חייגו עכשיו
              </Button>
            </a>
            
            <a 
              href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" icon={MessageCircle}>
                שלחו וואטסאפ
              </Button>
            </a>
            
            <a href={`mailto:${SITE_CONFIG.email}`}>
              <Button size="lg" variant="outline" icon={Mail}>
                שלחו אימייל
              </Button>
            </a>
          </div>

          {/* Address */}
          <div className="mt-8 flex items-center justify-center gap-2 text-gray-600 animate-fade-in animation-delay-600">
            <MapPin className="w-5 h-5" />
            <span>{SITE_CONFIG.address.street}, {SITE_CONFIG.address.city}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;