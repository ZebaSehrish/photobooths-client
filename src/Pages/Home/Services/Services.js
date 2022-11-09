import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    // const [services, setServices] = useState([]);
    const { services, count } = useLoaderData();
    const homePage = 3;
    // useEffect(() => {
    //     fetch('http://localhost:5000/services')
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [])

    return (
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
    );
};

export default Services;