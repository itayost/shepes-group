import Skeleton from '@/components/ui/Skeleton';

export default function Loading() {
  return (
    <div className="min-h-screen">
      {/* Header Skeleton */}
      <div className="border-b bg-white">
        <div className="container">
          <div className="flex h-16 items-center justify-between">
            <Skeleton width={100} height={32} />
            <div className="hidden md:flex md:gap-6">
              <Skeleton width={60} count={4} />
            </div>
            <Skeleton width={100} height={36} variant="rounded" />
          </div>
        </div>
      </div>

      {/* Page Content Skeleton */}
      <div className="section">
        <div className="container">
          {/* Hero Section Skeleton */}
          <div className="mx-auto max-w-3xl text-center">
            <Skeleton height={48} className="mb-6" />
            <Skeleton count={2} className="mb-8" />
            <div className="flex justify-center gap-4">
              <Skeleton width={120} height={44} variant="rounded" />
              <Skeleton width={120} height={44} variant="rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}