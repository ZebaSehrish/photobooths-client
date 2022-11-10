import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import FAQ from '../FAQ/FAQ';
import HomeCarousel from '../HomeCarousel/HomeCarousel';
import PromiseSection from '../PromiseSection/PromiseSection';
import Services from '../Services/Services';
import { Helmet } from 'react-helmet';
import ServiceCard from '../Services/ServiceCard';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://photobooths-server-zebasehrish.vercel.app/homeServices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <Helmet> <title>PhotoBooths-Home</title></Helmet>
            <HomeCarousel></HomeCarousel>
            <div className='bg-stone-700 py-5 mb-20 '>
                {/* <Services></Services> */}

                <div className='grid place-content-center py-10 bg-stone-700'>
                    <div>
                        <p className='mb-5 text-4xl text-center font-bold text-stone-100 font-serif'>Services We Provide</p>
                    </div>
                    <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        {
                            services.map(service => <ServiceCard
                                key={service._id}
                                service={service}
                            ></ServiceCard>)
                        }
                    </div>
                </div>

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