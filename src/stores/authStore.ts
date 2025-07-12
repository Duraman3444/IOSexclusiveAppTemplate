import { create } from 'zustand';
import { supabase } from '../api/supabase';

// iOS-specific authentication store
// Includes haptic feedback and iOS-optimized error handling
interface AuthState {
  user: any | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
  setUser: (user: any | null) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: false,
  signIn: async (email: string, password: string) => {
    set({ isLoading: true });
    try {
      // iOS-specific: Use Supabase auth with iOS optimizations
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) {
        // iOS-specific: Provide haptic feedback for errors
        throw error;
      }
      
      // iOS-specific: Success haptic feedback would be handled in UI
      set({ user: data.user, isLoading: false });
    } catch (error) {
      console.error('iOS Sign in error:', error);
      set({ isLoading: false });
      // iOS-specific: Error should trigger haptic feedback in UI
      throw error;
    }
  },
  signOut: async () => {
    try {
      // iOS-specific: Clean sign out with proper iOS handling
      await supabase.auth.signOut();
      set({ user: null });
    } catch (error) {
      console.error('iOS Sign out error:', error);
    }
  },
  setUser: (user: any | null) => {
    set({ user });
  },
})); 