import React from 'react';
import img from '../../assets/login/login.png';

const Review = ({ review }) => {
    const { customer, email, message } = review;
    return (
        <div>

            <div className='flex gap-5 p-3'>
                <div>
                    <img className='w-12 rounded-full' src={img} alt="" />
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