import { NextRequest, NextResponse } from "next/server";

// Map custom domains to brand slugs
const domainBrandMap: Record<string, string> = {
  "tomgaragedoor.com": "tom",
  "www.tomgaragedoor.com": "tom",
  "elitegaragedoor.net": "elite",
  "www.elitegaragedoor.net": "elite",
  "elitedmvgaragedoor.com": "dmv",
  "www.elitedmvgaragedoor.com": "dmv",
};

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host")?.split(":")[0] || "";
  const pathname = request.nextUrl.pathname;

  // Check if this hostname maps to a brand
  const brand = domainBrandMap[hostname];

  if (brand) {
    // If we're on a custom domain and at the root, rewrite to the brand page
    if (pathname === "/") {
      return NextResponse.rewrite(new URL(`/${brand}`, request.url));
    }
    // If someone tries to access another brand's page on this domain, redirect to root
    if (["/tom", "/elite", "/dmv"].includes(pathname) && pathname !== `/${brand}`) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/tom", "/elite", "/dmv"],
};
