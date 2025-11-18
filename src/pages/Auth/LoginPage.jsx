
import React, { use, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';

import { FaEye } from 'react-icons/fa';
import { IoEyeOff } from 'react-icons/io5';
import toast from 'react-hot-toast';
import { AuthContext } from '../../provider/AuthProvider';
import { IoMdLogIn } from 'react-icons/io';



const LoginPage = () => {
    const [error, setError] = useState('');
    const [show, setShow] = useState(false);


    const {
        signIn,
        signInWithGoogleFunc,
        sendPasswordResetEmailFunc,
        user,
        setUser } = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const emailRef = useRef(null);

    const handelLogIn = (event) => {
        event.preventDefault();
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        // console.log({ email, password });

        signIn(email, password)
            .then((result) => {
                const user = result.user;
                navigate(`${location.state ? location.state : '/'}`);

            }).catch((error) => {
                const errorCode = error.code;

                // Handle different Firebase Auth errors
                if (errorCode === 'auth/invalid-email') {
                    setError('Invalid email address. Please check and try again.');
                } else if (errorCode === 'auth/user-not-found') {
                    setError('No user found with this email.');
                } else if (errorCode === 'auth/wrong-password') {
                    setError('Incorrect password. Please try again.');
                } else if (errorCode === 'auth/too-many-requests') {
                    setError('Too many attempts. Please wait and try later.');
                } else {
                    setError('Something went wrong. Please try again.');
                }


            });
    }

    // google signIn
    const handleGoogleSignin = () => {


        // signInWithPopup(auth, googleProvider)
        signInWithGoogleFunc()
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigate(`${location.state ? location.state : '/'}`);
                setUser(user);
                toast.success("SignIn completed!!")


            })
            .catch((error) => {
                const errorCode = error.code;
                // const errorMessage = error.message;
                toast.error(errorCode);
                console.log(errorCode);
            });
    };

    // forgot pass 
    const handleForgetPassword = () => {
        const email = emailRef.current.value;

        // 1️⃣ Check if the email field is empty
        if (!email) {
            toast.error('Please enter your email first!');
            return;
        }

        // 2️⃣ Send the password reset email using Firebase
        sendPasswordResetEmailFunc(email)
            .then(() => {
                toast.success('Password reset email sent! Check your inbox.');
            })
            .catch((error) => {
                const errorCode = error.code;

                // 3️⃣ Handle common Firebase errors with friendly messages
                if (errorCode === 'auth/invalid-email') {
                    toast.error('Invalid email address.');
                } else if (errorCode === 'auth/user-not-found') {
                    toast.error('No account found with this email.');
                } else if (errorCode === 'auth/missing-email') {
                    toast.error('Please enter your email before trying again.');
                } else {
                    toast.error('Something went wrong. Please try again later.');
                }

                console.error('Password reset error:', error);
            });
    };


    return (
        <div>
            <title>Gamehub - LogIn</title>
            <div className='flex justify-center items-center min-h-screen'>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5 ">
                    <div className="px-10 space-y-5">
                        <h2 className='font-bold text-2xl text-center'>Login your account</h2>
                        <hr className=' px-10 text-base-300' />
                    </div>
                    <form onSubmit={handelLogIn} className="card-body">
                        <fieldset className="fieldset">
                            {/* email  */}
                            <label className="label">Email</label>
                            <input ref={emailRef} name='email' type="email" className="input" placeholder="Email"
                                required
                            />

                            {/* Password  */}
                            <div className="relative">
                                <label className="label">Password</label>
                                <input
                                    type={show ? 'text' : 'password'}
                                    name="password"
                                    placeholder="••••••••"
                                    className="input "
                                    required
                                />
                                <span
                                    onClick={() => setShow(!show)}
                                    className="absolute right-[30px] top-[32px] cursor-pointer z-50"
                                >
                                    {show ? <FaEye /> : <IoEyeOff />}
                                </span>
                            </div>
                            <button
                                className="hover:underline text-start hover:text-green-400 cursor-pointer"
                                onClick={handleForgetPassword}
                                type="button"
                            >
                                Forget password?
                            </button>
                            {
                                error && <p className='text-red-600 font-semibold mt-2'>{error}</p>
                            }

                            <button type='submit' className="btn flex justify-center items-center bg-green-400 hover:bg-green-500 btn-outline text-white border-black mt-4"><IoMdLogIn />Login</button>

                            {/* Divider */}
                            <div className="flex items-center justify-center gap-2 my-2">
                                <div className="h-px w-16 bg-black/30"></div>
                                <span className="text-sm text-black/70">or</span>
                                <div className="h-px w-16 bg-black/30"></div>
                            </div>

                            {/* Google Signin */}
                            <button
                                type="submit"
                                onClick={handleGoogleSignin}
                                className="flex items-center justify-center gap-3 bg-green-400 text-white px-5 py-2 rounded-lg w-full font-semibold hover:bg-green-500 btn btn-outline border-black transition-colors cursor-pointer"
                            >
                                <img
                                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                                    alt="google"
                                    className="w-5 h-5"
                                />
                                Continue with Google
                            </button>


                            <p className='font-bold text-center mt-4 '>Dont’t Have An Account ? <Link className='text-green-500' to={'/auth/register'}>Register</Link> </p>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;