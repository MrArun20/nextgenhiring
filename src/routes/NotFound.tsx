import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';

export function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-surface to-background flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary mb-4">
            404
          </h1>
          <h2 className="text-3xl font-semibold text-white mb-4">Page Not Found</h2>
          <p className="text-gray-400 max-w-md mx-auto mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/">
            <Button size="lg" className="group">
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Button>
          </Link>
          <button onClick={() => window.history.back()}>
            <Button size="lg" variant="outline" className="group">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </Button>
          </button>
        </div>
      </div>
    </div>
  );
}
