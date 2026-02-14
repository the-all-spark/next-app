import { NextRequest, NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
  // Check cookie authentication
  const isAuthenticated = request.cookies.has('access-token');
  const { pathname } = request.nextUrl;

  // Protect the route /patients
  if (pathname.startsWith('/patients') && !isAuthenticated) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Protect the route /profile
  if (pathname.startsWith('/profile') && !isAuthenticated) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

// Use proxy for:
export const config = {
  matcher: ['/', '/patients/:path*', '/profile/:path*'],
};
