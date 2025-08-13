import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { ArrowLeft, Mail, MessageCircle, Phone } from 'lucide-react';
import Link from 'next/link';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <Badge variant="secondary" size="lg" className="mb-6 bg-white/10 text-white border-white/20">
            בואו נתחיל
          </Badge>
          
          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            מוכנים להתחיל את המסע לבית החדש שלכם?
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            צוות המומחים שלנו זמין לכם 24/7 
            <br />
            ליווי מקצועי ואישי בכל שלב של העסקה
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a href={`tel:${SITE_CONFIG.phone}`}>
              <Button 
                size="lg" 
                variant="secondary"
                icon={Phone}
                className="bg-white text-primary-700 hover:bg-gray-100 shadow-2xl"
              >
                חייגו עכשיו: {SITE_CONFIG.phone}
              </Button>
            </a>
            
            <a 
              href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=שלום, אני מעוניין/ת בשירותי נדל"ן`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                variant="outline"
                icon={MessageCircle}
                className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20"
              >
                שלחו וואטסאפ
              </Button>
            </a>
          </div>
          
          {/* Contact Form Link */}
          <Link href="/contact">
            <Button
              variant="ghost"
              icon={Mail}
              iconPosition="right"
              className="text-white hover:text-white/90"
            >
              או השאירו פרטים ונחזור אליכם
              <ArrowLeft className="w-4 h-4 mr-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;