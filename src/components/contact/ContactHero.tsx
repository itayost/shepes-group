import Badge from '@/components/ui/Badge';
import { Phone } from 'lucide-react';

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
        </div>
      </div>
    </section>
  );
};

export default ContactHero;