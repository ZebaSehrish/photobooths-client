import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewRow from './ReviewRow';

const CurrentUserReviews = () => {
    const { user, loading } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [user?.email])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure. you want to cancel this order?')
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = myReviews.filter(rev => rev._id !== id);
                        setMyReviews(remaining);
                    }
                })
        }
    }

    return (
        <div>
            <h2 className='text-center text-stone-400 text-2xl font-semibold'>You Have {myReviews.length} Reviews</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Name and Contact details</th>
                            <th>Product Details</th>
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
        </div>

    );
};

export default CurrentUserReviews;