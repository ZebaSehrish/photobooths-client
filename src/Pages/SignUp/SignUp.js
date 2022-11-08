import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/login/login.png';
import img2 from '../../assets/login/camera.jpg';

const SignUp = () => {
    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left relative">
                    <img className='w-3/4' src={img} alt="" />
                    <img className='w-1/2 rounded-full absolute top-3/4 left-44' src={img2} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-stone-100  py-20">
                    <h1 className="text-5xl text-center font-bold text-stone-600">Sign Up</h1>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-stone-600 font-medium">Your Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
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
                        </div>
                    </form>
                    <p className='text-center '>Already a registered member?<Link className='text-amber-800 text-xl font-bold mr-2' to="/login"> Log in</Link> </p>

                </div>
            </div>
        </div>
    );
};

export default SignUp;