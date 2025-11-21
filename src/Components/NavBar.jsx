import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import MyLink from './MyLink';
import Container from './Container';
import { motion, MotionConfig } from 'framer-motion';
import { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';
import { IoMdLogIn } from 'react-icons/io';
import { BiLogOutCircle } from 'react-icons/bi';
import { Calendar, Home, ListChecks, PlusCircle, User, UserCheck } from 'lucide-react';



const NavBar = () => {

    const { user, logOut } = use(AuthContext)

    const handleLogOut = () => {
        console.log('user trying to log out')
        logOut().then(() => {
            // Sign-out successful.
            toast.success("You logged out successfully!");
        }).catch((error) => {
            // An error
            toast.error(error.code);
        });
    }



    return (
        <div className='bg-base-100 shadow-sm'>
            <Container>
                <div className="navbar ">

                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul

                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-20 mt-3 w-52 p-2 shadow space-y-3">
                                <MyLink to={"/"} className="flex items-center gap-2">
                                    <Home size={18} />
                                    Home
                                </MyLink>

                                <MyLink to={"/upcoming-event"} className="flex items-center gap-2">
                                    <Calendar size={18} />
                                    Upcoming Events
                                </MyLink>

                                {!user &&

                                    <div className="space-y-4">
                                        <MyLink to={'/auth/register'} className="btn btn-outline ">Registration</MyLink>
                                    </div>
                                }



                            </ul>
                        </div>
                        {/* logo */}
                        <Logo />

                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal space-x-6 px-1">
                            <MyLink to={"/"} className="flex items-center gap-2">
                                <Home size={18} />
                                Home
                            </MyLink>

                            <MyLink to={"/upcoming-event"} className="flex items-center gap-2">
                                <Calendar size={18} />
                                Upcoming Events
                            </MyLink>

                        </ul>
                    </div>


                    <div className="navbar-end flex gap-2">
                        {/* theme  */}



                        {user ?
                            <div className='flex justify-center gap-3 items-center'>
                                <div className="dropdown dropdown-end ">

                                    <div
                                        tabIndex={0}
                                        role="button"
                                        className="relative tooltip tooltip-bottom"
                                        data-tip={user?.displayName || 'user'}
                                    >
                                        <div className="relative w-14 h-14 flex items-center justify-center">


                                            <motion.div
                                                className="absolute flex items-center justify-center pointer-events-none"
                                                animate={{ rotate: 360 }}
                                                transition={{ repeat: Infinity, duration: 2.8, ease: "linear" }}
                                            >
                                                <div className="w-12 h-12 rounded-full bg-gradient-to-tr 
            from-gray-400 via-blue-300 to-purple-300 p-[2px]">
                                                    <div className="w-full h-full rounded-full bg-base-100"></div>
                                                </div>
                                            </motion.div>


                                            <div className="relative z-10 w-10 h-10 rounded-full overflow-hidden cursor-pointer">
                                                <img
                                                    alt={user.name}
                                                    src={(user?.photoURL) || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}

                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>


                                    <ul
                                        tabIndex={-1}
                                        className="menu menu-sm dropdown-content bg-base-100 rounded-box border z-100 mt-3 space-y-2 w-52 p-2 shadow"
                                    >
                                        <li>
                                            <MyLink to={'/my-profile'} className="justify-between">
                                                <span className="flex items-center gap-2">
                                                    <User className="w-4 h-4" />
                                                    My Profile
                                                </span>
                                                <span className="badge bg-base-300">New</span>
                                            </MyLink>
                                        </li>

                                        <li>
                                            <MyLink to={'/create-event'}>
                                                <PlusCircle className="inline-block w-4 h-4 mr-2" />
                                                Create Event
                                            </MyLink>
                                        </li>

                                        <li>
                                            <MyLink to={'/manage-events'}>
                                                <ListChecks className="inline-block w-4 h-4 mr-2" />
                                                Manage Events
                                            </MyLink>
                                        </li>

                                        <li>
                                            <MyLink to={'/joined-events'}>
                                                <UserCheck className="inline-block w-4 h-4 mr-2" />
                                                Joined Events
                                            </MyLink>
                                        </li>

                                        <span className="m-3">
                                            <ThemeToggle />
                                        </span>

                                    </ul>
                                </div>
                                <button onClick={handleLogOut} className="flex justify-center items-center bg-green-400 text-white  hover:bg-green-500 btn btn-outline border-black transition-colors cursor-pointer "><BiLogOutCircle />LogOut</button>
                            </div>

                            :

                            <div className='flex justify-center items-center gap-3.5'>
                                <ThemeToggle />
                                <MyLink to={'/auth/login'} className="flex btn-outline border-black justify-center items-center bg-green-400 text-white  hover:bg-green-500 btn transition-colors cursor-pointer "><IoMdLogIn />Login</MyLink>
                            </div>


                        }



                    </div>

                </div>
            </Container >
        </div >
    );
};

export default NavBar;
