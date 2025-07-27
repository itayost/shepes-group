import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Turbopack configuration
  turbopack: {
    // אפשר להוסיף כאן הגדרות Turbopack בעתיד
  },
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      // הוסף דומיינים נוספים לפי הצורך
    ],
  },
  
  // אופטימיזציות חדשות ב-Next.js 15
  experimental: {
    // פיצ'רים ניסיוניים שכדאי לשקול
    optimizePackageImports: ['clsx', 'tailwind-merge'],
  },
};

export default nextConfig;