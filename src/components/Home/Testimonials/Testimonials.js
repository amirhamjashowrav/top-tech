import React from 'react';
import Testimonial from '../Testimonial/Testimonial';
import wilson from '../../../images/Wilson.png';
import ema from '../../../images/ema.png';
import aliza from '../../../images/aliza.png';

const testimonialData = [
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur.',
        name: 'Wilson Harry',
        from: 'California',
        img: wilson
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur.',
        name: 'Ema Gomez',
        from: 'California',
        img: ema
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur.' ,
        name: 'Aliza Farari',
        from: 'California',
        img: aliza
    }
]

const Testimonials = () => {
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