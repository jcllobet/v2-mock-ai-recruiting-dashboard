import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Middleware to protect routes and handle authentication
 * @param request - Next.js request object
 */
export function middleware(request: NextRequest) {
  const authToken = request.cookies.get('auth-token');
  const isAuthPage = request.nextUrl.pathname.startsWith('/login');

  // If user is not authenticated and trying to access protected route
  if (!authToken && !isAuthPage) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // If user is authenticated and trying to access login page
  if (authToken && isAuthPage) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};