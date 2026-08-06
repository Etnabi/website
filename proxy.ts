import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const url = request.nextUrl;
  const hostname = request.headers.get("host") || "";
  const isEcotonoSubdomain = hostname.startsWith("ecotono.");

  if (isEcotonoSubdomain && !url.pathname.startsWith("/ecotono")) {
    url.pathname = `/ecotono${url.pathname === "/" ? "" : url.pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
