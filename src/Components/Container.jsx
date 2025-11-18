import React from 'react';

const Container = ({ className, children }) => {
    return (

        <div className={`${className} container mx-auto px-0 md:px-10  `}>{children}</div>

    );
};

export default Container;



