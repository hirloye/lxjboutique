'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function login(prevState: { error?: string } | null, formData: FormData) {
  const username = formData.get('username')
  const password = formData.get('password')

  if (username === 'adminlxj' && password === '8838562616') {
    const cookieStore = await cookies()
    cookieStore.set('admin_auth', 'authenticated', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24, // 1 day
      path: '/',
    })
    redirect('/admin/dashboard')
  }

  return { error: 'Invalid credentials' }
}

export async function logout() {
  const cookieStore = await cookies()
  cookieStore.delete('admin_auth')
  redirect('/admin')
}
