import { SITE_CONFIG } from '@/lib/constants';
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
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              התקשרו לגלית
            </a>
          </div>
          
          {/* מידע נוסף עם אייקונים זהב */}
          <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center group">
              <div className="text-5xl mb-3 group-hover:animate-shimmer inline-block">📱</div>
              <h3 className="font-bold mb-1 text-primary-300">2 מתווכים זמינים</h3>
              <p className="opacity-80">גלית וחיים - תמיד זמינים עבורכם</p>
            </div>
            <div className="text-center group">
              <div className="text-5xl mb-3 group-hover:animate-shimmer inline-block">🏡</div>
              <h3 className="font-bold mb-1 text-primary-300">ייעוץ חינם</h3>
              <p className="opacity-80">פגישת ייעוץ ללא עלות</p>
            </div>
            <div className="text-center group">
              <div className="text-5xl mb-3 group-hover:animate-shimmer inline-block">💯</div>
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