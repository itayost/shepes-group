// File: src/app/sold-properties/page.tsx

import SoldPropertiesClient from '@/components/properties/SoldPropertiesClient';
import { SITE_CONFIG } from '@/lib/constants';

const pageDescription = 'מבחר עסקאות אחרונות שביצענו בהצלחה בחיפה והצפון - 150+ עסקאות מוצלחות, 98% שביעות רצון';

export const metadata = {
  title: 'עסקאות אחרונות | ' + SITE_CONFIG.name,
  description: pageDescription,
  keywords: ['עסקאות אחרונות', 'נכסים שנמכרו', 'דירות שנמכרו', 'הצלחות', 'שפס גרופ', 'חיפה', 'נדל"ן'],
  alternates: {
    canonical: `${SITE_CONFIG.url}/sold-properties`,
  },
  openGraph: {
    title: 'עסקאות אחרונות | ' + SITE_CONFIG.name,
    description: pageDescription,
    url: `${SITE_CONFIG.url}/sold-properties`,
    type: 'website',
  },
};

export default function SoldPropertiesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-black">
      <SoldPropertiesClient />
    </main>
  );
}