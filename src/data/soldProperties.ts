export interface SoldProperty {
  id: number;
  type: string;
  typeLabel: string;
  title: string;
  neighborhood: string;
  rooms: number;
  size: number;
  floor: number;
  totalFloors: number;
  soldDate: string;
  soldPrice: number;
  askingPrice: number;
  daysOnMarket: number;
  images: string[];
  features: string[];
  testimonial?: {
    name: string;
    content: string;
  };
  featured?: boolean; // האם להציג בדף הבית
}

// נתוני נכסים שנמכרו - בפרודקשן זה יגיע ממסד נתונים
export const soldProperties: SoldProperty[] = [
  {
    id: 1,
    type: 'apartment',
    typeLabel: 'דירה',
    title: 'דירת 4 חדרים מרווחת',
    neighborhood: 'גבעת זמר',
    rooms: 4,
    size: 110,
    floor: 2,
    totalFloors: 4,
    soldDate: '2025-01',
    soldPrice: 2150000,
    askingPrice: 2200000,
    daysOnMarket: 14,
    images: ['/images/properties/givat-zemer.jpeg'],
    features: ['מרפסת שמש', 'חניה', 'מחסן', 'משופצת'],
    testimonial: {
      name: 'משפחת לוי',
      content: 'שירות מקצועי ומסור! המתווכים היו איתנו בכל שלב ודאגו למכור את הדירה במחיר מצוין.'
    },
    featured: true
  },
  {
    id: 2,
    type: 'apartment',
    typeLabel: 'דירה',
    title: 'דירת 3.5 חדרים עם נוף',
    neighborhood: 'שדרות הנשיא',
    rooms: 3.5,
    size: 90,
    floor: 5,
    totalFloors: 8,
    soldDate: '2024-12',
    soldPrice: 1940000,
    askingPrice: 1950000,
    daysOnMarket: 21,
    images: ['/images/properties/sderot-hanasi.jpeg'],
    features: ['נוף לים', 'מעלית', 'מרפסת', 'מיזוג מרכזי'],
    testimonial: {
      name: 'יוסי ורונית כהן',
      content: 'מכרנו את הדירה תוך 3 שבועות! ליווי מקצועי לאורך כל הדרך.'
    },
    featured: true
  },
  {
    id: 3,
    type: 'penthouse',
    typeLabel: 'פנטהאוז',
    title: 'פנטהאוז יוקרתי עם מרפסת גג',
    neighborhood: 'רמת אלמוגי',
    rooms: 5,
    size: 150,
    floor: 10,
    totalFloors: 10,
    soldDate: '2024-11',
    soldPrice: 2800000,
    askingPrice: 2850000,
    daysOnMarket: 28,
    images: ['/images/properties/ramat-almogi.jpeg'],
    features: ['מרפסת גג 50 מ"ר', '2 חניות', 'מעלית שבת', 'נוף פנורמי'],
    testimonial: {
      name: 'אבי ומיכל ברק',
      content: 'מקצוענות ברמה גבוהה! הצליחו למכור את הפנטהאוז שלנו במחיר נהדר.'
    },
    featured: true
  },
  {
    id: 4,
    type: 'apartment',
    typeLabel: 'דירה',
    title: 'דירת 4.5 חדרים ברחוב צופית',
    neighborhood: 'רמת חן',
    rooms: 4.5,
    size: 125,
    floor: 3,
    totalFloors: 6,
    soldDate: '2024-10',
    soldPrice: 2775000,
    askingPrice: 2800000,
    daysOnMarket: 15,
    images: ['/images/properties/ramat-hen.jpeg'],
    features: ['ממ"ד', '2 מרפסות', 'חניה כפולה', 'כיווני אוויר מעולים'],
    testimonial: {
      name: 'דני ושרה גולדברג',
      content: 'תודה על הליווי המקצועי והשירות המסור. ממליצים בחום!'
    }
  },
  {
    id: 5,
    type: 'apartment',
    typeLabel: 'דירה',
    title: 'דירת 3 חדרים ברחוב נחמיה',
    neighborhood: 'נווה שאנן',
    rooms: 3,
    size: 75,
    floor: 1,
    totalFloors: 3,
    soldDate: '2024-09',
    soldPrice: 1480000,
    askingPrice: 1500000,
    daysOnMarket: 18,
    images: ['/images/properties/neve-shaanan.jpeg'],
    features: ['מרפסת', 'חניה', 'קרוב לתחבורה', 'משופצת חלקית'],
    testimonial: {
      name: 'רועי ונעמה אביב',
      content: 'המתווכים היו זמינים 24/7 ועזרו לנו בכל שלב. שירות מעולה!'
    }
  },
  {
    id: 6,
    type: 'apartment',
    typeLabel: 'דירה',
    title: 'דירת 4 חדרים ברחוב אהוד',
    neighborhood: 'אחוזה',
    rooms: 4,
    size: 105,
    floor: 2,
    totalFloors: 5,
    soldDate: '2024-08',
    soldPrice: 2050000,
    askingPrice: 2100000,
    daysOnMarket: 24,
    images: ['/images/properties/ahuze.jpeg'],
    features: ['מעלית', 'חניה', 'מחסן', 'שיפוץ יסודי'],
    testimonial: {
      name: 'משפחת שמעוני',
      content: 'חוויה מצוינת מתחילת התהליך ועד סופו. מקצועיות ואמינות.'
    }
  },
  {
    id: 7,
    type: 'new_construction',
    typeLabel: 'דירה חדשה',
    title: 'דירת יוקרה בפרוייקט גב ים',
    neighborhood: 'כרמל צרפתי',
    rooms: 5,
    size: 140,
    floor: 8,
    totalFloors: 12,
    soldDate: '2025-01',
    soldPrice: 3680000,
    askingPrice: 3700000,
    daysOnMarket: 10,
    images: ['/images/properties/gav-yam.jpeg'],
    features: ['נוף לים', '2 חניות', 'מחסן', 'מרפסת 25 מ"ר', 'בניין חדש', 'לובי מפואר'],
    testimonial: {
      name: 'עופר ומיה רוזנברג',
      content: 'עזרו לנו למכור את הדירה במהירות שיא ובמחיר מעולה. תודה רבה!'
    },
    featured: true
  }
];

// פונקציה להחזרת נכסים מובילים לדף הבית
export const getFeaturedProperties = () => {
  return soldProperties
    .filter(property => property.featured)
    .slice(0, 3); // מחזיר רק 3 נכסים מובילים
};

// פונקציה לקבלת סטטיסטיקות
export const getPropertyStats = () => {
  const totalProperties = soldProperties.length;
  const avgDaysOnMarket = Math.round(
    soldProperties.reduce((sum, prop) => sum + prop.daysOnMarket, 0) / totalProperties
  );
  const avgPriceAccuracy = (
    soldProperties.reduce((sum, prop) => sum + (prop.soldPrice / prop.askingPrice), 0) / totalProperties * 100
  ).toFixed(1);

  return {
    totalProperties,
    avgDaysOnMarket,
    avgPriceAccuracy
  };
};