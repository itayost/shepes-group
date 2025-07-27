import { SITE_CONFIG } from '@/lib/constants';
import { Metadata } from 'next';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  noindex?: boolean;
}

export function generateSEO({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  noindex = false,
}: SEOProps = {}): Metadata {
  const siteTitle = title 
    ? `${title} | ${SITE_CONFIG.name}` 
    : SITE_CONFIG.name;
  
  const siteDescription = description || SITE_CONFIG.description;
  const siteImage = image || SITE_CONFIG.ogImage;
  const siteUrl = url || SITE_CONFIG.url;

  const metadata: Metadata = {
    title: siteTitle,
    description: siteDescription,
    keywords: keywords?.join(', '),
    authors: author ? [{ name: author }] : undefined,
    metadataBase: new URL(SITE_CONFIG.url),
    
    openGraph: {
      title: siteTitle,
      description: siteDescription,
      url: siteUrl,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: siteImage,
          width: 1200,
          height: 630,
          alt: title || SITE_CONFIG.name,
        },
      ],
      locale: 'he_IL',
      type: type,
      publishedTime: publishedTime,
      modifiedTime: modifiedTime,
      authors: author ? [author] : undefined,
    },
    
    twitter: {
      card: 'summary_large_image',
      title: siteTitle,
      description: siteDescription,
      images: [siteImage],
      creator: SITE_CONFIG.twitterHandle,
    },
    
    alternates: {
      canonical: siteUrl,
    },
    
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };

  return metadata;
}

// JSON-LD Schema Component
interface SchemaProps {
  type: 'Organization' | 'LocalBusiness' | 'Article' | 'Product' | 'FAQPage';
  data: any;
}

export function Schema({ type, data }: SchemaProps) {
  const schemas = {
    Organization: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      logo: `${SITE_CONFIG.url}/logo.png`,
      sameAs: Object.values(SITE_CONFIG.social || {}),
      ...data,
    },
    LocalBusiness: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      telephone: SITE_CONFIG.phone,
      address: SITE_CONFIG.address,
      ...data,
    },
    Article: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      publisher: {
        '@type': 'Organization',
        name: SITE_CONFIG.name,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_CONFIG.url}/logo.png`,
        },
      },
      ...data,
    },
    Product: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      ...data,
    },
    FAQPage: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      ...data,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemas[type]),
      }}
    />
  );
}