import React from 'react';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Contact from '../Contact/Contact';
import Footer from '../../Shared/Footer/Footer';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Projects></Projects>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;