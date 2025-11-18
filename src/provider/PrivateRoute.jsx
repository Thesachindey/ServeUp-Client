import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from './AuthProvider';
import LoadingPage from '../pages/LoadingPage/LoadingPage';


const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);
    // console.log(user);
    //if user is logged in, then allow to visit the route

    const location= useLocation();
    // console.log(location);

    if (loading) {
        return <LoadingPage />
    }
    if (user && user?.email) {
        return children;
    }
    return <Navigate state={location.pathname} to={'/auth/login'}></Navigate>
    //else redirect to login page

};

export default PrivateRoute;