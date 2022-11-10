import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { deleteNotify, notify } from '../../Toast/Toast';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';
import ReviewRow from './ReviewRow';

const CurrentUserReviews = () => {
    const { user, loading, logOut } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);

    useEffect(() => {
        fetch(`https://photobooths-server-zebasehrish.vercel.app/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('photoBooths-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(data => setMyReviews(data))
    }, [user?.email], logOut)

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure. you want to cancel this order?')
        if (proceed) {
            fetch(`https://photobooths-server-zebasehrish.vercel.app/reviews/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('photoBooths-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        deleteNotify();
                        const remaining = myReviews.filter(rev => rev._id !== id);
                        setMyReviews(remaining);
                    }
                })
        }
    }

    return (
        <div>
            <Helmet> <title>PhotoBooths-My Reviews</title></Helmet>
            <h2 className='text-center text-stone-400 text-2xl font-semibold'>You Have {myReviews.length} Reviews</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Name</th>
                            <th> Service Name</th>
                            <th>Email</th>
                            <th>Reviews</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myReviews.map(myReview => <ReviewRow
                                key={myReview._id}
                                myReview={myReview}
                                handleDelete={handleDelete}
                            ></ReviewRow>)
                        }
                    </tbody>
                </table>
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
        </div>

    );
};

export default CurrentUserReviews;