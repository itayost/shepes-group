import { SITE_CONFIG } from '@/lib/constants';
import { CheckCircle, Home, Phone, PhoneCall } from 'lucide-react';
import Link from 'next/link';

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-luxury text-white relative overflow-hidden">
      {/* אפקט רקע דקורטיבי */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            מוכנים להתחיל את המסע לבית החדש שלכם?
          </h2>
          <p className="text-xl mb-8 opacity-90 animate-slide-up">
            גלית וחיים שפס - הצוות שילווה אתכם בכל שלב
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Link
              href="/contact"
              className="btn-primary shadow-gold-lg animate-glow"
            >
              צרו קשר עכשיו
            </Link>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="btn-secondary flex items-center justify-center gap-2 hover:shadow-gold"
            >
              <Phone className="w-5 h-5" />
              התקשרו לגלית
            </a>
          </div>
          
          {/* מידע נוסף עם אייקונים זהב */}
          <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-3 group-hover:bg-white/20 transition-colors">
                <PhoneCall className="w-8 h-8" />
              </div>
              <h3 className="font-bold mb-1 text-primary-300">2 מתווכים זמינים</h3>
              <p className="opacity-80">גלית וחיים - תמיד זמינים עבורכם</p>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-3 group-hover:bg-white/20 transition-colors">
                <Home className="w-8 h-8" />
              </div>
              <h3 className="font-bold mb-1 text-primary-300">ייעוץ חינם</h3>
              <p className="opacity-80">פגישת ייעוץ ללא עלות</p>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-3 group-hover:bg-white/20 transition-colors">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-bold mb-1 text-primary-300">ללא התחייבות</h3>
              <p className="opacity-80">נשמח לענות על כל שאלה</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;