import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/** 添加受保护路由,需要登录态才能访问的页面 */
const protectedRoutes: string[] = [];

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const sessionCookie = request.cookies.get('token');

    const isProtectedRoute = protectedRoutes.some((route) => pathname.startsWith(route));

    if (isProtectedRoute && !sessionCookie) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
