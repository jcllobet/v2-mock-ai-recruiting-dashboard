'use client';

import { useAuth } from '@/app/lib/contexts/auth-context';
import { SidebarLayout } from '@/app/components/layouts/sidebar-layout';
import { LoadingSpinner } from '@/app/components/ui/loading-spinner';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

/**
 * Dashboard layout wrapper with authentication check
 * @param children - Child components
 */
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      redirect('/login');
    }
  }, [user, loading]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (!user) return null;

  return <SidebarLayout>{children}</SidebarLayout>;
}