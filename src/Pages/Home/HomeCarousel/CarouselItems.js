import React from 'react';
import './CarouselItems.css';

const CarouselItems = ({ slide }) => {
    const { image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full h-full">
            <div className=' carousel-img  w-full'>
                <img src={image} alt='' className=" w-full rounded-2xl" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-1/4">
                <h1 className='text-5xl font-bold text-white carousel-title'>
                    ALL DISCIPLINES OF<br />
                    PROFESSIONAL PHOTOGRAPHY<br />
                </h1>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
                <p className='text-xl text-white carousel-text'>Our work can be seen in catalogues, editorial, advertising, design, publishing, online and in print, both still and in motion.</p>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${prev}`} className="btn btn-circle btn-outline text-white">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle btn-outline text-white">❯</a>
            </div>
        </div>
    );
};

export default CarouselItems;