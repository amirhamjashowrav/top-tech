import React from 'react';
import icon1 from '../../../images/icon1.png';
import icon2 from '../../../images/icon2.png';
import icon3 from '../../../images/icon3.png';
import icon4 from '../../../images/icon4.png';
import icon5 from '../../../images/icon5.png';
import icon6 from '../../../images/icon6.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Services = () => {
    const serviceData = [
        {
            name: 'Software Development',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quaerat?',
            price: '$349',
            img: icon1
        },
        {
            name: 'Web Development',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quaerat?',
            price: '$429',
            img: icon2
        },
        {
            name: 'Analytic Solutions',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quaerat?',
            price: '$279',
            img: icon3
        },
        {
            name: 'Cloud & DevOps',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quaerat?',
            price: '$249',
            img: icon4
        },
        {
            name: 'Product & Design',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quaerat?',
            price: '$329',
            img: icon5
        },
        {
            name: 'Database Administrator',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quaerat?',
            price: '$279',
            img: icon6
        }
    ]

    return (
        <section className="mt-5">
            <div className="text-center">
                <h5 className="text-primary fw-bolder">Services</h5>
                <h2 style={{ color: '#101010' }}>What Solutions We Provide to Our Valued Customers</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row pt-2">
                    {
                        serviceData.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;