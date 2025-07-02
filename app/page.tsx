'use client';

import { redirect } from 'next/navigation';
import { useEffect } from 'react';
import { useAuth } from '@/app/lib/contexts/auth-context';

/**
 * Home page that redirects to dashboard
 */
export default function HomePage() {
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading) {
      if (user) {
        redirect('/dashboard');
      } else {
        redirect('/login');
      }
    }
  }, [user, loading]);

  return null;
}