import React from 'react';
import { Link } from 'react-router-dom';
import FAQ from '../FAQ/FAQ';
import HomeCarousel from '../HomeCarousel/HomeCarousel';
import PromiseSection from '../PromiseSection/PromiseSection';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <HomeCarousel></HomeCarousel>
            <div className='bg-stone-700 py-5 mb-20 '>
                <Services></Services>
                <div className='flex justify-center'>
                    <Link to='/services'><button className='btn btn-ghost btn-outline flex justify-center text-stone-100'>See All</button></Link>
                </div>
            </div>
            <PromiseSection></PromiseSection>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;