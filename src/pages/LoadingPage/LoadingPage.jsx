import React from 'react';
import { HashLoader } from 'react-spinners';

const LoadingPage = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
             <title>Loading... || ServeUp</title>
           <HashLoader color='green' />
        </div>
    );
};

export default LoadingPage;



