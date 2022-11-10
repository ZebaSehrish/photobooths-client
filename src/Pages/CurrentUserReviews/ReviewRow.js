import React from 'react';
import { TrashIcon, PencilSquareIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const ReviewRow = ({ myReview, handleDelete }) => {
    const { _id, customer, serviceName, price, email, message, photoURL } = myReview;

    return (
        <tr>
            <th>
                <label className='flex gap-2'>
                    <button
                        className='btn btn-outline btn-circle'>  <Link to={`/update/${_id}`} ><PencilSquareIcon className='w-5'></PencilSquareIcon>    </Link>
                    </button>

                    <button onClick={() => { handleDelete(_id) }} className='btn btn-outline btn-circle'><TrashIcon className='w-5'></TrashIcon></button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photoURL} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">BDT. {price}</span>
            </td>
            <td>{email}</td>
            <th>
                <button className="btn btn-ghost btn-xs">{message}</button>
            </th>
        </tr >
    );
};

export default ReviewRow;