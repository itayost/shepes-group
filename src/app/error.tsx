'use client';

import Button from '@/components/ui/Button';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Page error:', error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center">
        <h2 className="mb-4 text-3xl font-bold">אופס! משהו השתבש</h2>
        <p className="mb-8 text-lg text-gray-600">
          אנחנו מצטערים, אירעה שגיאה בלתי צפויה.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button onClick={reset}>נסה שוב</Button>
          <Button variant="outline" onClick={() => window.location.href = '/'}>
            חזרה לדף הבית
          </Button>
        </div>
        
        {/* Error icon */}
        <div className="mt-12 text-6xl">⚠️</div>
        
        {/* Development mode - show error details */}
        {process.env.NODE_ENV === 'development' && (
          <details className="mt-8 text-left">
            <summary className="cursor-pointer text-sm text-gray-500">
              פרטי השגיאה (למפתחים)
            </summary>
            <pre className="mt-2 overflow-auto rounded bg-gray-100 p-4 text-xs">
              {error.message}
              {error.stack}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}