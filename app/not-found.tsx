import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Not Found',
  description: 'The page you are looking for does not exist.',
};

// TODO implement page
export default function NotFound() {
  return (
    <div>
      <h1 className="p-6 text-center text-h1">404</h1>
      <Link href="/">Return to main page</Link>
    </div>
  );
}
