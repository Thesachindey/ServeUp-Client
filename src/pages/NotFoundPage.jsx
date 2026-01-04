import React from 'react';
import { Link, useNavigate } from 'react-router';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { ArrowLeft, Home } from 'lucide-react';

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-[80vh] bg-base-200 flex flex-col justify-center items-center p-6 md:p-12 my-4 md:my-10 mx-4 rounded-2xl md:rounded-3xl">
            <title>404 Not Found || ServeUp</title>

            <div className="max-w-lg w-full text-center space-y-6 md:space-y-8">
                
               
                <div className="w-full h-48 sm:h-64 md:h-80 mx-auto">
                    <DotLottieReact
                        src="https://lottie.host/2b65181e-d911-48cf-b7a3-d9c877251ee9/eZZqQJsFCV.lottie"
                        loop
                        autoplay
                        className="w-full h-full object-contain"
                    />
                </div>

                <div className="space-y-3">
                    <h2 className="text-lg sm:text-4xl md:text-5xl font-extrabold text-base-content">
                        Page <span className='logo-font text-red-500'>Not</span> Found
                    </h2>
                    <p className="text-base sm:text-lg text-base-content/60 max-w-md mx-auto leading-relaxed px-2">
                        Oops! The page you’re looking for doesn’t exist, was removed, or is temporarily unavailable.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full pt-4">
                    
                    {/* Back to Home (Primary) */}
                    <Link 
                        to="/" 
                        className="btn bg-green-500 hover:bg-green-600 text-white border-none rounded-full px-8 w-full sm:w-auto shadow-lg shadow-green-500/20 flex items-center justify-center gap-2"
                    >
                        <Home size={18} />
                        Back to Home
                    </Link>

                    {/* Go Back (Secondary) */}
                    <button 
                        onClick={() => navigate(-1)}
                        className="btn btn-outline border-base-content/20 hover:bg-base-300 hover:border-base-300 rounded-full px-8 w-full sm:w-auto flex items-center justify-center gap-2 transition-all"
                    >
                        <ArrowLeft size={18} />
                        Go Back
                    </button>
                </div>

            </div>
        </div>
    );
};

export default NotFoundPage;