import React from 'react';
import { GiBoomerang } from 'react-icons/gi';
import { Link } from 'react-router';

const Logo = () => {
    return (
        <div>
            <Link className="logo-font flex items-center justify-center gap-1 text-xl">
               <GiBoomerang  className='text-4xl text-green-400 '  />
                <p className='logo-font text-2xl' >ServeUp</p>
            </Link>
        </div>
    );
};

export default Logo;