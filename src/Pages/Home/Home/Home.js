import React from 'react';
import FAQ from '../FAQ/FAQ';
import HomeCarousel from '../HomeCarousel/HomeCarousel';
import PromiseSection from '../PromiseSection/PromiseSection';

const Home = () => {
    return (
        <div>
            <HomeCarousel></HomeCarousel>
            <PromiseSection></PromiseSection>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;