import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const CheckOut = () => {
    const { _id, title, price, img, description } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handleLeaveReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const message = form.message.value;
        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            message
        }
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Review recorded successfully')
                    form.reset();
                }
            })
            .catch(er => console.error(er));

    }
    return (
        <div className='grid place-content-center'>
            <div className='grid gap-2 grid-cols-1 justify-center md:grid-cols-1 lg:grid-cols-2'>
                {/* <div>
                    <div className="card card-compact w-96 bg-stone-100 shadow-xl text-stone-600">
                        <figure><img src={img} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{title}</h2>
                            <p>{description}</p>
                            <div className="card-actions justify-between">
                                <p className="text-stone-700 font-medium">Starting From BDT.{price}</p>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div>
                    <form onSubmit={handleLeaveReview}>
                        <h2 className="text-2xl">You are about to review: {title}</h2>
                        <div className='grid grid-cols-2 lg:grid-cols-2 gap-4'>
                            <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full  input-bordered" />
                            <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full  input-bordered" />
                            <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                        </div>
                        <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Message" required></textarea>

                        <input className='btn btn-ghost btn-outline' type="submit" value="Confirm Review" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;