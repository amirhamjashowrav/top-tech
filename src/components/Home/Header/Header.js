import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import AboutUs from '../AboutUs/AboutUs';
import HeaderMain from '../HeaderMain/HeaderMain';

const Header = () => {
    return (
        <div>
             <Navbar></Navbar>
             <HeaderMain></HeaderMain>
             <AboutUs></AboutUs>
        </div>
    );
};

export default Header;