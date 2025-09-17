// File: src/app/sold-properties/page.tsx

import SoldPropertiesClient from '@/components/properties/SoldPropertiesClient';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata = {
  title: 'עסקאות אחרונות | ' + SITE_CONFIG.name,
  description: 'מבחר עסקאות אחרונות שביצענו בהצלחה בחיפה והצפון - 150+ עסקאות מוצלחות, 98% שביעות רצון',
  keywords: ['עסקאות אחרונות', 'נכסים שנמכרו', 'דירות שנמכרו', 'הצלחות', 'שפס גרופ', 'חיפה', 'נדל"ן'],
};

export default function SoldPropertiesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-black">
      <SoldPropertiesClient />
    </main>
  );
}