import { SidebarLayout } from '@/app/components/layouts/sidebar-layout';

/**
 * Dashboard layout wrapper
 * @param children - Child components
 */
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Authentication is handled by middleware, so we can directly render the layout
  return <SidebarLayout>{children}</SidebarLayout>;
}