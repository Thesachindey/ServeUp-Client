import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import React from 'react';
import { Link } from 'react-router';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-base-200 text-center p-20 rounded-2xl m-5">
            <title>404</title>
            <DotLottieReact
            className='h-1/2 w-1/2'
                src="https://lottie.host/2b65181e-d911-48cf-b7a3-d9c877251ee9/eZZqQJsFCV.lottie"
                loop
                autoplay
            />
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
