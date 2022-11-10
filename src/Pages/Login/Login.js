import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/login/login.png';
import img2 from '../../assets/login/camera.jpg';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { Helmet } from 'react-helmet';
//import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
    const [error, setError] = useState('');
    const { login, providerLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;

                const currentUser = {
                    email: user.email

                }
                console.log(currentUser);

                //get jwt token
                fetch(`http://localhost:5000/jwt`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('photoBooths-token', data.token);
                        // navigate(from, { replace: true });
                    })


                form.reset();
                setError('');

            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    }

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))

    }


    return (
        <div>
            <Helmet><title>PhotoBooths-Login</title></Helmet>
            <h2 className='pt-5 text-center text-stone-700 text-4xl font-bold font-serif'>Log in to the system</h2>
            <div className="hero w-full my-20">
                <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                    <div className="text-center lg:text-left relative">
                        <img className='w-3/4' src={img} alt="" />
                        <img className='w-1/2 rounded-full absolute top-3/4 left-44' src={img2} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-stone-100  py-20">
                        <h1 className="text-5xl text-center font-bold text-stone-600">Login</h1>
                        <form onSubmit={handleLogin} className="card-body">
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
                                <input className="btn btn-ghost btn-outline text-stone-600 font-bold" type="submit" value="Login" />
                                <p className='text-red-500'> {error}</p>
                            </div>
                            <button onClick={handleGoogleSignIn} className="btn btn-primary text-stone-100 font-bold" > Sign in with Google <FaGoogle className='ml-2'></FaGoogle></button>
                        </form>
                        <p className='text-center '>New to PhotoBooths? <Link className='text-amber-800 text-xl font-bold mr-2' to="/signup"> Sign Up Now!</Link> </p>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;