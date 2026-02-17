'use client';

import { useState } from 'react';
import Link from 'next/link';

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  navigationMenuTriggerStyle,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';

import { LogoutButton } from '@/components/LogoutButton';
import { ProtectedPagesLinks } from '@/components/ProtectedPagesLinks';

import { SquareMenu, SquareX } from 'lucide-react';

export function Burgermenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="hidden max-sm:block" onClick={handleToggle}>
        {isOpen ? (
          <SquareX size={40} strokeWidth={1.5} color="var(--color-primary)" />
        ) : (
          <SquareMenu size={40} strokeWidth={1.5} color="var(--color-primary)" />
        )}
      </button>

      <div
        className={`${isOpen ? 'absolute top-4.25 left-17.5 z-100 flex w-32.5 flex-col items-center justify-center gap-2 rounded-xl border-2 border-border bg-white p-3 shadow-md' : 'hidden'} `}
      >
        <NavigationMenu>
          <NavigationMenuList className={`${isOpen ? 'flex-col' : 'hidden'} gap-4`}>
            <NavigationMenuItem onClick={() => setIsOpen(false)}>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/about">About us</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <ProtectedPagesLinks />
          </NavigationMenuList>
        </NavigationMenu>

        <LogoutButton />
      </div>
    </>
  );
}
