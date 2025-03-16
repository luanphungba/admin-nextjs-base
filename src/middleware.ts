import type { NextRequest } from 'next/server';
import { publicRoutes } from '@/constants/routes';
import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const isPublicRoute = publicRoutes.some(route =>
    request.nextUrl.pathname.startsWith(route),
  );

  if (!token && !isPublicRoute) {
    // Redirect unauthenticated users to login page
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (token && isPublicRoute) {
    // Redirect authenticated users to dashboard
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
