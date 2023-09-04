import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md p-4 bg-white shadow-lg rounded-lg">
        <div className="text-center">
          <h1 className="text-4xl font-semibold text-red-600">Oops!</h1>
          <p className="mt-2 text-gray-600">Something went wrong.</p>
        </div>
        <div className="mt-4">
          <p className="text-gray-600">The page you are looking for might have been removed or is temporarily unavailable.</p>
        </div>
        <div className="mt-6">
          <Link href="/" className="inline-block px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
            Go back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
