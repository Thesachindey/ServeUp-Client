import React, { use, useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../provider/AuthProvider';

const UpdateInfo = () => {
    const { setUser, updateUser } = use(AuthContext);
    const navigate = useNavigate();
    const [nameError, setNameError] = useState('');

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;

        if (name.length < 5) {
            setNameError('Name should be more than 5 characters!');
            return;
        } else {
            setNameError('');
        }

        // call updateUser
        updateUser({ displayName: name, photoURL: photo })
            .then(() => {
                // Update the context user info
                setUser((prevUser) => ({
                    ...prevUser,
                    displayName: name,
                    photoURL: photo
                }));
                toast.success("Profile update successfully.")
                navigate('/my-profile'); 
            })
            .catch((error) => {
                toast.error('Update failed:', error);
            });
    };

    return (
        <div className=''>
             <title>Update profile</title>
            <div className='flex justify-center items-center min-h-screen'>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5 ">
                    <div className="px-10 space-y-5">
                        <h2 className='logo-font text-2xl text-center'>Update your account info.</h2>
                        <hr className=' px-10 text-base-300' />
                    </div>
                    <form onSubmit={handleUpdate} className="card-body">
                        <fieldset className="fieldset">
                            {/* Name */}
                            <label className="label">Name</label>
                            <input
                                name='name'
                                type="text"
                                className="input"
                                placeholder="Enter Your Name"
                                required
                            />
                            {nameError && (
                                <p className='text-red-600 font-semibold mt-2'>{nameError}</p>
                            )}

                            {/* Photo URL */}
                            <label className="label">Photo URL</label>
                            <input
                                name='photo'
                                type="text"
                                className="input"
                                placeholder="Enter Your Photo URL"
                                required
                            />

                            <button
                                type='submit'
                                className="bg-green-400 text-white px-5 py-2 rounded-lg w-full font-semibold hover:bg-green-500 btn btn-outline border-black transition-colors cursor-pointer mt-5"
                            >
                                Update Profile
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateInfo;
