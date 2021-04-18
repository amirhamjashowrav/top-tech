import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Services = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://limitless-woodland-17961.herokuapp.com/allServices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    
    return (
        <section className="mt-5">
            <div className="text-center">
                <h5 className="text-primary fw-bolder">Services</h5>
                <h2 style={{ color: '#101010' }}>What Solutions We Provide to Our Valued Customers</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row pt-2">
                    {
                        services.map(service => <ServiceDetail service={service} key={service.title}></ServiceDetail>)
                    }

                </div>
            </div>
        </section>
    );
};

export default Services;