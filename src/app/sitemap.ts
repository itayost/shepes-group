import { NAV_ITEMS, SITE_CONFIG } from '@/lib/constants';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;
  const currentDate = new Date();

  // Static pages
  const staticPages = NAV_ITEMS.map((item) => ({
    url: `${baseUrl}${item.href}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: item.href === '/' ? 1 : 0.8,
  }));

  // Add more dynamic pages here if needed
  // const blogPosts = await getBlogPosts();
  // const dynamicPages = blogPosts.map((post) => ({
  //   url: `${baseUrl}/blog/${post.slug}`,
  //   lastModified: post.updatedAt,
  //   changeFrequency: 'weekly' as const,
  //   priority: 0.6,
  // }));

  return [...staticPages];
}