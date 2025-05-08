import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-data-500">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">Page Not Found</h2>
        <p className="text-gray-600 mt-4 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </p>
        <Button
          className="mt-8 bg-data-600 hover:bg-data-700"
          size="lg"
          asChild
        >
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
