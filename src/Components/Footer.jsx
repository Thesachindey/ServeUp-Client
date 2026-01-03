import { FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import Logo from "./Logo";
import { FaXTwitter } from "react-icons/fa6";
import { Github, Heart } from "lucide-react";
import { Link } from "react-router";

export default function Footer() {
    return (
        <footer className="w-full shadow border-t-1 text-neutral px-6 py-10 mt-10">
            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col md:flex-row justify-between gap-10">
                    {/* Left Section */}
                    <div className="space-y-6 w-full md:w-1/2">
                        <h1 className="text-2xl font-semibold"><Logo /></h1>

                        <ul className="flex gap-6 text-sm">
                            <Link to={'/'} className="cursor-pointer hover:underline">Home</Link>
                            <Link to={'/faq'} className="cursor-pointer hover:underline">FAQ</Link>

                            <Link to={'/about-us'} className="cursor-pointer hover:underline">About us</Link>
                            <Link to="/upcoming-event" className="cursor-pointer hover:underline">
                                Find Events
                            </Link>

                            <Link to="/create-event" className="cursor-pointer hover:underline">
                                Organize an Event
                            </Link>

                        </ul>

                        <div className="space-y-2 text-sm">
                            <p className="font-semibold">Contact us:</p>
                            <p>Email: info@serveup.com</p>
                            <p>Phone: +880-1777-000000</p>
                            <p>Address: House 12, Road 5, Mirpur DOHS, Dhaka 1216, Bangladesh</p>
                        </div>

                    </div>

                    {/* Right Section */}
                    <div className="w-full md:w-1/2 space-y-6">
                        <div className="flex gap-4 justify-end text-xl">
                            <div className="flex gap-4">
                                {/* LinkedIn */}
                                <a
                                    href="https://www.linkedin.com/in/thesachindey"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedin className="cursor-pointer hover:text-blue-600 transition-colors text-xl" />
                                </a>



                            </div>
                        </div>
                        <h6 className="footer-title">Newsletter</h6>
                        <div className="bg-base-200 p-6 rounded-xl flex flex-col gap-4 md:flex-row md:items-center">
                            <input
                                type="email"
                                placeholder="Email"
                                className="input input-bordered w-full bg-base-100 text-neutral"
                            />
                            <button className="btn bg-primary text-secondary rounded-lg w-full md:w-auto">
                                Subscribe to news
                            </button>
                        </div>

                    </div>
                </div>

                <hr className="border-base-300 my-8" />

                <div className="flex justify-between text-xs text-neutral">
                    <p>© 2025 ServeUp. All Rights Reserved.</p>

                    <div className="flex items-center gap-4">
                        <p className="cursor-pointer hover:underline">Privacy Policy</p>

                        <a
                            href="https://github.com/thesachindey"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 cursor-pointer hover:underline"
                        >
                            Developed by Thesachindey
                            <Heart size={14} className="text-red-500" />
                            <Github size={14} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
