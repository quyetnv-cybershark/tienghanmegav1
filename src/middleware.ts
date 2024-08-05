import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/test-redux') return NextResponse.redirect(new URL('/home', request.url));
  // if (!token) {
  //   return NextResponse.redirect(new URL('/', request.url));
  // }

  return NextResponse.next();
}

// export const config = {
//   matcher: '/home',
// };
