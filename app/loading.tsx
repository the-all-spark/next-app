import { Skeleton } from '@/components/ui/skeleton';

export function SkeletonLoading() {
  return (
    <div className="mt-6 flex flex-col items-center justify-center gap-4 p-8">
      <Skeleton className="mb-10 h-10 w-[90%] lg:w-[80%] xl:w-[65%] 2xl:w-[55%]" />
      <Skeleton className="h-60 w-[90%] lg:w-[80%] xl:w-[65%] 2xl:w-[55%]" />
    </div>
  );
}

export default function Loading() {
  return <SkeletonLoading />;
}
