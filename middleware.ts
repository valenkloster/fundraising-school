import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';
import { ProtectedRoutes } from './data/enums';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  // Check if the route is protected and the user is not logged in
  // If so, redirect to the login page
  for (const route of ProtectedRoutes) {
    if ((pathname.startsWith(route) || pathname === route) && !token) {
      return NextResponse.redirect(new URL('/signin', req.url));
    }
  }

  // If the user is logged in and tries to access the login page, redirect to the homepage
  if (token && pathname === '/signin') {
    return NextResponse.redirect(new URL('/activation/', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
