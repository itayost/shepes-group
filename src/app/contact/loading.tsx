import Skeleton from '@/components/ui/Skeleton';

export default function ContactLoading() {
  return (
    <div className="section">
      <div className="container">
        <div className="mx-auto max-w-2xl">
          {/* Card skeleton */}
          <div className="rounded-lg border bg-white shadow-sm">
            {/* Header */}
            <div className="p-6 text-center">
              <Skeleton height={32} width="50%" className="mx-auto mb-2" />
              <Skeleton width="80%" className="mx-auto" />
            </div>
            
            {/* Form fields */}
            <div className="p-6 pt-0">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <Skeleton height={20} width="30%" className="mb-2" />
                  <Skeleton height={40} variant="rounded" />
                </div>
                <div>
                  <Skeleton height={20} width="30%" className="mb-2" />
                  <Skeleton height={40} variant="rounded" />
                </div>
              </div>
              
              <div className="mt-6">
                <Skeleton height={20} width="30%" className="mb-2" />
                <Skeleton height={120} variant="rounded" />
              </div>
              
              <Skeleton height={44} variant="rounded" className="mt-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}