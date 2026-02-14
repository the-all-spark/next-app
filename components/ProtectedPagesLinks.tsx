'use client';

import Link from 'next/link';
import { NavigationMenuItem, navigationMenuTriggerStyle, NavigationMenuLink } from '@/components/ui/navigation-menu';

import { useAuth } from '@/hooks/useAuth';

export function ProtectedPagesLinks() {
  const { isAuthenticated } = useAuth();

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
              {/* //! Добавить иконку аккаунта или фото пользователя */}
              <Link href="/profile">Profile</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </>
      ) : null}
    </>
  );
}
