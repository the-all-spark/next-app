'use client';

import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';

export function LogoutButton() {
  const { isAuthenticated, logout } = useAuth();

  return isAuthenticated ? (
    <Button variant="destructive" onClick={() => logout()}>
      Logout
    </Button>
  ) : null;
}
