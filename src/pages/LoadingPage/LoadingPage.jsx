import React from 'react';
import { HashLoader } from 'react-spinners';

const LoadingPage = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
           <HashLoader />
        </div>
    );
};

export default LoadingPage;