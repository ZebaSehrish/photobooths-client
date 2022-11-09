import React from 'react';

const AddServices = () => {

    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const service_id = form.service_id.value;
        const title = form.title.value;
        const img = form.img.value;
        const price = form.price.value;
        const ratings = form.ratings.value;
        const description = form.description.value;
        const service = {
            service_id,
            title,
            img: img,
            price,
            ratings,
            description
        }
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
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
        <form onSubmit={handleAddService} className='grid place-content-center my-10'>
            <p className='text-center text-stone-600 text-4xl font-bold'>Add a Service</p>
            <div className='grid gap-3 mb-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 '>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Service id:</span>
                    </label>
                    <input name='service_id' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" required />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Title:</span>
                    </label>
                    <input name='title' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" required />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Image Url:</span>
                    </label>
                    <input name='img' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" required />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Price:</span>
                    </label>
                    <input name='price' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" required />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Ratings:</span>
                    </label>
                    <input name='ratings' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" required />
                </div>
            </div>
            <textarea name="description" className="textarea textarea-bordered h-24 w-full mb-3" placeholder="description about the service" required></textarea>

            <input className='btn btn-ghost btn-outline w-full text-stone-600 font-bold' type="submit" value="Add" />
        </form>

    );
};

export default AddServices;