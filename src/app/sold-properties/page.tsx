// File: src/app/sold-properties/page.tsx

import SoldPropertiesClient from '@/components/properties/SoldPropertiesClient';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata = {
  title: 'נכסים שמכרנו | ' + SITE_CONFIG.name,
  description: 'גלריית נכסים שמכרנו בהצלחה בחיפה והצפון - עשרות משפחות מרוצות שמצאו את הבית המושלם',
};

export default function SoldPropertiesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-black">
      <SoldPropertiesClient />
    </main>
  );
}