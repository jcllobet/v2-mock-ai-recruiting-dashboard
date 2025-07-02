import { Loader2 } from 'lucide-react';

function LoadingSpinner({ size = 'default', text = 'Loading...' }) {
  const sizeClasses = {
    small: 'h-4 w-4',
    default: 'h-8 w-8',
    large: 'h-12 w-12',
  };

  return (
    <div className="loading-container">
      <Loader2 className={`loading-spinner ${sizeClasses[size]}`} />
      {text && <p className="loading-text">{text}</p>}
    </div>
  );
}

export default LoadingSpinner;