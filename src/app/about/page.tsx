import AgentCard from '@/components/about/AgentCard';
import TeamAchievementsSection from '@/components/about/TeamAchievementsSection';
import TimelineSection from '@/components/about/TimelineSection';
import ValuesSection from '@/components/about/ValuesSection';
import { agents, getCombinedStats } from '@/data/agents';
import { SITE_CONFIG } from '@/lib/constants';
import Link from 'next/link';

export const metadata = {
  title: 'אודות | ' + SITE_CONFIG.name,
  description: 'הכירו את צוות שפס נדל"ן - גלית וחיים שפס, מתווכים מובילים בחיפה עם ניסיון של 18+ שנים',
};

export default function AboutPage() {
  const stats = getCombinedStats();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary-50 py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              צוות שפס נדל"ן
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              צוות מתווכים מקצועי ומנוסה עם מעל 18 שנות ניסיון בשוק הנדל"ן בחיפה והצפון.
              אנחנו כאן כדי להפוך את החלום שלכם למציאות.
            </p>
          </div>

          {/* סטטיסטיקות מהירות */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600">{stats.totalProperties}+</div>
              <div className="text-gray-600">נכסים נמכרו</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600">{stats.avgSatisfaction}%</div>
              <div className="text-gray-600">שביעות רצון</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600">{stats.avgDaysToSell}</div>
              <div className="text-gray-600">ימים למכירה</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600">{stats.totalYearsExperience}+</div>
              <div className="text-gray-600">שנות ניסיון</div>
            </div>
          </div>
        </div>
      </section>

      {/* הצוות שלנו */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            הכירו את הצוות
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {agents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
        </div>
      </section>

      {/* למה שפס נדל"ן */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            למה לבחור בשפס נדל"ן?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">👫</span>
              </div>
              <h3 className="text-xl font-bold mb-3">צוות משלים</h3>
              <p className="text-gray-600">
                גלית מתמחה בנכסי יוקרה ודירות משפחתיות, חיים מומחה בהשקעות ונכסים מסחריים - 
                יחד אנחנו מכסים את כל תחומי הנדל"ן
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-3">ניסיון מוכח</h3>
              <p className="text-gray-600">
                מעל 150 עסקאות מוצלחות, 98% שביעות רצון לקוחות וזמן מכירה ממוצע של 21 ימים בלבד
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">💯</span>
              </div>
              <h3 className="text-xl font-bold mb-3">מחויבות מלאה</h3>
              <p className="text-gray-600">
                אנחנו זמינים 24/7, מלווים אתכם בכל שלב ומחויבים להשיג את התוצאה הטובה ביותר עבורכם
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* הסיפור שלנו */}
      <TimelineSection />

      {/* הערכים שלנו */}
      <ValuesSection />

      {/* הישגים משותפים */}
      <TeamAchievementsSection />

      {/* המלצות לקוחות */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            מה הלקוחות אומרים
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'משפחת אברהם',
                content: 'גלית וחיים היו מדהימים! המקצועיות והיחס האישי הפכו את תהליך הקנייה לחוויה נעימה.',
                role: 'קנו בית באחוזה',
                agent: 'גלית וחיים'
              },
              {
                name: 'רונית ודני כהן',
                content: 'גלית ליוותה אותנו במכירת הדירה שלנו. מקצועית, חמה ותמיד זמינה. ממליצים בחום!',
                role: 'מכרו דירה בכרמל',
                agent: 'גלית'
              },
              {
                name: 'יוסי לוי - משקיע',
                content: 'חיים הוא מומחה אמיתי בהשקעות נדל"ן. הידע והניסיון שלו עזרו לי למצוא עסקאות מצוינות.',
                role: 'השקעות נדל"ן',
                agent: 'חיים'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-2xl text-yellow-400">★</span>
                  ))}
                </div>
                <blockquote className="text-gray-700 text-center mb-4 italic">
                  "{testimonial.content}"
                </blockquote>
                <div className="text-center">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-primary-600 mt-1">עבדו עם: {testimonial.agent}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            בואו נתחיל את המסע שלכם לבית החדש
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            עם ניסיון משותף של 18+ שנים ומאות לקוחות מרוצים, 
            אנחנו כאן כדי להפוך את החלום שלכם למציאות
          </p>
          
          {/* טלפונים של שני המתווכים */}
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              התקשרו לגלית
            </a>
            <a
              href={`tel:${SITE_CONFIG.phone2}`}
              className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              התקשרו לחיים
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              השירותים שלנו
            </Link>
            <Link
              href="/contact"
              className="bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-8 rounded-lg transition-colors border-2 border-white"
            >
              צרו קשר בווטסאפ
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}