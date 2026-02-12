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
  title: 'Next App', // TODO correct later
  description: 'Next app for HCare', // TODO correct later
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className={`${geistSans.variable} ${geistMono.variable} overflow-y-scroll bg-background antialiased`}>
        <header className="flex h-17.5 flex-row items-center justify-between bg-white p-6 shadow-sm">
          <Link href="/">
            <Image src={LogoImage} alt="Logo of app" />
          </Link>

          {/* Navigation menu */}
          <NavigationMenu className="flex flex-row items-center">
            <NavigationMenuList className="gap-4">
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/about">About us</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/patients">Patients</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </header>

        {children}
      </body>
    </html>
  );
}
