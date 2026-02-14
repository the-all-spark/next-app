import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return Response.json({ error: 'Please, fill in all fields!' }, { status: 400 });
    }

    // Request to dummyjson
    const res = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password,
        expiresInMins: 60 * 24,
      }),
    });

    const data = await res.json();

    // Error from dummyjson
    if (!res.ok) {
      return NextResponse.json({ error: data.message || 'Wrong login and/or password' }, { status: res.status });
    }

    // Filter data for saving in localStorage
    const { accessToken, refreshToken, ...safeUser } = data;

    const response = NextResponse.json({
      user: safeUser,
      message: 'Successful login!',
    });

    // Set cookies with tokens in the response server (all cookies - httpOnly)
    response.cookies.set({
      name: 'access-token',
      value: accessToken,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24,
      path: '/',
    });

    response.cookies.set({
      name: 'refresh-token',
      value: refreshToken,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24,
      path: '/',
    });

    return response;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'Server is temporarily unavailable' }, { status: 500 });
  }
}
