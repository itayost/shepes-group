'use client';

import Button from '@/components/ui/Button';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const COOKIE_NAME = 'cookie-consent';
const COOKIE_EXPIRY = 365; // days

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = Cookies.get(COOKIE_NAME);
    if (!consent) {
      setShowBanner(true);
    } else {
      const savedPreferences = JSON.parse(consent);
      setPreferences(savedPreferences);
      // Initialize analytics if consent was given
      if (savedPreferences.analytics) {
        initializeAnalytics();
      }
    }
  }, []);

  const initializeAnalytics = () => {
    // Initialize Google Analytics
    if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_GA_ID) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
      });
    }
  };

  const savePreferences = (newPreferences: CookiePreferences) => {
    Cookies.set(COOKIE_NAME, JSON.stringify(newPreferences), { 
      expires: COOKIE_EXPIRY,
      sameSite: 'lax',
    });
    setPreferences(newPreferences);
    setShowBanner(false);
    
    if (newPreferences.analytics) {
      initializeAnalytics();
    }
  };

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    savePreferences(allAccepted);
  };

  const acceptSelected = () => {
    savePreferences(preferences);
  };

  const rejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    savePreferences(onlyNecessary);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm" />
      
      {/* Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-2xl border-t">
        <div className="container py-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-3">
              🍪 אנחנו משתמשים בעוגיות
            </h3>
            
            <p className="text-gray-600 mb-4">
              אנו משתמשים בעוגיות כדי לשפר את חוויית הגלישה שלך, להציג תוכן מותאם אישית 
              ולנתח את התנועה באתר. בלחיצה על "קבל הכל" אתה מסכים לשימוש בכל העוגיות.
            </p>

            {showDetails && (
              <div className="mb-6 space-y-3 p-4 bg-gray-50 rounded-lg">
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={preferences.necessary}
                    disabled
                    className="h-4 w-4 rounded border-gray-300"
                  />
                  <div>
                    <span className="font-medium">עוגיות הכרחיות</span>
                    <p className="text-sm text-gray-600">
                      נדרשות לתפקוד בסיסי של האתר (תמיד פעילות)
                    </p>
                  </div>
                </label>

                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences({
                      ...preferences,
                      analytics: e.target.checked,
                    })}
                    className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                  />
                  <div>
                    <span className="font-medium">עוגיות אנליטיקס</span>
                    <p className="text-sm text-gray-600">
                      עוזרות לנו להבין איך משתמשים באתר ולשפר אותו
                    </p>
                  </div>
                </label>

                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) => setPreferences({
                      ...preferences,
                      marketing: e.target.checked,
                    })}
                    className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                  />
                  <div>
                    <span className="font-medium">עוגיות שיווק</span>
                    <p className="text-sm text-gray-600">
                      מאפשרות להציג פרסומות רלוונטיות
                    </p>
                  </div>
                </label>
              </div>
            )}

            <div className="flex flex-wrap gap-3 items-center">
              <Button onClick={acceptAll} size="sm">
                קבל הכל
              </Button>
              
              {showDetails ? (
                <>
                  <Button onClick={acceptSelected} variant="outline" size="sm">
                    שמור העדפות
                  </Button>
                  <Button onClick={rejectAll} variant="ghost" size="sm">
                    רק הכרחיות
                  </Button>
                </>
              ) : (
                <>
                  <Button onClick={rejectAll} variant="outline" size="sm">
                    דחה הכל
                  </Button>
                  <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="text-sm text-primary-600 hover:underline"
                  >
                    הגדרות מתקדמות
                  </button>
                </>
              )}
              
              <Link href="/privacy" className="text-sm text-gray-500 hover:underline mr-auto">
                מדיניות פרטיות
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}