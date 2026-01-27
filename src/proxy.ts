import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { TOKEN } from './constants';

export async function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const sessionCookie = request.cookies.get(TOKEN);

    const isLogin = pathname === '/login';

    if (!isLogin && !sessionCookie) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
