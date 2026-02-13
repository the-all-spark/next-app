import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return Response.json({ error: 'Please, fill in all fields!' }, { status: 400 });
    }

    // Request to dummyjson
    const res = await fetch('https://dummyjson.com/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await res.json();

    // Error from dummyjson
    if (!res.ok) {
      return Response.json({ error: data.message || 'Wrong login and/or password' }, { status: res.status });
    }

    // Filter data for saving in localStorage
    const { accessToken, refreshToken, ...safeUser } = data;

    const response = Response.json({
      user: safeUser,
      message: 'Successful login!',
    });

    return response;
  } catch (error) {
    console.error('Login error:', error);
    return Response.json({ error: 'Server is temporarily unavailable' }, { status: 500 });
  }
}
