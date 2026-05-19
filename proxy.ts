import { NextResponse } from "next/server";

import { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
    // return NextResponse.redirect(new URL("/", request.url))

    //conditional statements
    // if (request.nextUrl.pathname === "/profile") {
    //     return NextResponse.redirect(new URL("/", request.url))
    // }

    //for legacy api and better seo
    // if (request.nextUrl.pathname === "/profile") {
    //     return NextResponse.rewrite(new URL("/", request.url))
    // }

    //headers and cookies
    const response = NextResponse.next();
    const themePreference = request.cookies.get("theme");
    if (!themePreference) {
        response.cookies.set("theme", "dark");
    }

    response.headers.set("custom-header", "custm-value");
    return response;
}

// export const config = {
//     matcher: "/profile"
// }