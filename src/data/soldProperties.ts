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
    neighborhood: 'אחוזה',
    rooms: 4,
    size: 120,
    floor: 3,
    totalFloors: 8,
    soldDate: '2024-12',
    soldPrice: 2450000,
    askingPrice: 2500000,
    daysOnMarket: 18,
    images: ['/images/properties/property-1.jpg'],
    features: ['מרפסת שמש', 'חניה כפולה', 'מחסן', 'דירה משופצת'],
    testimonial: {
      name: 'משפחת כהן',
      content: 'המתווך היה מקצועי ומסור. מכר את הדירה שלנו תוך פחות מ-3 שבועות במחיר שרצינו!'
    },
    featured: true
  },
  {
    id: 2,
    type: 'penthouse',
    typeLabel: 'פנטהאוז',
    title: 'פנטהאוז מדהים עם נוף לים',
    neighborhood: 'כרמל צרפתי',
    rooms: 5,
    size: 180,
    floor: 12,
    totalFloors: 12,
    soldDate: '2024-11',
    soldPrice: 4200000,
    askingPrice: 4300000,
    daysOnMarket: 25,
    images: ['/images/properties/property-2.jpg'],
    features: ['מרפסת גג 60 מ"ר', '2 חניות', 'מעלית פרטית', 'נוף פנורמי'],
    testimonial: {
      name: 'דוד ושרה לוי',
      content: 'קיבלנו ליווי מעולה מתחילת התהליך ועד הסוף. מקצוענות ללא פשרות!'
    },
    featured: true
  },
  {
    id: 3,
    type: 'garden_apartment',
    typeLabel: 'דירת גן',
    title: 'דירת גן עם גינה מטופחת',
    neighborhood: 'דניה',
    rooms: 3.5,
    size: 95,
    floor: 0,
    totalFloors: 4,
    soldDate: '2024-10',
    soldPrice: 1850000,
    askingPrice: 1800000,
    daysOnMarket: 12,
    images: ['/images/properties/property-3.jpg'],
    features: ['גינה 80 מ"ר', 'חניה', 'כניסה פרטית', 'מיזוג מרכזי'],
    testimonial: {
      name: 'יוסי ומיכל ברק',
      content: 'הצליח למכור במחיר מעל המבוקש! ידע לשווק את הנכס בצורה מושלמת.'
    },
    featured: true
  },
  {
    id: 4,
    type: 'house',
    typeLabel: 'בית פרטי',
    title: 'בית פרטי עם בריכה',
    neighborhood: 'רמות רמז',
    rooms: 6,
    size: 220,
    floor: 0,
    totalFloors: 2,
    soldDate: '2024-09',
    soldPrice: 3800000,
    askingPrice: 3900000,
    daysOnMarket: 30,
    images: ['/images/properties/property-4.jpg'],
    features: ['בריכה פרטית', '3 חניות', 'גינה 300 מ"ר', 'יחידת דיור'],
    testimonial: {
      name: 'משפחת גולן',
      content: 'הניסיון והמקצועיות ניכרו בכל שלב. ממליצים בחום!'
    }
  },
  {
    id: 5,
    type: 'apartment',
    typeLabel: 'דירה',
    title: 'דירת 3 חדרים משופצת',
    neighborhood: 'הדר',
    rooms: 3,
    size: 75,
    floor: 2,
    totalFloors: 3,
    soldDate: '2024-08',
    soldPrice: 1200000,
    askingPrice: 1250000,
    daysOnMarket: 21,
    images: ['/images/properties/property-5.jpg'],
    features: ['משופצת מהיסוד', 'מרפסת', 'מזגנים', 'קרוב לתחבורה'],
    testimonial: {
      name: 'רונית שמעון',
      content: 'שירות מדהים! ליווי צמוד וייעוץ מקצועי לאורך כל הדרך.'
    }
  },
  {
    id: 6,
    type: 'duplex',
    typeLabel: 'דופלקס',
    title: 'דופלקס מרווח עם מרפסות',
    neighborhood: 'נווה שאנן',
    rooms: 5.5,
    size: 140,
    floor: 4,
    totalFloors: 5,
    soldDate: '2024-07',
    soldPrice: 2100000,
    askingPrice: 2150000,
    daysOnMarket: 15,
    images: ['/images/properties/property-6.jpg'],
    features: ['2 מרפסות גדולות', 'חניה', 'מחסן', 'נוף פתוח'],
    testimonial: {
      name: 'אבי ונועה כץ',
      content: 'מכר את הדירה במהירות ובמחיר מצוין. תודה על הכל!'
    }
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