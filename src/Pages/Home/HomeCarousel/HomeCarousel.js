import React from 'react';
import img1 from '../../../assets/carousel/clothing.jpg';
import img2 from '../../../assets/carousel/aerial.webp';
import img3 from '../../../assets/carousel/editorial.webp';
import img4 from '../../../assets/carousel/food.jpg';
import img5 from '../../../assets/carousel/wedding..jpg';
import CarouselItems from './CarouselItems';

const HomeCarousel = () => {

    const bannerData = [
        {
            image: img1,
            prev: 6,
            id: 1,
            next: 2
        },
        {
            image: img2,
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: img3,
            prev: 2,
            id: 3,
            next: 4
        },
        {
            image: img4,
            prev: 3,
            id: 4,
            next: 5
        },
        {
            image: img5,
            prev: 4,
            id: 5,
            next: 1
        }
    ]

    return (
        <div className="carousel w-full">
            {
                bannerData.map(slide => <CarouselItems
                    key={slide.id}
                    slide={slide}
                ></CarouselItems>)
            }
        </div>
    );
};

export default HomeCarousel;