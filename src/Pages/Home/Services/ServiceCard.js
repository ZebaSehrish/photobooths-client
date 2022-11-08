import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const { _id, title, img, price, description } = service;
    return (
        <div className="card card-compact w-96 bg-stone-100 shadow-xl text-stone-600">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{
                    description.length > 100 ?
                        <p>{description.slice(0, 100) + "..."}<Link>read more</Link></p>
                        :
                        <p>description</p>
                }</p>
                <div className="card-actions justify-between">
                    <p className="text-stone-700 font-medium">Starting From BDT.{price}</p>
                    <Link to={`/checkout/${_id}`}>
                        <button className="btn btn-ghost btn-outline">View Details</button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default ServiceCard;