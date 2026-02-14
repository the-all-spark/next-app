'use client';

import { useAuth } from '@/hooks/useAuth';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LoginForm } from '@/components/LoginForm';
import { LogoutButton } from '@/components/LogoutButton';

export function WelcomeInfo() {
  const { user, isAuthenticated } = useAuth();

  return (
    <>
      {isAuthenticated ? (
        //TODO add info for logged in user
        <>
          <p>
            Hello,{' '}
            <b>
              {user?.firstName} {user?.lastName}
            </b>
            !
          </p>

          <LogoutButton />
        </>
      ) : (
        <>
          <LoginForm />
          <Card className="h-[55%] w-[45%] md:h-[50%] lg:w-[40%]">
            <CardHeader>
              <CardTitle className="mb-2">Demo credentials</CardTitle>
              <CardDescription>Use the following credentials to test the system</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                <b>Username</b>: emilys
              </p>
              <p>
                <b>Password</b>: emilyspass
              </p>
            </CardContent>
          </Card>
        </>
      )}
    </>
  );
}
