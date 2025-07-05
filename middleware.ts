import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Middleware to protect routes and handle authentication
 * @param request - Next.js request object
 */
export function middleware(request: NextRequest) {
  const authToken = request.cookies.get("auth-token");
  const pathname = request.nextUrl.pathname;
  const isAuthPage = pathname.startsWith("/login");
  const isHomePage = pathname === "/";

  // If user is not authenticated and trying to access protected route
  if (!authToken && !isAuthPage && !isHomePage) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // If user is authenticated and trying to access login page, redirect to dashboard
  if (authToken && isAuthPage) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // If user is authenticated and on home page, redirect to dashboard
  if (authToken && isHomePage) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // If user is not authenticated and on home page, redirect to login
  if (!authToken && isHomePage) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
