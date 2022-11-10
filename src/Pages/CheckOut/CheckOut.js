import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { ArrowSmallRightIcon } from '@heroicons/react/24/solid';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';
import Review from './Review';
import './CheckOut.css';
import { notify } from '../../Toast/Toast';

const CheckOut = () => {
    const { _id, title, price, img, description } = useLoaderData();
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://photobooths-server.vercel.app/reviews?service=${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [_id])

    const handleWriteReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = user?.displayName || 'unregistered';
        const photoURL = user?.photoURL || '';
        const email = user?.email || 'unregistered';
        const message = form.message.value;
        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            photoURL,
            message
        }
        fetch('https://photobooths-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('photoBooths-token')}`
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    notify();
                    form.reset();
                }
            })
            .catch(er => console.error(er));

    }
    return (
        <div className='grid place-content-center'>
            <Helmet><title>PhotoBooths-{title}</title></Helmet>
            <h2 className='pt-5 text-center text-stone-600 text-4xl font-bold font-serif'>Details of {title}</h2>
            <div className='checkout-container text-stone-600'>
                <div>
                    <p className='text-center text-stone-400 text-2xl font-semibold'>Get Full Details here</p>
                    <div className="card card-compact w-96 bg-stone-100 shadow-md text-stone-600 rounded-md card-container ">
                        <figure><img src={img} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{title}</h2>
                            <p>{description}</p>
                            <div className="card-actions justify-between">
                                <p className="text-stone-700 font-medium">Starting From BDT.{price}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <p className='text-center text-stone-400 text-2xl font-semibold'>Reviews</p>
                        {
                            reviews.map(review => <Review
                                key={review._id}
                                review={review}
                            ></Review>)
                        }
                    </div>
                    {user ?
                        <form onSubmit={handleWriteReview}>
                            <div className='flex gap-5 p-3 justify-center font-semibold'>
                                {/* <div className='btn btn-ghost btn-circle avatar'>
                                    <img className='w-8 rounded-full' src={user.photoURL} alt="" />
                                </div> */}

                                <p name='name'>{user.displayName}</p>

                            </div>
                            <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder={`Add your review on ${title}`} required></textarea>

                            <input className='btn btn-ghost btn-outline w-full text-stone-600 font-bold' type="submit" value="Confirm Review" />

                        </form>
                        :
                        <div className='flex justify-center'>
                            <Link to='/login' className='btn btn-outline flex justify-center gap-3'>
                                <h2 className="text-2xl font-semibold text-amber-500">Please Log in to Write Reviews!!</h2>
                                <ArrowSmallRightIcon className='w-10 font-bold'></ArrowSmallRightIcon>
                            </Link>
                        </div>

                    }

                </div>
            </div>
            <ToastContainer position="top-center"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark" />
        </div >
    );
};

export default CheckOut;