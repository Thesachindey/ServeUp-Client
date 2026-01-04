import React from 'react';
import { Link } from 'react-router';
import { BiArrowBack, BiShieldQuarter, BiLock, BiCookie, BiEnvelope } from 'react-icons/bi';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-base-200 py-12 my-10 rounded-3xl px-4">
            <title>Privacy Policy || ServeUp</title>

            <div className="max-w-4xl mx-auto">
                
                {/* Back Button */}
                <div className="mb-6">
                    <Link to="/" className="btn btn-ghost gap-2 pl-0 hover:bg-transparent hover:text-primary">
                        <BiArrowBack size={20} /> Back to Home
                    </Link>
                </div>

                {/* Main Content Card */}
                <div className="bg-base-100 shadow-xl rounded-3xl overflow-hidden border border-base-200">
                    
                    {/* Header Banner */}
                    <div className="bg-primary/5 p-8 md:p-12 border-b border-base-200">
                        <div className="flex items-center gap-3 text-primary mb-4">
                            <BiShieldQuarter size={32} />
                            <span className="font-bold tracking-widest text-sm uppercase">Legal</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-base-content mb-4 logo-font">
                            Privacy Policy
                        </h1>
                        <p className="text-base-content/70">
                            Last updated: <span className="font-semibold text-base-content">January 4, 2026</span>
                        </p>
                    </div>

                    {/* Policy Content */}
                    <div className="p-8 md:p-12 space-y-10 text-base-content/80 leading-relaxed">
                        
                        {/* Section 1 */}
                        <section>
                            <h2 className="text-2xl font-bold text-base-content mb-4 flex items-center gap-2">
                                1. Introduction
                            </h2>
                            <p>
                                Welcome to <strong>ServeUp</strong>. We respect your privacy and are committed to protecting your personal data. 
                                This privacy policy will inform you as to how we look after your personal data when you visit our website 
                                and tell you about your privacy rights and how the law protects you.
                            </p>
                        </section>

                        <div className="divider"></div>

                        {/* Section 2 */}
                        <section>
                            <h2 className="text-2xl font-bold text-base-content mb-4">
                                2. Information We Collect
                            </h2>
                            <p className="mb-4">
                                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-2 marker:text-primary">
                                <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                                <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
                                <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
                                <li><strong>Usage Data:</strong> includes information about how you use our website and services.</li>
                            </ul>
                        </section>

                        <div className="divider"></div>

                        {/* Section 3 */}
                        <section>
                            <h2 className="text-2xl font-bold text-base-content mb-4 flex items-center gap-2">
                                <BiLock className="text-primary" /> 3. How We Use Your Data
                            </h2>
                            <p>
                                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                <div className="bg-base-200/50 p-4 rounded-xl">
                                    <h3 className="font-bold text-base-content mb-2">Service Provision</h3>
                                    <p className="text-sm">To register you as a new volunteer or organizer and manage your account.</p>
                                </div>
                                <div className="bg-base-200/50 p-4 rounded-xl">
                                    <h3 className="font-bold text-base-content mb-2">Communication</h3>
                                    <p className="text-sm">To notify you about changes to our terms or privacy policy, and send event updates.</p>
                                </div>
                            </div>
                        </section>

                        <div className="divider"></div>

                        {/* Section 4 */}
                        <section>
                            <h2 className="text-2xl font-bold text-base-content mb-4 flex items-center gap-2">
                                <BiCookie className="text-primary" /> 4. Cookies
                            </h2>
                            <p>
                                We use cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies.
                            </p>
                        </section>

                        <div className="divider"></div>

                        {/* Section 5 */}
                        <section>
                            <h2 className="text-2xl font-bold text-base-content mb-4 flex items-center gap-2">
                                <BiEnvelope className="text-primary" /> 5. Contact Us
                            </h2>
                            <p className="mb-4">
                                If you have any questions about this privacy policy or our privacy practices, please contact us at:
                            </p>
                            <div className="alert bg-base-200 rounded-xl border-l-4 border-primary">
                                <div>
                                    <p className="font-bold">Email: privacy@serveup.com</p>
                                    <p>Address: House 12, Road 5, Mirpur DOHS, Dhaka 1216</p>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;