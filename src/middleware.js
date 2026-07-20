import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  
  // Protect Admin Dashboard (/adminihpl)
  if (pathname.startsWith('/adminihpl') && !pathname.startsWith('/adminihpl/login')) {
    const sessionToken = request.cookies.get('admin_session')?.value;
    if (!sessionToken) {
      return NextResponse.redirect(new URL('/adminihpl/login', request.url));
    }
  }

  // Protect CRM Dashboard (/crmihpl)
  if (pathname.startsWith('/crmihpl') && !pathname.startsWith('/crmihpl/login')) {
    const crmSessionStr = request.cookies.get('crm_session')?.value;
    if (!crmSessionStr) {
      return NextResponse.redirect(new URL('/crmihpl/login', request.url));
    }

    try {
      const crmSession = JSON.parse(crmSessionStr);
      // Optional: Role-based route protection can be added here
      // For example, protecting /crmihpl/users to only allow 'superadmin'
      if (pathname.startsWith('/crmihpl/users') && crmSession.role !== 'superadmin') {
         // Redirect non-superadmins away from user management
         return NextResponse.redirect(new URL('/crmihpl', request.url));
      }
    } catch(e) {
      return NextResponse.redirect(new URL('/crmihpl/login', request.url));
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/adminihpl/:path*', '/crmihpl/:path*'],
};
