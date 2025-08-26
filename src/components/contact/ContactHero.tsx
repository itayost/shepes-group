import Badge from '@/components/ui/Badge';
import { Mail, MessageCircle, Phone, Sparkles } from 'lucide-react';

const ContactHero = () => {
  return (
    <section className="relative bg-black py-20 lg:py-32 overflow-hidden">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0">
        {/* Gold gradient orbs */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl animate-pulse animation-delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary-500/10 to-transparent" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#d4af3708_1px,transparent_1px),linear-gradient(to_bottom,#d4af3708_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <Badge 
            variant="solid" 
            size="lg" 
            icon={Phone}
            className="mb-6 animate-fade-in"
            glow
          >
            בואו נדבר
          </Badge>

          {/* Title with Gold Gradient */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-to-r from-primary-500 via-primary-400 to-primary-500 bg-clip-text text-transparent">
              צור קשר
            </span>
          </h1>

          {/* Luxury Divider */}
          <div className="flex items-center justify-center gap-4 my-8 animate-fade-in animation-delay-200">
            <div className="h-[1px] w-32 bg-gradient-to-r from-transparent to-primary-500" />
            <Sparkles className="w-6 h-6 text-primary-500" />
            <div className="h-[1px] w-32 bg-gradient-to-l from-transparent to-primary-500" />
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-dark-300 mb-8 leading-relaxed animate-slide-up animation-delay-200">
            אנחנו כאן בשבילכם בכל שאלה, התייעצות או בקשה
            <br />
            <span className="text-primary-500 font-semibold">
              זמינים 24/7 בטלפון, וואטסאפ ואימייל
            </span>
          </p>

          {/* Contact badges */}
          <div className="flex flex-wrap justify-center gap-3 animate-fade-in animation-delay-400">
            <Badge variant="outline" size="lg" className="px-4 py-2 backdrop-blur-sm">
              <Phone className="w-4 h-4 ml-2" />
              מענה מיידי
            </Badge>
            <Badge variant="outline" size="lg" className="px-4 py-2 backdrop-blur-sm">
              <MessageCircle className="w-4 h-4 ml-2" />
              תגובה תוך 24 שעות
            </Badge>
            <Badge variant="outline" size="lg" className="px-4 py-2 backdrop-blur-sm">
              <Mail className="w-4 h-4 ml-2" />
              פניות מאובטחות
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;