'use client'

import { useActionState } from 'react'
import { login } from './actions'
import { User, Lock } from 'lucide-react'

export default function AdminLoginPage() {
  const [state, formAction, isPending] = useActionState(login, null)

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-secondary/30 backdrop-blur-xl border border-primary/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -ml-32 -mb-32 pointer-events-none" />

        <div className="relative z-10">
          <div className="text-center mb-8">
            <h1 className="font-heading text-3xl font-bold text-foreground mb-2">Admin Access</h1>
            <p className="text-muted-foreground font-sans">Login to manage LXJ Boutique</p>
          </div>

          <form action={formAction} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Username</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground">
                  <User size={18} />
                </div>
                <input
                  type="text"
                  name="username"
                  required
                  className="w-full pl-10 pr-4 py-3 bg-background/50 border border-primary/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-sans"
                  placeholder="Enter username"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground">
                  <Lock size={18} />
                </div>
                <input
                  type="password"
                  name="password"
                  required
                  className="w-full pl-10 pr-4 py-3 bg-background/50 border border-primary/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-sans"
                  placeholder="Enter password"
                />
              </div>
            </div>

            {state?.error && (
              <div className="text-red-500 text-sm font-medium text-center">
                {state.error}
              </div>
            )}

            <button
              type="submit"
              disabled={isPending}
              className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 transition-all disabled:opacity-50 flex justify-center items-center"
            >
              {isPending ? 'Authenticating...' : 'Login to Dashboard'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
