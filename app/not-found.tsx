import Link from 'next/link';
import type { Metadata } from 'next';

import { Frown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Not Found',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="flex flex-row items-start justify-center pt-15">
        <Frown size={50} strokeWidth={1.75} color="var(--color-destructive)" />
        <h1 className="text-center text-[120px] text-muted-foreground">404</h1>
      </div>

      <Link href="/" className="text-h3">
        Return to main page
      </Link>
    </div>
  );
}
