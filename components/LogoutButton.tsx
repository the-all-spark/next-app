'use client';

import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';

export function LogoutButton(props: React.ComponentProps<typeof Button>) {
  const { isAuthenticated, logout } = useAuth();

  return isAuthenticated ? (
    <Button variant="destructive" onClick={() => logout()} {...props}>
      Logout
    </Button>
  ) : null;
}
