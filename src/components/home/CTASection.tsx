import { SITE_CONFIG } from '@/lib/constants';
import Link from 'next/link';

const CTASection = () => {
  return (
    <section className="py-16 bg-primary-600">
      <div className="container">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            מוכנים להתחיל את המסע לבית החדש שלכם?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            גלית וחיים שפס - הצוות שילווה אתכם בכל שלב
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors shadow-lg"
            >
              צרו קשר עכשיו
            </Link>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              התקשרו לגלית
            </a>
          </div>
          
          {/* מידע נוסף */}
          <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl mb-2">📱</div>
              <h3 className="font-bold mb-1">2 מתווכים זמינים</h3>
              <p className="opacity-90">גלית וחיים - תמיד זמינים עבורכם</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🏡</div>
              <h3 className="font-bold mb-1">ייעוץ חינם</h3>
              <p className="opacity-90">פגישת ייעוץ ללא עלות</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">💯</div>
              <h3 className="font-bold mb-1">ללא התחייבות</h3>
              <p className="opacity-90">נשמח לענות על כל שאלה</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;