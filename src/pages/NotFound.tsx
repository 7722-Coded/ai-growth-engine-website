
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white to-accent/30 px-4 text-center">
      <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6 animate-pulse">
        <span className="text-4xl font-bold text-primary">404</span>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-8 max-w-md">
        We couldn't find the page you were looking for. It might have been removed, renamed, or doesn't exist.
      </p>
      <Link to="/">
        <Button className="bg-primary hover:bg-primary-dark text-white font-medium group overflow-hidden relative">
          <span className="relative z-10 flex items-center transition-transform duration-300 group-hover:scale-110">
            <Home className="mr-2 h-4 w-4" />
            Return to Home
          </span>
          <span className="absolute inset-0 bg-primary-dark transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
