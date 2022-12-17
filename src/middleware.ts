import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const session: any = await getToken({ req });
  const { pathname, origin } = req.nextUrl;

  if (!session) {
    return NextResponse.redirect(`${origin}/auth/login`);
  }

  if (pathname.startsWith('/checkout')) {
    return NextResponse.next();
  }
}

export const config = {
  matcher: ['/', '/store', '/cart', '/checkout/:path*'],
};
