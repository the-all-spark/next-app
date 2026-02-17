import 'server-only';
import { cookies } from 'next/headers';

export async function getAuthenticatedUser() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('access-token');

  const data = await fetch('https://dummyjson.com/user/me', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken?.value}`,
    },
    cache: 'force-cache',
  });

  const userData = await data.json();

  return userData;
}
