export const SITE_CONFIG = {
  name: 'שפס נדל"ן - מתווכי נדל"ן בחיפה',
  tagline: 'המומחים שלך לנדל"ן בחיפה והצפון',
  description: 'שפס נדל"ן - צוות מתווכים מוביל בחיפה עם מעל 18 שנות ניסיון. מכירה, קנייה והשכרת נכסים עם ליווי מקצועי ואישי.',
  url: 'https://shepes-realestate.co.il',
  ogImage: '/og-image.jpg',
  phone: '054-1234567', // טלפון ראשי - גלית
  phone2: '054-7654321', // טלפון משני - חיים
  whatsapp: '972-54-1234567',
  email: 'info@shepes-realestate.co.il',
  address: {
    street: 'רחוב הרצל 100',
    city: 'חיפה',
    zip: '3500000'
  },
  social: {
    facebook: 'https://facebook.com/shepesrealestate',
    instagram: 'https://instagram.com/shepesrealestate',
    linkedin: 'https://linkedin.com/company/shepes-realestate'
  },
  license: 'צוות מתווכים מוסמכים'
};

export const NAV_ITEMS = [
  { label: 'דף הבית', href: '/' },
  { label: 'שירותים', href: '/services' },
  { label: 'נכסים שמכרנו', href: '/sold-properties' },
  { label: 'אודות', href: '/about' },
  { label: 'צור קשר', href: '/contact' }
];

// אזורים בחיפה לחיפושים ולתיוגים
export const HAIFA_NEIGHBORHOODS = [
  'הדר',
  'כרמל מרכזי',
  'כרמל צרפתי',
  'אחוזה',
  'רמות רמז',
  'רמת אלמוגי',
  'ורדיה',
  'נווה שאנן',
  'קרית אליעזר',
  'קרית חיים',
  'דניה',
  'רמת הדר',
  'נווה פז',
  'כבביר',
  'עין הים',
  'בת גלים'
];

// סוגי נכסים
export const PROPERTY_TYPES = [
  { value: 'apartment', label: 'דירה' },
  { value: 'penthouse', label: 'פנטהאוז' },
  { value: 'house', label: 'בית פרטי' },
  { value: 'duplex', label: 'דופלקס' },
  { value: 'garden_apartment', label: 'דירת גן' },
  { value: 'studio', label: 'סטודיו' },
  { value: 'commercial', label: 'נכס מסחרי' }
];

// טקסטים לעמוד הבית
export const HOME_HERO = {
  title: 'המומחה שלך לנדל"ן בחיפה',
  subtitle: 'ליווי מקצועי ואישי בקנייה, מכירה והשכרה',
  cta1: 'הערכת שווי חינם',
  cta2: 'צור קשר'
};

// למה לבחור בנו
export const WHY_CHOOSE_US = [
  {
    icon: '🏆',
    title: 'ניסיון של 15+ שנים',
    description: 'מומחיות עמוקה בשוק הנדל"ן בחיפה והצפון'
  },
  {
    icon: '🤝',
    title: 'אמינות ושקיפות',
    description: 'עבודה ישרה ושקופה עם הלקוחות שלנו'
  },
  {
    icon: '📊',
    title: 'תוצאות מוכחות',
    description: 'מעל 150 עסקאות מוצלחות ב-5 השנים האחרונות'
  },
  {
    icon: '💯',
    title: 'ליווי מלא',
    description: 'מהפגישה הראשונה ועד קבלת המפתחות'
  }
];

// סטטיסטיקות
export const STATISTICS = {
  propertiesSold: '150+',
  satisfiedClients: '98%',
  avgDaysToSell: '21',
  yearsExperience: '15+'
};