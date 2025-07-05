import { LoadingSpinner } from '@/app/components/ui/loading-spinner';

/**
 * Home page that shows loading while middleware handles redirect
 */
export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <LoadingSpinner />
    </div>
  );
}