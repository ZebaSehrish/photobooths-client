import React from 'react';
import img1 from '../../../assets/promise-section/img1.jpg';
import img2 from '../../../assets/promise-section/img2.jpg';
import img3 from '../../../assets/promise-section/img3.jpg';

const PromiseSection = () => {
    return (
        <div>
            <div className='grid place-content-center'>
                <div className='pb-20 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-stone-500'>
                    <div className="card card-compact w-56 rounded-md">
                        <div className="card-body">
                            <h2 className="card-title text-4xl font-bold">Promises</h2>
                            <p>Professional photography is an art as well as a science and relies heavily on striking the right balance among creativity, patience and communication. I pride myself in all these areas, and when added to my impeccable customer service record, I believe I have a unique offering - and more importantly, so do my clients.</p>
                        </div>
                    </div>
                    <div className="card card-compact w-72 bg-stone-100 shadow-xl rounded-md">
                        <figure><img src={img1} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">EXCELLENT CUSTOMER SERVICE</h2>
                            <p>I don't employ sales staff - you will always discuss your project and pricing directly with either a designer or me directly.</p>
                        </div>
                    </div>
                    <div className="card card-compact w-72 bg-stone-100 shadow-xl rounded-md">
                        <figure><img src={img2} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">AFFORDABLE SOLUTIONS</h2>
                            <p>I work to all budgets and create cost effective packages for small, medium and large organizations, in Dhaka and beyond.</p>
                        </div>
                    </div>
                    <div className="card card-compact w-72 bg-stone-100 shadow-xl rounded-md">
                        <figure><img src={img3} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">EXPERIENCE AND GUIDANCE</h2>
                            <p>I offer solid, dependable and creative advice to produce a unique photographic identity for your company.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default PromiseSection;