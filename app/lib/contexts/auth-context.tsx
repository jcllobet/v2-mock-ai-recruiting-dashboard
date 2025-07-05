'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { userService } from '@/app/lib/mock-data/mock-service';
import type { User } from '@/app/lib/types';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

/**
 * Authentication provider component
 * @param children - Child components
 */
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check for existing session
    const checkAuth = async () => {
      try {
        // Check for token in cookies first (for SSR compatibility)
        const cookies = document.cookie.split(';');
        const authCookie = cookies.find(c => c.trim().startsWith('auth-token='));
        const cookieToken = authCookie?.split('=')[1];
        
        // Then check localStorage as fallback
        const localToken = localStorage.getItem('auth-token');
        const token = cookieToken || localToken;
        
        if (token) {
          // Ensure both storage methods are synced
          if (!cookieToken && localToken) {
            document.cookie = `auth-token=${localToken}; path=/; max-age=${60 * 60 * 24 * 7}`;
          }
          if (cookieToken && !localToken) {
            localStorage.setItem('auth-token', cookieToken);
          }
          
          const currentUser = await userService.getCurrentUser();
          setUser(currentUser);
        }
      } catch (error) {
        console.error('Auth check failed:', error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const { user, token } = await userService.login(email, password);
      localStorage.setItem('auth-token', token);
      document.cookie = `auth-token=${token}; path=/; max-age=${60 * 60 * 24 * 7}`; // 7 days
      setUser(user);
      router.push('/');
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      await userService.logout();
      localStorage.removeItem('auth-token');
      document.cookie = 'auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC';
      setUser(null);
      router.push('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

/**
 * Hook to use authentication context
 */
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}