import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const isAppSubdomain = hostname.startsWith("app.");
  const url = request.nextUrl.clone();

  // If we're on the app subdomain and at the root path
  if (isAppSubdomain && url.pathname === "/") {
    url.pathname = "/app"; // Redirect to the app landing page
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /static (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    "/((?!api|_next|static|[\\w-]+\\.\\w+).*)",
  ],
};
