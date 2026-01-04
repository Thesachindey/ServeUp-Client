import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { MdEmail, MdMarkEmailRead } from 'react-icons/md';
import { BiArrowBack } from 'react-icons/bi';
import toast from 'react-hot-toast';
import { AuthContext } from '../../provider/AuthProvider'; 

const ForgetPassword = () => {
    const { sendPasswordResetEmailFunc } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleResetPassword = (e) => {
        e.preventDefault();
        
        if (!email) {
            toast.error("Please enter your email address.");
            return;
        }

        setLoading(true);

        sendPasswordResetEmailFunc(email)
            .then(() => {
                setLoading(false);
                toast.success("Reset link sent! Please check your email.");
                
                setTimeout(() => {
                    window.open("https://mail.google.com", "_blank");
                    navigate('/auth/login');
                }, 2000);
            })
            .catch((error) => {
                setLoading(false);
                const errorCode = error.code;
                console.log(errorCode);

                if (errorCode === 'auth/user-not-found') {
                    toast.error("No account exists with this email.");
                } else if (errorCode === 'auth/invalid-email') {
                    toast.error("Please enter a valid email address.");
                } else {
                    toast.error("Something went wrong. Try again.");
                }
            });
    };

    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center py-12 px-4">
            <title>Forgot Password || ServeUp</title>
            
            <div className="card w-full max-w-md bg-base-100 shadow-xl border border-base-200">
                <div className="card-body p-8 text-center">
                    
                    <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-primary">
                        <MdMarkEmailRead size={32} />
                    </div>

                    <h2 className="text-2xl font-bold text-base-content mb-2">Forgot Password?</h2>
                    <p className="text-base-content/60 mb-6 text-sm">
                        No worries! Enter your email below and we'll send you a link to reset your password.
                    </p>

                    <form onSubmit={handleResetPassword} className="space-y-4 text-left">
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email Address</span>
                            </label>
                            <div className="relative">
                                <MdEmail className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40 text-lg" />
                                <input 
                                    type="email" 
                                    placeholder="Enter your registered email" 
                                    className="input input-bordered w-full pl-11 focus:input-primary"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <button 
                            type="submit" 
                            disabled={loading}
                            className="btn btn-primary w-full text-white font-semibold text-lg mt-2"
                        >
                            {loading ? <span className="loading loading-spinner"></span> : "Send Reset Link"}
                        </button>
                    </form>

                    <div className="mt-6 pt-6 border-t border-base-200">
                        <Link 
                            to="/auth/login" 
                            className="flex items-center justify-center gap-2 text-sm font-medium text-base-content/70 hover:text-primary transition-colors"
                        >
                            <BiArrowBack /> Back to Login
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;