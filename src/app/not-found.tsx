import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-8xl font-bold text-primary-600">404</h1>
        <h2 className="mb-4 text-3xl font-bold">הדף לא נמצא</h2>
        <p className="mb-8 text-lg text-gray-600">
          מצטערים, הדף שחיפשת לא קיים או הועבר למקום אחר.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link href="/">
            <Button>חזרה לדף הבית</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline">צור קשר</Button>
          </Link>
        </div>
        
        {/* Fun animation */}
        <div className="mt-12 text-6xl animate-bounce">🔍</div>
      </div>
    </div>
  );
}