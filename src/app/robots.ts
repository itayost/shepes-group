import { SITE_CONFIG } from '@/lib/constants';
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/_next/'],
    },
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
  };
}