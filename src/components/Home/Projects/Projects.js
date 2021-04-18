import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Projects.css';
import project1 from '../../../images/project1.jpg';
import project2 from '../../../images/project2.jpg';
import project3 from '../../../images/project3.jpg';
import project4 from '../../../images/project4.jpg';

const options = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    margin: 20,
    dots: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 3
        }
    }
}

const Projects = () => {
    return (
        <section className='our-works text-center py-5 px-md-0 px-3 mb-5 mt-5'>
            <h1 className='works-title py-5'>Our Recent Launched <span>Projects</span></h1>
            <OwlCarousel className='owl-theme mt-5 pb-md-0'
                {...options}
            >
                <div><img src={project1} alt="" /></div>
                <div><img src={project2} alt="" /></div>
                <div><img src={project3} alt="" /></div>
                <div><img src={project4} alt="" /></div>
                <div><img src={project1} alt="" /></div>
                <div><img src={project2} alt="" /></div>
                <div><img src={project3} alt="" /></div>
                <div><img src={project4} alt="" /></div>
            </OwlCarousel>
        </section >
    );
};

export default Projects;