'use client';

import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/use-auth-store';

export function useAuth() {
  const router = useRouter();
  const { user, isLoading, error, setUser, setLoading, setError, logout } = useAuthStore();

  const login = async (username: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('./api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Error logging in');
      }

      setUser(data.user);
      router.push('/profile');
      router.refresh();

      return { success: true };
    } catch (error: any) {
      setError(error.message);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    isLoading,
    error,
    login,
    logout,
    isAuthenticated: !!user,
  };
}
