// src/app/services/page.tsx

import { services } from '@/data/services';
import { SITE_CONFIG } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'השירותים שלנו | ' + SITE_CONFIG.name,
  description: 'שירותי נדל"ן מקיפים - מכירה, קנייה, השכרה והערכת שווי נכסים בחיפה והצפון',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary-50 py-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">השירותים שלנו</h1>
            <p className="text-xl text-gray-600">
              צוות שפס נדל"ן מציע מגוון שירותי נדל"ן מקיפים עם ליווי אישי ומקצועי בכל שלב.
              הניסיון הרב שצברנו לאורך השנים מאפשר לנו להעניק לכם את השירות הטוב ביותר.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Overview */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow group"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-16 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
        >
          <div className="container">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-dense' : ''
            }`}>
              {/* תמונה */}
              <div className={`relative h-96 rounded-lg overflow-hidden shadow-xl ${
                index % 2 === 1 ? 'lg:col-start-2' : ''
              }`}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* תוכן */}
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{service.title}</h2>
                <p className="text-xl text-gray-600 mb-8">{service.description}</p>

                {/* תכונות */}
                <div className="space-y-4 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">{feature.title}</h4>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* תהליך העבודה */}
                <div className="bg-primary-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">תהליך העבודה שלנו:</h3>
                  <ol className="space-y-2">
                    {service.process.map((step, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {idx + 1}
                        </span>
                        <span className="text-gray-700">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            מוכנים להתחיל?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            צרו איתנו קשר עוד היום וגלו איך אנחנו יכולים לעזור לכם
            במכירה, קנייה או השכרה של הנכס שלכם
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              צור קשר
            </Link>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="bg-white/20 hover:bg-white/30 border-2 border-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              התקשרו עכשיו
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}