import { FaLinkedin } from "react-icons/fa";
import { Github, Heart, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router"; 
import Logo from "./Logo";

export default function Footer() {
    return (
        <footer className="w-full border-t border-base-300 bg-base-100 text-base-content pt-16 pb-8 mt-10">
            <div className="max-w-7xl mx-auto px-6">

                {/* Main Grid: Split into 3 equal columns for better balance */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    
                    {/* Column 1: Brand Identity & Social */}
                    <div className="space-y-4">
                        <div className="mb-2">
                            <Logo />
                        </div>
                        <p className="text-sm text-base-content/70 leading-relaxed max-w-xs">
                            Empowering communities through collective action. Join us to make a difference, one event at a time.
                        </p>
                        
                        {/* Social Icons moved here - fits better with brand */}
                        <div className="pt-2">
                            <a
                                href="https://www.linkedin.com/in/thesachindey"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="inline-flex items-center gap-2 text-sm font-medium text-base-content/80 hover:text-blue-600 transition-colors"
                            >
                                <FaLinkedin className="text-xl" />
                                <span>Connect on LinkedIn</span>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links (Vertical is cleaner) */}
                    <div>
                        <h3 className="font-bold text-lg mb-6 text-base-content">Quick Links</h3>
                        <ul className="space-y-3 text-sm font-medium text-base-content/70">
                            <li><Link to={'/'} className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link to={'/about-us'} className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link to={'/upcoming-event'} className="hover:text-primary transition-colors">Find Events</Link></li>
                            <li><Link to={'/dashboard/create-event'} className="hover:text-primary transition-colors">Organize Event</Link></li>
                            <li><Link to={'/faq'} className="hover:text-primary transition-colors">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div>
                        <h3 className="font-bold text-lg mb-6 text-base-content">Contact Us</h3>
                        <ul className="space-y-4 text-sm text-base-content/70">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary shrink-0" />
                                <span>House 12, Road 5, Mirpur DOHS,<br/>Dhaka 1216, Bangladesh</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <span>info@serveup.com</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <span>+880-1777-000000</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="divider opacity-10"></div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-base-content/60">
                    <p>© {new Date().getFullYear()} ServeUp. All Rights Reserved.</p>

                    <div className="flex items-center gap-6">
                        <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>

                        <a
                            href="https://github.com/thesachindey"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 hover:text-primary transition-colors font-medium bg-base-200 px-3 py-1 rounded-full"
                        >
                            Dev by Thesachindey
                            <Heart size={12} className="text-red-500 fill-red-500" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}