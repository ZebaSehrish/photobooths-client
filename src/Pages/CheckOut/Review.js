import React, { useContext } from 'react';
import img from '../../assets/login/login.png';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { notify } from '../../Toast/Toast';

const Review = ({ review }) => {
    const { user } = useContext(AuthContext);
    const { customer, email, message, photoURL } = review;

    return (
        <div>

            <div className='flex gap-5 p-3'>
                <div className='btn btn-ghost btn-circle avatar'>
                    <img className='w-12 rounded-full' src={photoURL} alt="" />
                </div>
                <div>
                    <p>{customer}</p>
                    <p><small>{email}</small></p>
                    <p><small>{message}</small></p>
                </div>
            </div>

        </div>
    );
};

export default Review;