import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Geist, Geist_Mono, Roboto } from 'next/font/google';

import './globals.css';
import LogoImage from '../public/logo.svg';

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  navigationMenuTriggerStyle,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';

import { LogoutButton } from '@/components/LogoutButton';
import { ProtectedPagesLinks } from '@/components/ProtectedPagesLinks';
import { Burgermenu } from '@/components/Burgermenu';

const roboto = Roboto({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Next App',
  description: 'HCare | A platform for doctors',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col overflow-y-scroll bg-background antialiased`}>
        <header className="relative flex h-17.5 flex-row items-center justify-between bg-white p-6 shadow-sm">
          <Burgermenu />

          <Link href="/">
            <Image src={LogoImage} alt="Logo of app" loading="eager" />
          </Link>

          {/* Navigation menu */}
          <div className="flex flex-row items-center gap-4 max-sm:hidden">
            <NavigationMenu className="flex flex-row items-center">
              <NavigationMenuList className="gap-4">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="/about">About us</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <ProtectedPagesLinks />
              </NavigationMenuList>
            </NavigationMenu>

            <LogoutButton />
          </div>
        </header>

        <main className="flex-1 max-sm:mb-10">{children}</main>

        <footer className="flex h-12 flex-row items-center justify-center gap-12 bg-white p-6 text-muted-foreground shadow-sm max-sm:h-14">
          <Image src={LogoImage} alt="Logo of app" loading="eager" height={15} />
          <p className="max-sm:text-small">Your time. Your patients. Our priority.</p>
        </footer>
      </body>
    </html>
  );
}
