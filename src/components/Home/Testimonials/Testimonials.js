import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';

const Testimonials = () => {
    const [testimonialData, setTestimonialData] = useState([])

    useEffect(() => {
        fetch('https://limitless-woodland-17961.herokuapp.com/allReviews')
            .then(res => res.json())
            .then(data => setTestimonialData(data))
    }, [])

    return (
        <section style={{backgroundColor: '#F6F6F6', padding: '30px'}} className="mt-5">
            <div className="text-center">
                <h5 className="text-primary fw-bolder">Testimonial</h5>
                <h1 style={{ color: '#101010' }}>What Customer Saying</h1>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row pt-2">
                    {
                        testimonialData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;