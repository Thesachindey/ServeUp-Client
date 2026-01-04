import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';
import { BiLogOutCircle, BiEdit, BiEnvelope, BiCalendar, BiTime } from 'react-icons/bi';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';

const MyProfilePage = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You will be logged out from your account.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, log me out!"
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                    .then(() => {
                        Swal.fire({
                            title: "Logged Out!",
                            text: "See you next time.",
                            icon: "success",
                            timer: 1500,
                            showConfirmButton: false
                        });
                    })
                    .catch((error) => {
                        Swal.fire("Oops!", error.message, "error");
                    });
            }
        });
    };

    // Format Dates
    const joinDate = user?.metadata?.creationTime 
        ? new Date(user.metadata.creationTime).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
        : 'N/A';
        
    const lastLogin = user?.metadata?.lastSignInTime 
        ? new Date(user.metadata.lastSignInTime).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })
        : 'Just now';

    return (
        <div className="min-h-screen bg-base-200 py-12 px-4 flex justify-center items-center rounded-3xl mt-10 mb-20">
            <title>My Profile | ServeUp</title>
            
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-lg bg-base-100 rounded-3xl shadow-xl overflow-hidden border border-base-200"
            >
                {/* 1. Decorative Banner */}
                <div className="h-40 bg-gradient-to-r from-primary/80 to-secondary/80 relative">
                    {/* Decorative pattern overlay */}
                    <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle, #fff 2px, transparent 2px)', backgroundSize: '20px 20px'}}></div>
                </div>

                {/* 2. Profile Content */}
                <div className="px-8 pb-10 relative text-center">
                    
                    {/* Floating Avatar */}
                    <div className="relative -mt-16 mb-6 inline-block">
                        <div className="w-32 h-32 rounded-full border-4 border-base-100 shadow-lg overflow-hidden bg-base-200 mx-auto">
                            <img 
                                src={user?.photoURL || 'https://cdn-icons-png.flaticon.com/512/149/149071.png'} 
                                alt="Profile" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Online Status Dot */}
                        <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 border-4 border-base-100 rounded-full"></div>
                    </div>

                    {/* User Details */}
                    <h2 className="text-3xl font-bold text-base-content mb-1">
                        {user?.displayName || "Community Member"}
                    </h2>
                    <p className="text-base-content/60 flex items-center justify-center gap-2 mb-6">
                        <BiEnvelope className="text-primary" /> {user?.email}
                    </p>

                    {/* Info Cards (Join Date & Login) */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="bg-base-200/50 p-4 rounded-2xl">
                            <p className="text-xs text-base-content/50 uppercase font-bold tracking-wider mb-1">Joined</p>
                            <p className="flex items-center justify-center gap-2 font-medium text-sm">
                                <BiCalendar className="text-primary" /> {joinDate}
                            </p>
                        </div>
                        <div className="bg-base-200/50 p-4 rounded-2xl">
                            <p className="text-xs text-base-content/50 uppercase font-bold tracking-wider mb-1">Last Login</p>
                            <p className="flex items-center justify-center gap-2 font-medium text-sm">
                                <BiTime className="text-primary" /> {lastLogin}
                            </p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            to={'/dashboard/update-profile'} 
                            className="btn btn-primary w-full sm:w-auto rounded-xl shadow-lg shadow-primary/20 px-8"
                        >
                            <BiEdit size={20} /> Update Profile
                        </Link>
                        
                        <button 
                            onClick={handleLogOut} 
                            className="btn btn-outline btn-error w-full sm:w-auto rounded-xl px-8"
                        >
                            <BiLogOutCircle size={20} /> Log Out
                        </button>
                    </div>

                </div>
            </motion.div>
        </div>
    );
};

export default MyProfilePage;