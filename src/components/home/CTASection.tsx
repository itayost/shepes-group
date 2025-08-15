import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { ArrowLeft, Mail, MessageCircle, Phone, Sparkles, Star } from 'lucide-react';
import Link from 'next/link';

const CTASection = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-dark-950 via-black to-dark-950 relative overflow-hidden">
      {/* Luxury Background Pattern */}
      <div className="absolute inset-0">
        {/* Gold Gradient Orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-primary-500/20 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-primary-600/20 to-transparent rounded-full blur-3xl animate-pulse animation-delay-1000" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#d4af3708_1px,transparent_1px),linear-gradient(to_bottom,#d4af3708_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Luxury Badge */}
          <Badge variant="solid" size="lg" className="mb-8 animate-fade-in shadow-gold-lg" glow>
            <Star className="w-5 h-5" />
            הזמן להתחיל
            <Star className="w-5 h-5" />
          </Badge>
          
          {/* Main Title */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 animate-slide-up">
            <span className="block text-white mb-4">מוכנים להתחיל את</span>
            <span className="text-gradient-gold">המסע לבית החדש?</span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-2xl text-dark-300 mb-4 animate-slide-up animation-delay-200">
            צוות המומחים שלנו זמין לכם 24/7
          </p>
          
          <p className="text-xl text-dark-400 mb-12 animate-slide-up animation-delay-400">
            ליווי מקצועי ואישי בכל שלב של העסקה
          </p>
          
          {/* Luxury Divider */}
          <div className="flex items-center justify-center gap-4 mb-12 animate-fade-in animation-delay-600">
            <div className="h-[2px] w-32 bg-gradient-to-r from-transparent to-primary-500" />
            <Sparkles className="w-8 h-8 text-primary-500 animate-pulse" />
            <div className="h-[2px] w-32 bg-gradient-to-l from-transparent to-primary-500" />
          </div>
          
          {/* CTA Buttons - Premium Style */}
          <div className="flex flex-col lg:flex-row gap-6 justify-center mb-12 animate-slide-up animation-delay-800">
            {/* Phone Button - Primary */}
            <a href={`tel:${SITE_CONFIG.phone}`} className="group">
              <Button 
                size="xl" 
                variant="gradient"
                icon={Phone}
                className="min-w-[300px] shadow-gold-xl hover:shadow-gold-2xl relative overflow-hidden"
                glow
              >
                <span className="relative z-10 flex items-center gap-3">
                  <span className="text-xl font-bold">חייגו עכשיו</span>
                  <span className="text-lg opacity-90">{SITE_CONFIG.phone}</span>
                </span>
              </Button>
            </a>
            
            {/* WhatsApp Button - Secondary */}
            <a 
              href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=שלום, אני מעוניין/ת בשירותי נדל"ן יוקרתיים`}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Button 
                size="xl" 
                variant="secondary"
                icon={MessageCircle}
                className="min-w-[300px]"
              >
                <span className="text-xl font-bold">שלחו וואטסאפ</span>
              </Button>
            </a>
          </div>
          
          {/* Alternative Contact Option */}
          <div className="animate-fade-in animation-delay-1000">
            <Link href="/contact" className="group inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors">
              <Mail className="w-5 h-5" />
              <span className="text-lg">או השאירו פרטים ונחזור אליכם</span>
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 pt-16 border-t border-dark-800 animate-fade-in animation-delay-1200">
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
                <span className="text-dark-400">זמינים 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
                <span className="text-dark-400">ללא התחייבות</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
                <span className="text-dark-400">ייעוץ חינם</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
                <span className="text-dark-400">מענה מיידי</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;