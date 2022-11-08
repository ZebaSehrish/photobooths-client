import React from 'react';
import './FAQ.css';
import img1 from '../../../assets/FAQ/img1.jpg';

const FAQ = () => {
    return (
        <div className='relative w-full h-full'>
            <div className='faq-img w-full'>
                <img src={img1} className='w-full' alt="" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2">
                <div className='text-xl font-bold text-white'>
                    PROFESSIONAL PHOTOGRAPHY FAQS?<br /><br />
                    <div className='pr-52'>
                        <p className=' font-medium'>  How much does professional photography cost?</p>
                        <p className='font-light'><small>It might surprise some people that professional photographs don’t have to cost a fortune. Shop around to find a price you’re comfortable with, and balance your quality requirements with your budget! Most photographers charge either a fixed ‘per item’ rate for white background and studio images of clothing, products or food items, and they will also have an hourly rate for lifestyle or location shoots, or those where the client is involved in the creative direction. Often per product rates will begin as low as £10 per image, although most have a minimum charge of at least £100 to cover studio setups and preparation.

                            Read more about our pricing structures or email us for a bespoke quotation.</small></p>
                    </div><br /><br />
                    <div className='pr-52'>
                        <p className='font-medium'>How to write a good brief for a professional photographer </p>
                        <p className='font-light'><small>When you’re paying someone else to visually represent your product or service, it’s really important that they understand what it is you want to convey! Spending time in advance writing a good and clear brief is essential. Good product photographers will know how to light and photograph your products well, but they may not know who your target market is, what the key selling points of your products are. It’s useful to find examples of images you like, and to explain what it is you like (or dislike) about them, even if the products are not the same.</small></p>
                    </div><br /><br />
                    <div className='pr-52'>
                        <p className='font-medium'>How do I take my own product photographs at home?</p>
                        <p className='font-light'><small>It’s not easy to take commercial quality product photographs yourself, but if you do – here are a few of the most important things to bear in mind.

                            <p> 1. Even if you take a nice clear photograph of your product on a white paper background, the background will not be 100% white! Place it onto a white website, and little patches of grey will become very obvious. Many websites (including Amazon) require a 100% white background as standard.</p>

                            <p> 2. It’s easier to take a nice lifestyle image yourself than it is to take a professional white background image. Find a nice paper, stone or wooden surface to use as your backdrop, and then prop your set with some relevant items to give interest to the background.</p>

                            3. Make sure your products are well lit. Try using a side window light, a wide aperture and a tripod! Make sure that your camera is supported on a tripod or table to avoid any camera shake, as using natural light will often require a slow shutter speed.
                        </small></p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FAQ;