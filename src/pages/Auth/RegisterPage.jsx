import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { FaEye } from 'react-icons/fa';
import { IoEyeOff } from 'react-icons/io5';
import toast from 'react-hot-toast';
import { AuthContext } from '../../provider/AuthProvider';

const RegisterPage = () => {
    const { createUser, setUser, updateUser, signInWithGoogleFunc } = use(AuthContext);
    const navigate = useNavigate();
    const [nameError, setNameError] = useState('');
    const [passError, setPassError] = useState('');
    const [show, setShow] = useState(false);

    const handelRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        if (name.length < 5) {
            setNameError('Name should be more then 5 character!')
            return;
        } else {
            setNameError('')
        }
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // Validate Password
        const passwordRegex =
            /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{6,}$/;

        if (!passwordRegex.test(password)) {
            setPassError(
                'Password must be at least 6 chars, include 1 capital letter, 1 number & 1 special character!'
            );
            return;
        } else {
            setPassError('');
        }


        // console.log({ name, photo, email, password });
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser)
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...loggedUser, displayName: name, photoURL: photo });
                        navigate('/');
                    }).catch((error) => {
                        console.log(error);
                        setUser(loggedUser);
                    })
            })
            .catch((error) => {
                const errorCode = error.code;
                toast.error(errorCode);
                //..
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


    return (
        <div className='py-10'>
            <title>Register</title>
            <div className='flex justify-center items-center min-h-screen'>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5 ">
                    <div className="px-10 space-y-5">
                        <h2 className='font-bold text-2xl text-center'> Register your account</h2>
                        <hr className=' px-10 text-base-300' />
                    </div>
                    <form onSubmit={handelRegister} className="card-body">
                        <fieldset className="fieldset">

                            {/* Name  */}
                            <label className="label">Name</label>
                            <input name='name' type="text" className="input" placeholder="Enter Your Name"
                                required />
                            {
                                nameError && <p className='text-red-600 font-semibold mt-2'>{nameError}</p>
                            }
                            {/*Photo URL */}
                            <label className="label">Photo URL</label>
                            <input name='photo' type="text" className="input" placeholder="Enter Your Photo URL" required />
                            {/* Email  */}
                            <label className="label">Email</label>
                            <input name='email' type="email" className="input" placeholder="Enter Your Email" required />
                            {/* password  */}
                            <div className="relative">
                                <label className="label">Password</label>
                                <input name='password' type={show ? 'text' : 'password'} className="input" placeholder="Enter Your New Password"
                                    required />
                                <span
                                    onClick={() => setShow(!show)}
                                    className="absolute right-[30px] top-[32px] cursor-pointer z-50"
                                >
                                    {show ? <FaEye /> : <IoEyeOff />}
                                </span>
                            </div>
                            {
                                passError && <p className='text-red-600 font-semibold mt-2'>{passError}</p>
                            }

                            <button type='submit' className="bg-green-400 text-white px-5 py-2 rounded-lg w-full font-semibold hover:bg-green-500 btn btn-outline border-black transition-colors cursor-pointer mt-5">Register</button>


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
                            <p className='font-bold text-center mt-4 '>Already Have An Account ? <Link className='text-green-500' to={'/auth/login'}>Login</Link> </p>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;