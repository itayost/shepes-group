import { processSteps, services } from '@/data/services';
import { SITE_CONFIG } from '@/lib/constants';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary-50 py-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">השירותים שלנו</h1>
            <p className="text-xl text-text-secondary">
              צוות שפס נדל"ן מציע מגוון שירותי נדל"ן מקיפים עם ליווי אישי ומקצועי בכל שלב.
              הניסיון הרב שצברנו לאורך השנים מאפשר לנו להעניק לכם את השירות הטוב ביותר.
            </p>
          </div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[320px]">
            
            {/* מכירת נכס - כרטיס גדול */}
            <div className="group relative lg:col-span-2 bg-gradient-luxury rounded-3xl p-8 text-white overflow-hidden hover:shadow-luxury transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl transform translate-x-20 -translate-y-20"></div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="text-6xl mb-6 filter drop-shadow-lg">{services[0].icon}</div>
                <h3 className="text-3xl font-bold mb-4 text-primary-400">{services[0].title}</h3>
                <p className="text-lg mb-6 text-gray-300 flex-grow">{services[0].description}</p>
                
                <div className="grid grid-cols-2 gap-3">
                  {services[0].features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-5 h-5 bg-primary-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-300">{feature.title}</span>
                    </div>
                  ))}
                </div>
                
                <Link
                  href="#selling"
                  className="mt-6 inline-flex items-center gap-2 text-primary-400 font-semibold hover:gap-3 transition-all hover:text-primary-300"
                >
                  למידע נוסף
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* קניית נכס */}
            <div className="group relative bg-gradient-gold rounded-3xl p-6 text-secondary-900 overflow-hidden hover:shadow-gold-lg transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="text-5xl mb-4 filter drop-shadow">{services[1].icon}</div>
                <h3 className="text-2xl font-bold mb-3">{services[1].title}</h3>
                <p className="text-base text-secondary-800 mb-4 flex-grow">{services[1].description}</p>
                
                <div className="space-y-2 mb-4">
                  {services[1].features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-secondary-700 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{feature.title}</span>
                    </div>
                  ))}
                </div>
                
                <Link
                  href="#buying"
                  className="mt-auto inline-flex items-center gap-2 text-secondary-900 font-semibold hover:gap-3 transition-all hover:text-secondary-950"
                >
                  גלה עוד
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* השכרה */}
            <div className="group relative bg-primary-500 rounded-3xl p-6 text-white overflow-hidden hover:shadow-gold-lg transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="text-5xl mb-4 filter drop-shadow">{services[2].icon}</div>
                <h3 className="text-2xl font-bold mb-3">{services[2].title}</h3>
                <p className="text-base text-white/90 mb-4 flex-grow">{services[2].description}</p>
                
                <div className="space-y-2 mb-4">
                  {services[2].features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-white/80 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-white/90">{feature.title}</span>
                    </div>
                  ))}
                </div>
                
                <Link
                  href="#rental"
                  className="mt-auto inline-flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all"
                >
                  גלה עוד
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* הערכת שווי - כרטיס רחב */}
            <div className="group relative lg:col-span-2 bg-accent-500 rounded-3xl p-8 text-secondary-900 overflow-hidden hover:shadow-gold-lg transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl transform -translate-x-20 translate-y-20"></div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-5xl mb-4 filter drop-shadow">{services[3].icon}</div>
                    <h3 className="text-2xl font-bold mb-3">{services[3].title}</h3>
                  </div>
                  <div className="bg-white/80 backdrop-blur rounded-full px-4 py-2 text-sm font-semibold shadow-md">
                    חינם ללקוחותינו
                  </div>
                </div>
                
                <p className="text-lg text-secondary-800 mb-6">{services[3].description}</p>
                
                <div className="grid grid-cols-3 gap-4 mt-auto">
                  {services[3].features.slice(0, 6).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-secondary-700 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{feature.title}</span>
                    </div>
                  ))}
                </div>
                
                <Link
                  href="#valuation"
                  className="mt-6 inline-flex items-center gap-2 text-secondary-900 font-semibold hover:gap-3 transition-all"
                >
                  למידע נוסף
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">תהליך העבודה שלנו</h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              ארבעה שלבים פשוטים לדרך להצלחה בנדל"ן
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* קו מחבר */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-primary-200 -z-10"></div>
                )}
                
                <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-gold transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4 mx-auto">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center">{step.title}</h3>
                  <p className="text-text-secondary text-center">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-luxury text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">המספרים מדברים</h2>
            <p className="text-xl text-gray-300">
              15 שנות הצלחה בשוק הנדל"ן בחיפה והצפון
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl font-bold text-primary-400 mb-4 animate-fade-in">500+</div>
              <h3 className="text-2xl font-semibold mb-2">עסקאות הושלמו</h3>
              <p className="text-gray-400">בליווי מקצועי ומסור</p>
            </div>
            
            <div className="text-center">
              <div className="text-6xl font-bold text-accent-400 mb-4 animate-fade-in">98%</div>
              <h3 className="text-2xl font-semibold mb-2">לקוחות מרוצים</h3>
              <p className="text-gray-400">ממליצים עלינו לחברים</p>
            </div>
            
            <div className="text-center">
              <div className="text-6xl font-bold text-primary-300 mb-4 animate-fade-in">15+</div>
              <h3 className="text-2xl font-semibold mb-2">שנות ניסיון</h3>
              <p className="text-gray-400">בשוק הנדל"ן המקומי</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-luxury text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            מוכנים להתחיל?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto animate-slide-up">
            בין אם אתם רוצים למכור, לקנות, להשכיר או להעריך את שווי הנכס שלכם - 
            אנחנו כאן בשבילכם עם ניסיון, מקצועיות ומחויבות להצלחה שלכם.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Link
              href="/contact"
              className="btn-primary shadow-gold-lg animate-glow inline-block"
            >
              קבלו ייעוץ חינם
            </Link>
            
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="btn-secondary hover:shadow-gold inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              התקשרו עכשיו
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}