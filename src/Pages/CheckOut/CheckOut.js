import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const { title, price, img, description } = useLoaderData();
    return (
        <div className='grid grid-cols-2'>
            <div>
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
            </div>
            <div>
                review
            </div>
        </div>
    );
};

export default CheckOut;