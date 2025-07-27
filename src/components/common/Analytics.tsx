'use client';

import Cookies from 'js-cookie';
import Script from 'next/script';
import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export default function Analytics() {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  useEffect(() => {
    // Check if analytics consent was given
    const consent = Cookies.get('cookie-consent');
    if (consent) {
      const preferences = JSON.parse(consent);
      if (preferences.analytics) {
        window.gtag('consent', 'update', {
          analytics_storage: 'granted',
        });
      }
    }
  }, []);

  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          // Default to denied
          gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
          });
          
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}

// Helper function for tracking events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};