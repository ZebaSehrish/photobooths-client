import React from 'react';
import FAQ from '../FAQ/FAQ';
import HomeCarousel from '../HomeCarousel/HomeCarousel';
import PromiseSection from '../PromiseSection/PromiseSection';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <HomeCarousel></HomeCarousel>
            <Services></Services>
            <PromiseSection></PromiseSection>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;