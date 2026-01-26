import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// 添加受保护路由
const protectedRoutes: string[] = [];

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const sessionCookie = request.cookies.get('token');

    // 判断是否是受保护路由
    const isProtectedRoute = protectedRoutes.some((route) => pathname.startsWith(route));

    // 如果用户未登录并访问受保护的路由，重定向到首页
    if (isProtectedRoute && !sessionCookie) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
