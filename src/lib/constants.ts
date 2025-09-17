export const SITE_CONFIG = {
  name: 'שפס גרופ',
  tagline: 'צוות מוביל לשיווק נדל״ן בחיפה - מכירה, קנייה והשכרה',
  description: 'שפס גרופ - גלית וחיים שפס, צוות מומחה נדל״ן מקצועי ומנוסה עם מעל 10 שנות ניסיון בשוק הנדל״ן החיפאי והסביבה. מומחים בשיווק, מכירה, קנייה והשכרת נכסים.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.co.il',
  logo: '/shepes-group.png', // הוספת נתיב הלוגו
  ogImage: '/shepes-group.png', // שימוש בלוגו עבור תמונת שיתוף
  phone: '055-9979975',
  whatsapp: '972559979975',
  email: 'shepes@me.com',
  workingHours: {
    weekdays: 'ראשון-חמישי: 8:00-20:00',
    friday: 'שישי: 8:00-15:00'
  },
  social: {
    facebook: 'https://facebook.com/shepesrealestate',
    instagram: 'https://instagram.com/shepesrealestate',
    linkedin: 'https://linkedin.com/in/shepesrealestate'
  },
  licenses: {
    galit: 'מספר רישיון: 3174759',
    haim: 'מספר רישיון: 3227224'
  },
  twitterHandle: '@shepesrealestate'
};

export const NAV_ITEMS = [
  { label: 'דף הבית', href: '/' },
  { label: 'שירותים', href: '/services' },
  { label: 'נכסים שמכרנו', href: '/sold-properties' },
  { label: 'אודות', href: '/about' },
  { label: 'צור קשר', href: '/contact' }
];

// Home Page Hero Content
export const HOME_HERO = {
  title: 'צוות מוביל לשיווק נדל״ן בחיפה',
  subtitle: 'גלית וחיים שפס - ליווי מקצועי ואישי בקנייה, מכירה והשכרה',
  cta1: 'הערכת שווי חינם',
  cta2: 'צור קשר',
};

// Why Choose Us Section
// Using Lucide React icon names
export const WHY_CHOOSE_US = [
  {
    icon: 'Trophy', // Lucide icon name
    title: 'ניסיון של 10+ שנים',
    description: 'ניסיון עשיר בשוק הנדל״ן בחיפה והצפון'
  },
  {
    icon: 'Handshake', // Lucide icon name
    title: 'אמינות ומקצועיות',
    description: 'יחס אישי וליווי צמוד לאורך כל התהליך'
  },
  {
    icon: 'TrendingUp', // Lucide icon name
    title: 'ידע שוק מעמיק',
    description: 'היכרות מעולה עם השוק המקומי והמגמות'
  },
  {
    icon: 'Sparkles', // Lucide icon name
    title: 'תוצאות מוכחות',
    description: 'מאות לקוחות מרוצים ועסקאות מוצלחות'
  }
];

// Property Types
export const PROPERTY_TYPES = [
  { value: 'all', label: 'כל הסוגים' },
  { value: 'apartment', label: 'דירה' },
  { value: 'house', label: 'בית פרטי' },
  { value: 'penthouse', label: 'פנטהאוז' },
  { value: 'duplex', label: 'דופלקס' },
  { value: 'garden-apartment', label: 'דירת גן' },
  { value: 'studio', label: 'סטודיו' },
  { value: 'mini-penthouse', label: 'מיני פנטהאוז' },
  { value: 'townhouse', label: 'טאונהאוס' },
  { value: 'cottage', label: 'קוטג׳' },
];

// Haifa Neighborhoods
export const HAIFA_NEIGHBORHOODS = [
  { value: 'all', label: 'כל השכונות' },
  // רכס הכרמל
  { value: 'merkaz-carmel', label: 'מרכז הכרמל' },
  { value: 'french-carmel', label: 'כרמל צרפתי' },
  { value: 'romema', label: 'רוממה' },
  { value: 'ahuza', label: 'אחוזה' },
  { value: 'ramat-golda', label: 'רמת גולדה' },
  { value: 'denia', label: 'דניה' },
  { value: 'carmel-center', label: 'כרמל מרכזי' },
  { value: 'ramat-begin', label: 'רמת בגין' },
  
  // צפון חיפה
  { value: 'neve-shanan', label: 'נווה שאנן' },
  { value: 'ramat-sapir', label: 'רמת ספיר' },
  { value: 'ramat-eshkol', label: 'רמת אשכול' },
  { value: 'vardia', label: 'ורדיה' },
  { value: 'ramat-almogi', label: 'רמת אלמוגי' },
  
  // מערב חיפה
  { value: 'carmel-beach', label: 'חוף הכרמל' },
  { value: 'bat-galim', label: 'בת גלים' },
  { value: 'kiryat-eliezer', label: 'קרית אליעזר' },
  { value: 'kiryat-eliyahu', label: 'קרית אליהו' },
  
  // מרכז העיר
  { value: 'hadar', label: 'הדר' },
  { value: 'downtown', label: 'העיר התחתית' },
  { value: 'german-colony', label: 'המושבה הגרמנית' },
  { value: 'wadi-nisnas', label: 'ואדי ניסנאס' },
  { value: 'wadi-salib', label: 'ואדי סאליב' },
  
  // דרום חיפה
  { value: 'neve-david', label: 'נווה דוד' },
  { value: 'givat-eliyahu', label: 'גבעת אליהו' },
  { value: 'kiryat-haim', label: 'קרית חיים' },
  { value: 'kiryat-shmuel', label: 'קרית שמואל' },
  
  // מזרח חיפה
  { value: 'ramot-remez', label: 'רמות רמז' },
  { value: 'ramat-shaul', label: 'רמת שאול' },
  { value: 'neve-paz', label: 'נווה פז' },
  { value: 'ramat-hen', label: 'רמת חן' },
];

// Price Ranges
export const PRICE_RANGES = [
  { value: 'all', label: 'כל המחירים' },
  { value: '0-1000000', label: 'עד מיליון ₪' },
  { value: '1000000-1500000', label: '1-1.5 מיליון ₪' },
  { value: '1500000-2000000', label: '1.5-2 מיליון ₪' },
  { value: '2000000-2500000', label: '2-2.5 מיליון ₪' },
  { value: '2500000-3000000', label: '2.5-3 מיליון ₪' },
  { value: '3000000-4000000', label: '3-4 מיליון ₪' },
  { value: '4000000-5000000', label: '4-5 מיליון ₪' },
  { value: '5000000+', label: 'מעל 5 מיליון ₪' },
];

// Room Numbers
export const ROOM_OPTIONS = [
  { value: 'all', label: 'כל החדרים' },
  { value: '1', label: 'חדר אחד' },
  { value: '1.5', label: '1.5 חדרים' },
  { value: '2', label: '2 חדרים' },
  { value: '2.5', label: '2.5 חדרים' },
  { value: '3', label: '3 חדרים' },
  { value: '3.5', label: '3.5 חדרים' },
  { value: '4', label: '4 חדרים' },
  { value: '4.5', label: '4.5 חדרים' },
  { value: '5', label: '5 חדרים' },
  { value: '5.5', label: '5.5 חדרים' },
  { value: '6+', label: '6+ חדרים' },
];

// Sort Options
export const SORT_OPTIONS = [
  { value: 'date-desc', label: 'תאריך - חדש לישן' },
  { value: 'date-asc', label: 'תאריך - ישן לחדש' },
  { value: 'price-desc', label: 'מחיר - גבוה לנמוך' },
  { value: 'price-asc', label: 'מחיר - נמוך לגבוה' },
  { value: 'size-desc', label: 'גודל - גדול לקטן' },
  { value: 'size-asc', label: 'גודל - קטן לגדול' },
];

// Statistics for Sold Properties Page (as object)
export const STATISTICS = {
  propertiesSold: '150+',
  satisfiedClients: '98%',
  avgDaysToSell: '21',
  yearsExperience: '10+'
};

// Statistics for display with icons (as array)
// Using Lucide React icon names
export const STATISTICS_DISPLAY = [
  {
    number: '150+',
    label: 'נכסים נמכרו',
    icon: 'Home', // Lucide icon name
    color: 'primary'
  },
  {
    number: '98%',
    label: 'לקוחות מרוצים',
    icon: 'Smile', // Lucide icon name
    color: 'green'
  },
  {
    number: '21',
    label: 'ימים בממוצע למכירה',
    icon: 'Clock', // Lucide icon name
    color: 'blue'
  },
  {
    number: '18+',
    label: 'שנות ניסיון',
    icon: 'Calendar', // Lucide icon name
    color: 'purple'
  }
];

// Property Features (for property cards)
// Using Lucide React icon names
export const PROPERTY_FEATURES = {
  elevator: { label: 'מעלית', icon: 'ArrowUpDown' },
  parking: { label: 'חניה', icon: 'Car' },
  balcony: { label: 'מרפסת', icon: 'Home' },
  storage: { label: 'מחסן', icon: 'Package' },
  renovated: { label: 'משופץ', icon: 'Sparkles' },
  airConditioner: { label: 'מיזוג', icon: 'Wind' },
  accessible: { label: 'נגיש', icon: 'Accessibility' },
  safeRoom: { label: 'ממ״ד', icon: 'Shield' },
  garden: { label: 'גינה', icon: 'Trees' },
  view: { label: 'נוף', icon: 'Mountain' },
  quiet: { label: 'שקט', icon: 'VolumeX' },
  solar: { label: 'דוד שמש', icon: 'Sun' }
};

// Property Status
export const PROPERTY_STATUS = {
  sold: { label: 'נמכר', color: 'green', bgColor: 'bg-green-100', textColor: 'text-green-800' },
  rented: { label: 'הושכר', color: 'blue', bgColor: 'bg-blue-100', textColor: 'text-blue-800' },
  available: { label: 'זמין', color: 'yellow', bgColor: 'bg-yellow-100', textColor: 'text-yellow-800' },
  underContract: { label: 'בהליכי חתימה', color: 'orange', bgColor: 'bg-orange-100', textColor: 'text-orange-800' }
};

// Transaction Types
// Using Lucide React icon names
export const TRANSACTION_TYPES = {
  sale: { label: 'מכירה', icon: 'DollarSign' },
  rent: { label: 'השכרה', icon: 'Key' },
  investment: { label: 'השקעה', icon: 'TrendingUp' },
  newProject: { label: 'פרויקט חדש', icon: 'Building2' }
};