import React, { useState, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { FaEye, FaEyeSlash, FaGoogle, FaUserSecret } from 'react-icons/fa';
import { MdEmail, MdLock } from 'react-icons/md';
import { IoMdLogIn } from 'react-icons/io';
import toast from 'react-hot-toast';
import { AuthContext } from '../../provider/AuthProvider';

const LoginPage = () => {
    const { signIn, signInWithGoogleFunc, setUser } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    const fromPath = location.state?.from?.pathname || '/';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        setError('');

        if (password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }

        setLoading(true);

        signIn(email, password)
            .then((result) => {
                const user = result.user;
                setLoading(false);
                toast.success(`Welcome back, ${user.displayName || 'User'}!`);
                navigate(fromPath, { replace: true });
            })
            .catch((err) => {
                setLoading(false);
                const errorCode = err.code;

                if (errorCode === 'auth/invalid-credential') {
                    setError('Incorrect email or password.');
                } else if (errorCode === 'auth/user-not-found') {
                    setError('No account found with this email.');
                } else if (errorCode === 'auth/too-many-requests') {
                    setError('Too many attempts. Try again later.');
                } else {
                    setError('Login failed. Please try again.');
                }
            });
    };

    const handleGoogleSignin = () => {
        signInWithGoogleFunc()
            .then((result) => {
                setUser(result.user);
                toast.success("Signed in with Google!");
                navigate(fromPath, { replace: true });
            })
            .catch((err) => {
                console.error(err);
                toast.error("Google Sign-in failed.");
            });
    };

    const fillDemoUser = () => {
        setEmail("user@serveup.com");
        setPassword("User@serveup1");
        toast.success("Demo credentials filled!");
    };

    return (
        <div className="min-h-screen bg-base-200 flex items-center my-10 rounded-3xl
         justify-center py-10 px-4">
            <title>Login || ServeUp</title>

            <div className="card w-full max-w-md bg-base-100 shadow-2xl border border-base-200 overflow-hidden">

                <div className="bg-primary/10 p-8 text-center">
                    <h2 className="text-3xl font-bold text-base-content logo-font">Welcome Back</h2>
                    <p className="text-base-content/60 mt-2">Sign in to continue your journey</p>
                </div>

                <div className="p-8">
                    <button
                        onClick={fillDemoUser}
                        className="btn btn-sm btn-block btn-outline border-dashed border-base-300 text-base-content/60 hover:text-primary hover:border-primary mb-6 normal-case"
                    >
                        <FaUserSecret /> Auto-fill Demo User
                    </button>

                    <form onSubmit={handleLogin} className="space-y-5">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email Address</span>
                            </label>
                            <div className="relative">
                                <MdEmail className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40 text-lg" />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="input input-bordered w-full pl-11 focus:input-primary bg-base-200/50"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-control">
                            <label className="label justify-between">
                                <span className="label-text font-semibold">Password</span>
                                <Link to="/auth/forget-password" className="label-text-alt link link-hover text-primary">
                                    Forgot password?
                                </Link>
                            </label>
                            <div className="relative">
                                <MdLock className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40 text-lg" />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="••••••••"
                                    className="input input-bordered w-full pl-11 pr-12 focus:input-primary bg-base-200/50"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-base-content/40 hover:text-base-content cursor-pointer transition-colors"
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </div>

                        {error && (
                            <div className="alert alert-error text-sm py-2 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-5 w-5" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>{error}</span>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="btn btn-primary w-full text-white text-lg font-medium shadow-lg shadow-primary/30"
                        >
                            {loading ? <span className="loading loading-spinner"></span> : <><IoMdLogIn /> Login</>}
                        </button>
                    </form>

                    <div className="divider text-base-content/40 my-6">Or continue with</div>

                    <button
                        onClick={handleGoogleSignin}
                        className="btn btn-outline w-full border-base-300 hover:bg-base-200 hover:border-base-300 text-base-content flex items-center gap-3"
                    >
                          <img
                                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                                    alt="google"
                                    className="w-5 h-5"
                                />
                        <span>Sign in with Google</span>
                    </button>

                    <div className="text-center mt-8">
                        <p className="text-base-content/70">
                            Don't have an account? {' '}
                            <Link to="/auth/register" className="link link-primary font-bold no-underline hover:underline">
                                Create Account
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;