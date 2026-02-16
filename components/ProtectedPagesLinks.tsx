'use client';

import Link from 'next/link';
import { NavigationMenuItem, navigationMenuTriggerStyle, NavigationMenuLink } from '@/components/ui/navigation-menu';

import { useAuth } from '@/hooks/useAuth';

export function ProtectedPagesLinks() {
  const { isAuthenticated, user } = useAuth();

  return (
    <>
      {isAuthenticated ? (
        <>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/patients">Patients</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/profile">
                <img src={user?.image} alt="Current user photo" className="h-7 w-7 rounded-full border-3 p-px" />
                Profile
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </>
      ) : null}
    </>
  );
}
