import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import MyLink from './MyLink';
import Container from './Container';


const NavBar = () => {


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
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li><a>Item 1</a></li>
                                <li>
                                    <a>Parent</a>

                                </li>
                                <li><a>Item 3</a></li>
                            </ul>
                        </div>
                        {/* logo */}
                        <Logo />

                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal space-x-6 px-1">
                            <MyLink to={'/'}>Homes</MyLink>
                            <MyLink to={'/upcoming-event'}>Upcoming Events</MyLink>
                        </ul>
                    </div>


                    <div className="navbar-end flex gap-2">
                        {/* theme  */}
                        <ThemeToggle />
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li>
                                    <a className="justify-between">
                                        Profile

                                    </a>
                                </li>
                                <li>
                                    <MyLink to={''}>Create Event</MyLink>
                                </li>
                                <li>
                                    <MyLink className="justify-between" to={''}>Manage Events  <span className="badge">New</span></MyLink>
                                </li>
                                <li>
                                    <MyLink to={''}>Joined Events </MyLink>
                                </li>
                                <li>
                                    <MyLink to={''}>Logout</MyLink>
                                </li>

                            </ul>
                        </div>

                        <button className="bg-green-400 text-white  hover:bg-green-500 btn transition-colors cursor-pointer ">Login</button>

                    </div>

                </div>
            </Container>
        </div>
    );
};

export default NavBar;
