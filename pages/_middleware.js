import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import path from 'path';
export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.JWT_SECRET });
  const { pathname, origin } = req.nextUrl;
  if (pathname.includes('/api/auth' || token)) {
    return NextResponse.next();
  }
  if (!token && path !== 'login') {
    return NextResponse.rewrite(`${origin}/login`);
  }
}
