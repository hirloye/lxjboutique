import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { updateSession } from '@/utils/supabase/middleware'

export async function proxy(request: NextRequest) {
  // Update Supabase session
  const response = await updateSession(request)

  const path = request.nextUrl.pathname
  const isDashboardRoute = path.startsWith('/admin/dashboard')

  if (isDashboardRoute) {
    const authCookie = request.cookies.get('admin_auth')
    
    if (!authCookie || authCookie.value !== 'authenticated') {
      return NextResponse.redirect(new URL('/admin', request.url))
    }
  }

  return response
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
