import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { TOKEN } from './constants';

const protectedRoutes = ['/home', '/material-library', '/edit'];

export async function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const sessionCookie = request.cookies.get(TOKEN);

    const isProtectedRoute = protectedRoutes.some((route) => pathname.startsWith(route));

    if (isProtectedRoute && !sessionCookie) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
