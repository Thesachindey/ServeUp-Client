import React from "react";
import { NavLink } from "react-router";

const MyLink = ({ to, className, children, ...props }) => {
    return (
        <NavLink
            to={to}
            {...props}
            className={({ isActive }) =>
                isActive ? `${className}  text-green-500 font-semibold` : `${className} font-semibold`
            }
        >
            {children}
        </NavLink>
    );
};

export default MyLink;