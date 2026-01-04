import React, { useContext } from 'react';
import { Outlet, NavLink, Link, useNavigate } from 'react-router';
import { 
    LuLayoutDashboard, 
    LuList, 
    LuLogOut, 
    LuUser,
    LuCalendarCheck 
} from "react-icons/lu";
import { BiMenu } from "react-icons/bi";
import { LucidePlusCircle } from 'lucide-react';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';
import Logo from '../Components/Logo';
import ThemeToggle from '../Components/ThemeToggle';

const DashboardLayout = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

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
                            text: "You have been logged out successfully.",
                            icon: "success",
                            timer: 1500,
                            showConfirmButton: false
                        });
                        navigate('/');
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            }
        });
    };

    const navLinks = [
        { path: "/dashboard", icon: <LuLayoutDashboard />, label: "Overview", end: true },
        { path: "/dashboard/create-event", icon: <LucidePlusCircle />, label: "Add Event" },
        { path: "/dashboard/manage-events", icon: <LuList />, label: "My Created Events" },
        { path: "/dashboard/joined-events", icon: <LuCalendarCheck />, label: "My Joined Events" },
        { path: "/dashboard/my-profile", icon: <LuUser />, label: "Profile Settings" },
    ];

    return (
        <div className="drawer lg:drawer-open font-sans bg-base-200 min-h-screen">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            
            <div className="drawer-content flex flex-col">
                
                <div className="w-full navbar bg-base-100 border-b border-base-200 sticky top-0 z-30 px-4 md:px-6">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="dashboard-drawer" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <BiMenu className="text-2xl" />
                        </label>
                    </div>
                    
                    <div className="flex-1 px-2 mx-2">
                        <h2 className="text-xl font-bold text-base-content/80">Dashboard</h2>
                    </div>
                    
                    <div className="flex-none">
                        <Link 
                            to="/dashboard/my-profile" 
                            className="btn btn-ghost normal-case flex items-center gap-3 px-2 rounded-xl hover:bg-base-200"
                            title="Go to Profile Settings"
                        >
                            <div className="hidden md:block text-right leading-tight">
                                <p className="text-sm font-bold text-base-content">{user?.displayName}</p>
                                <p className="text-xs text-base-content/60">{user?.email}</p>
                            </div>
                            <div className="avatar">
                                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={user?.photoURL || "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="avatar" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="p-4 md:p-8 max-w-7xl mx-auto w-full">
                    <Outlet />
                </div>
            </div> 

            <div className="drawer-side z-40">
                <label htmlFor="dashboard-drawer" aria-label="close sidebar" className="drawer-overlay"></label> 
                
                <aside className="bg-base-100 w-72 min-h-full border-r border-base-200 flex flex-col justify-between shadow-xl lg:shadow-none">
                    <div>
                        <div className="p-6 mb-2">
                            <Logo/>
                        </div>

                        <ul className="menu px-4 gap-2">
                            {navLinks.map((link) => (
                                <li key={link.path}>
                                    <NavLink 
                                        to={link.path}
                                        end={link.end}
                                        className={({ isActive }) => 
                                            `flex items-center gap-3 p-3 rounded-xl font-medium transition-all duration-300 ${
                                                isActive 
                                                ? "bg-primary text-white shadow-md shadow-primary/30" 
                                                : "text-base-content/70 hover:bg-base-200 hover:text-base-content hover:pl-4"
                                            }`
                                        }
                                    >
                                        <span className="text-xl">{link.icon}</span>
                                        {link.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="p-4 border-t border-base-200 m-2 flex gap-3 items-center">
    
    <button 
        onClick={handleLogOut}
        className="btn btn-outline btn-error flex-1 flex items-center justify-center gap-2 shadow-sm"
    >
        <LuLogOut className="text-lg" /> 
        <span>Logout</span>
    </button> 

    <div className="h-12 w-12 flex items-center justify-center rounded-lg border border-base-content/20 bg-base-100 hover:bg-base-200 transition-colors">
        <ThemeToggle />
    </div>

</div>
                </aside>
            </div>
        </div>
    );
};

export default DashboardLayout;