import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/icons/header-icon.jpg';
import icon from '../../../assets/login/login.png';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const HeaderNav = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch();
    }

    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        {user?.email ?
            <>
                <li><Link to='/myReviews'>My Reviews</Link></li>
                <li><Link to='/addServices'>Add services</Link></li>
                <li><button onClick={handleLogOut}>Log Out</button></li>
                <li><Link className='font-semibold text-md text-stone-800'>Hello! {user.displayName}</Link></li>
            </>
            :
            <li><Link to='/login'>Log in</Link></li>
        }

    </>


    return (
        <div className="navbar h-20 bg-stone-300 text-stone-700 font-serif">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-square avatar" >
                                <div className="rounded-md">
                                    {
                                        user?.photoURL ?
                                            <img className='w-6' src={user.photoURL} alt='' />
                                            :
                                            <img className='w-6' src={icon} alt="" />
                                    }
                                </div>
                            </label>
                        </div>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-3xl">
                    <img className='w-10 rounded-full' src={logo} alt="" />
                    PhotoBooths</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar " >
                            <div className=" rounded-full">
                                {
                                    user?.photoURL ?
                                        <img className='w-6' src={user.photoURL} alt='' />
                                        :
                                        <img className='w-6' src={icon} alt="" />
                                }
                            </div>
                        </label>
                    </div>

                </ul>
            </div>
        </div>
    );
};

export default HeaderNav;
