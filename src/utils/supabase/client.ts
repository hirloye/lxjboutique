import { createBrowserClient } from "@supabase/ssr";

export const createClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    // Return a dummy client or handle the error gracefully during build
    if (typeof window === 'undefined') {
      console.warn('Supabase environment variables are missing during build/SSR. Returning null client.');
      return {} as any; // eslint-disable-line @typescript-eslint/no-explicit-any
    }
    throw new Error("Missing Supabase environment variables");
  }

  return createBrowserClient(supabaseUrl, supabaseKey);
};
