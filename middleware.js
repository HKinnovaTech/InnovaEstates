import { NextResponse } from 'next/server';

export function middleware(req) {
  const headers = new Headers(req.headers);
  headers.set('Referrer-Policy', 'origin-when-cross-origin');
  headers.set('X-Frame-Options', 'DENY');
  headers.set('X-Content-Type-Options', 'nosniff');
  headers.set('X-DNS-Prefetch-Control', 'on');
  headers.set(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains; preload'
  );

  return NextResponse.next({ headers });
}
