import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // צבע ראשי - זהב יוקרתי
        primary: {
          50: '#fffef7',
          100: '#fffce8',
          200: '#fff5c2',
          300: '#ffe88c',
          400: '#FFD700', // Gold
          500: '#D4AF37', // Luxury gold - main
          600: '#B8860B', // Dark gold
          700: '#996515',
          800: '#7a4f11',
          900: '#5c3a0d',
          950: '#3d2507',
        },
        // צבע משני - שחור
        secondary: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        // צבע הדגשה - זהב מטאלי בהיר
        accent: {
          50: '#fffdf7',
          100: '#fffaeb',
          200: '#fff3c7',
          300: '#FFE55C', // Light gold
          400: '#FFD700', // Pure gold
          500: '#D4AF37', // Classic metallic gold
          600: '#B8860B', // Dark metallic gold
          700: '#996515',
          800: '#7a4f11',
          900: '#5c3a0d',
        },
        // צבעי רקע - שחור
        background: {
          DEFAULT: '#000000',     // Pure black
          secondary: '#0a0a0a',   // Soft black
          tertiary: '#141414',    // Lighter black
          card: '#1a1a1a',       // Card backgrounds
          elevated: '#1f1f1f',   // Elevated elements
          dark: '#000000',
        },
        // צבעי טקסט - מותאמים לרקע שחור
        text: {
          primary: '#ffffff',     // White for main text
          secondary: '#e5e5e5',   // Light gray
          muted: '#a3a3a3',      // Muted gray
          light: '#ffffff',      // White
          gold: '#D4AF37',       // Gold text
          'gold-bright': '#FFD700', // Bright gold
        },
        // צבעי תמיכה
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
      },
      fontFamily: {
        // פונטים בעברית
        sans: ['var(--font-heebo)', 'system-ui', 'sans-serif'],
        display: ['var(--font-rubik)', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-luxury': 'linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #000000 100%)',
        'gradient-gold': 'linear-gradient(135deg, #B8860B 0%, #D4AF37 50%, #FFD700 100%)',
        'gradient-gold-subtle': 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)',
        'gradient-black-gold': 'linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #141414 100%)',
      },
      boxShadow: {
        'gold': '0 4px 20px -2px rgba(212, 175, 55, 0.25)',
        'gold-lg': '0 10px 40px -3px rgba(212, 175, 55, 0.3)',
        'gold-glow': '0 0 30px rgba(212, 175, 55, 0.4)',
        'luxury': '0 20px 50px -12px rgba(212, 175, 55, 0.15)',
        'dark': '0 10px 30px -5px rgba(0, 0, 0, 0.8)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'shimmer': 'shimmer 2s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'gold-pulse': 'goldPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(212, 175, 55, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.8)' },
        },
        goldPulse: {
          '0%, 100%': { 
            boxShadow: '0 0 10px rgba(212, 175, 55, 0.3)',
            borderColor: 'rgba(212, 175, 55, 0.5)',
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(212, 175, 55, 0.5)',
            borderColor: 'rgba(212, 175, 55, 0.8)',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

export default config;