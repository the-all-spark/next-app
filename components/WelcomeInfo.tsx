'use client';

import Link from 'next/link';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import { LoginForm } from '@/components/LoginForm';
import { LogoutButton } from '@/components/LogoutButton';

import { useAuth } from '@/hooks/useAuth';

export function WelcomeInfo() {
  const { user, isAuthenticated } = useAuth();

  return (
    <>
      {isAuthenticated ? (
        // TODO подкорректировать тексты в соответствии с тем что будет на страницах
        <div className="m-auto flex w-[80%] flex-col justify-between gap-8 md:w-[70%] md:gap-10 lg:w-[60%] xl:w-[50%] 2xl:w-[45%]">
          <div className="flex w-full flex-row justify-between gap-6 max-sm:flex-col max-sm:gap-3 md:gap-8 lg:gap-10 2xl:gap-12">
            <div>
              <p className="mb-2">
                Hello,
                <b>
                  {' '}
                  {user?.firstName} {user?.lastName}{' '}
                </b>
                !
              </p>

              <p className="text-primary">
                <b>You are successfully logged in!</b>
              </p>
              <p>Please use the navigation options below (or in site header) to access the different sections of HCare system.</p>
            </div>
            <LogoutButton className="w-25 max-sm:self-end" />
          </div>

          <div className="flex w-full flex-row justify-between gap-6 max-sm:flex-col max-sm:gap-3 md:gap-8 lg:gap-10 2xl:gap-12">
            <p>
              To review your <b>personal information</b>, including contacts, account details and financial data, please visit the "Profile" page.
            </p>
            <Link href="/profile" className="w-25 max-sm:self-end">
              <Button className="w-25">Profile</Button>
            </Link>
          </div>

          <div className="flex w-full flex-row justify-between gap-6 max-sm:flex-col max-sm:gap-3 md:gap-8 lg:gap-10 2xl:gap-12">
            <p>
              To manage the healthcare needs of multiple individuals, you can access the "Patients" page. This section provides a comprehensive
              overview of all patients linked to your account, allowing you to switch between profiles and manage their respective health information
              efficiently.
            </p>
            <Link href="/patients" className="w-25 max-sm:self-end">
              <Button className="w-25">Patients</Button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex w-[80%] flex-row justify-between gap-4 max-sm:mb-6 max-sm:w-[90%] max-sm:flex-col max-sm:gap-6 md:gap-8 lg:w-[70%] xl:w-[50%]">
          <LoginForm />

          <Card className="h-[75%] w-[50%] max-sm:w-full md:h-[70%] md:w-[45%] lg:w-[40%]">
            <CardHeader>
              <CardTitle className="mb-2">Demo credentials</CardTitle>
              <CardDescription>Use the following credentials to test the system</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Username: <b>emilys</b>
              </p>
              <p>
                Password: <b>emilyspass</b>
              </p>

              <CardDescription className="mt-2 mb-2">or:</CardDescription>

              <p>
                Username: <b>michaelw</b>
              </p>
              <p>
                Password: <b>michaelwpass</b>
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}
