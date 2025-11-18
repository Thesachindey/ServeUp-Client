
import React, { use } from 'react';
import { Link } from 'react-router';
import toast from 'react-hot-toast';
import { AuthContext } from '../../provider/AuthProvider';
import { BiLogOutCircle } from 'react-icons/bi';

const MyProfilePage = () => {
    const { user, logOut } = use(AuthContext)

    const handleLogOut = () => {
        console.log('user trying to log out')
        logOut().then(() => {
            // Sign-out successful.
            toast.success("Logged out successfully!");
        }).catch((error) => {
            // An error
            toast.error(error.code);
        });
    }

    return (
        <div className='p-20' >
            <title>My Profile</title>
            <div className="text-center flex flex-col justify-center items-center gap-4">
                <img src={(user?.photoURL) || 'https://images.unsplash.com/profile-1739313197804-6f9cf0af7ed3image?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=32&dpr=2&crop=faces&bg=%23fff&h=32'}
                    className="h-20 w-20 bg-cover rounded-full mx-auto" alt="" />
                <h2 className="text-xl font-semibold">{user?.displayName}</h2>
                <p className="text-secondary">{user?.email}</p>
                <div className='text-center space-x-4'>
                    <div className='flex flex-wrap items-center justify-center gap-6'>

                        <Link to={'/auth/update-profile'} className="btn bg-green-400 hover:bg-green-500 btn-outline text-white border-black ">Update Profile</Link>
                        <button onClick={handleLogOut} className="btn flex justify-center items-center bg-green-400 hover:bg-green-500 btn-outline text-white border-black "><BiLogOutCircle />LogOut</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MyProfilePage;