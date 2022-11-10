import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const storedUser = useLoaderData();
    const { _id, serviceName, price, message } = storedUser;
    const [storedReview, setStoredReview] = useState(storedUser);

    const handleUpdateReview = event => {
        event.preventDefault();
        // console.log(storedReview);
        fetch(`http://localhost:5000/reviews/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(storedReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('review updated');
                }
                console.log(data);
            })

    }

    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newReview = { ...storedReview };
        newReview[field] = value;
        setStoredReview(newReview);
    }

    return (
        <div>
            <form onSubmit={handleUpdateReview} className='grid place-content-center my-10'>
                <p className='text-center text-stone-600 text-4xl font-bold'>Edit Your Review</p>
                <div className='grid gap-3 mb-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 '>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Service Name:</span>
                        </label>
                        <input name='service_id' type="text" className="input input-bordered w-full max-w-xs" defaultValue={serviceName} readOnly />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Price:</span>
                        </label>
                        <input name='price' type="text" defaultValue={price} className="input input-bordered w-full max-w-xs" readOnly />
                    </div>
                </div>
                <textarea onChange={handleInputChange} name="message" className="textarea textarea-bordered h-24 w-full mb-3" defaultValue={message} required></textarea>

                <input className='btn btn-ghost btn-outline w-full text-stone-600 font-bold' type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;