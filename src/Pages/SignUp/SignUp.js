import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img from '../../assets/login/login.png';
import img2 from '../../assets/login/camera.jpg';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { Helmet } from 'react-helmet';

const SignUp = () => {
    const [error, setError] = useState('');
    const [nameError, setNameError] = useState('');
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const displayName = form.displayName.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        if (!/^[a-zA-Z]+ [a-zA-Z]+$/.test(displayName)) {
            setNameError('Please add first and last name');
            return;
        }
        setNameError('');

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                navigate('/login');
                handleUpdateUserProfile(displayName, photoURL);
            })
            .catch(err => {
                console.error(err);
                setError(err.message);
            });

    }
    const handleUpdateUserProfile = (displayName, photoURL) => {
        const profile = {
            displayName: displayName,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch((error => console.error(error)));
    }

    return (
        <div>
            <Helmet><title>PhotoBooths-Sign Up</title></Helmet>
            <h2 className='pt-5 text-center text-stone-700 text-4xl font-bold font-serif'>Sign in to the system</h2>
            <div className="hero w-full my-20">
                <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                    <div className="text-center lg:text-left relative">
                        <img className='w-3/4' src={img} alt="" />
                        <img className='w-1/2 rounded-full absolute top-3/4 left-44' src={img2} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-stone-100  py-20">
                        <h1 className="text-5xl text-center font-bold text-stone-600">Sign Up</h1>
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-stone-600 font-medium">Your Name</span>
                                </label>
                                <p className='text-red-600'>{nameError}</p>
                                <input type="text" name='displayName' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">photoURL:</span>
                                </label>
                                <input type="text" name='photoURL' placeholder="Your Photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-stone-600 font-medium">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-stone-600 font-medium">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-ghost btn-outline text-stone-600 font-bold" type="submit" value="Sign Up" />
                                <p className='text-red-600'>{error}</p>
                            </div>
                        </form>
                        <p className='text-center '>Already a registered member?<Link className='text-amber-800 text-xl font-bold mr-2' to="/login"> Log in</Link> </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;