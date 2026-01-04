import React from 'react';
import { Link } from 'react-router';
import { BiArrowBack, BiFile, BiCheckShield, BiUser, BiErrorCircle } from 'react-icons/bi';

const TermsOfService = () => {
    return (
        <div className="min-h-screen bg-base-200 py-12 my-10 rounded-3xl px-4">
            <title>Terms of Service || ServeUp</title>

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
                            <BiFile size={32} />
                            <span className="font-bold tracking-widest text-sm uppercase">Legal Agreement</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-base-content mb-4 logo-font">
                            Terms of Service
                        </h1>
                        <p className="text-base-content/70">
                            Effective Date: <span className="font-semibold text-base-content">January 4, 2026</span>
                        </p>
                    </div>

                    {/* Content Body */}
                    <div className="p-8 md:p-12 space-y-10 text-base-content/80 leading-relaxed">
                        
                        {/* Section 1 */}
                        <section>
                            <h2 className="text-2xl font-bold text-base-content mb-4 flex items-center gap-2">
                                1. Acceptance of Terms
                            </h2>
                            <p>
                                By accessing or using the <strong>ServeUp</strong> platform, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                            </p>
                        </section>

                        <div className="divider"></div>

                        {/* Section 2 */}
                        <section>
                            <h2 className="text-2xl font-bold text-base-content mb-4 flex items-center gap-2">
                                <BiUser className="text-primary" /> 2. User Accounts & Responsibilities
                            </h2>
                            <p className="mb-4">
                                To access certain features of the platform, you may be required to create an account. You are responsible for:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-2 marker:text-primary">
                                <li>Maintaining the confidentiality of your login credentials.</li>
                                <li>Ensuring all information provided (events, profiles) is accurate and truthful.</li>
                                <li>Notifying us immediately of any unauthorized use of your account.</li>
                            </ul>
                        </section>

                        <div className="divider"></div>

                        {/* Section 3 */}
                        <section>
                            <h2 className="text-2xl font-bold text-base-content mb-4 flex items-center gap-2">
                                <BiCheckShield className="text-primary" /> 3. Event Guidelines
                            </h2>
                            <p>
                                Organizers are solely responsible for the events they create. ServeUp acts as a connector and does not directly supervise events. You agree NOT to post events that:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                <div className="bg-error/10 border border-error/20 p-4 rounded-xl">
                                    <h3 className="font-bold text-error mb-1">Illegal Activities</h3>
                                    <p className="text-sm">Promote violence, illegal acts, or discrimination.</p>
                                </div>
                                <div className="bg-error/10 border border-error/20 p-4 rounded-xl">
                                    <h3 className="font-bold text-error mb-1">Misinformation</h3>
                                    <p className="text-sm">Contain false, misleading, or fraudulent information.</p>
                                </div>
                            </div>
                        </section>

                        <div className="divider"></div>

                        {/* Section 4 */}
                        <section>
                            <h2 className="text-2xl font-bold text-base-content mb-4 flex items-center gap-2">
                                <BiErrorCircle className="text-primary" /> 4. Limitation of Liability
                            </h2>
                            <p>
                                ServeUp shall not be held liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on ServeUp's website. We do not guarantee the safety or quality of any offline events organized through the platform.
                            </p>
                        </section>

                        <div className="divider"></div>

                        {/* Section 5 */}
                        <section>
                            <h2 className="text-2xl font-bold text-base-content mb-4">
                                5. Termination
                            </h2>
                            <p>
                                We may terminate or suspend access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                            </p>
                        </section>

                        <div className="divider"></div>

                        {/* Contact */}
                        <section>
                            <h2 className="text-2xl font-bold text-base-content mb-4">
                                Contact Information
                            </h2>
                            <p className="mb-4">
                                Questions about the Terms of Service should be sent to us at:
                            </p>
                            <p className="font-bold text-primary">legal@serveup.com</p>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;