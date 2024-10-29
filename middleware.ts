import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  try {
    const hostname = request.headers.get("host") || "";
    const url = request.nextUrl.clone();
    const isAppSubdomain = hostname.startsWith("app.");

    // Add production domain check if needed
    // const isProd = process.env.NODE_ENV === 'production';
    // const productionDomain = isProd ? 'yourapp.com' : 'localhost:3000';

    // If we're on the app subdomain and at the root path
    if (isAppSubdomain && url.pathname === "/") {
      url.pathname = "/app";
      return NextResponse.rewrite(url);
    }

    return NextResponse.next();
  } catch (error) {
    console.error("Middleware error:", error);
    return NextResponse.next();
  }
}

export const config = {
  // Simplify the matcher to reduce complexity
  matcher: [
    // Match all paths except Next.js internals and api routes
    "/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)",
  ],
};
