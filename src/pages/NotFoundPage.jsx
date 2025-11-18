import React from 'react';
import { Link } from 'react-router';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-base-200 text-center px-4">
       <title>404</title>
      <h1 className="text-9xl font-extrabold text-green-500 mb-4">404</h1>
      <h2 className="text-3xl font-bold mb-2">Page Not Found</h2>
      <p className="text-lg text-base-content/70 mb-8">
        Oops! The page you’re looking for doesn’t exist or was moved.
      </p>

      <Link to="/" className="btn btn-outline bg-green-500 text-white border-black  btn-wide">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
