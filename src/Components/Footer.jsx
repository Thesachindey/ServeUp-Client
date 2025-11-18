import { FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import Logo from "./Logo";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="w-full bg-base-100 text-neutral px-6 py-10 mt-10">
            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col md:flex-row justify-between gap-10">
                    {/* Left Section */}
                    <div className="space-y-6 w-full md:w-1/2">
                        <h1 className="text-2xl font-semibold"><Logo /></h1>

                        <ul className="flex gap-6 text-sm">
                            <li className="cursor-pointer hover:underline">About us</li>
                            <li className="cursor-pointer hover:underline">Services</li>
                            <li className="cursor-pointer hover:underline">Use Cases</li>
                            <li className="cursor-pointer hover:underline">Pricing</li>
                            <li className="cursor-pointer hover:underline">Blog</li>
                        </ul>

                        <div className="space-y-2 text-sm">
                            <p className="font-semibold">Contact us:</p>
                            <p>Email: info@serveup.com</p>
                            <p>Phone: +555-567-8901</p>
                            <p>Address: 1234 Main St, Moonstone City, Stardust State 12345</p>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="w-full md:w-1/2 space-y-6">
                        <div className="flex gap-4 justify-end text-xl">
                            <FaLinkedin className="cursor-pointer hover:text-blue-500" />
                            <FaXTwitter className="cursor-pointer " />
                            <FaFacebook className="cursor-pointer hover:text-blue-500" />
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
                    <p className="cursor-pointer hover:underline">Privacy Policy</p>
                </div>
            </div>
        </footer>
    );
}
