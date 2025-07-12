import { createClient } from '@supabase/supabase-js';

// iOS-specific Supabase client configuration
// Optimized for iOS React Native environment
const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    // iOS-specific auth configuration
    storage: undefined, // Use default iOS SecureStore
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false, // iOS doesn't use URL-based auth
  },
}); 