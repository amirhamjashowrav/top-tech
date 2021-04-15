import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const noNamed = [
        {name: "About Us" , link: "/emergency"},
        {name: "Meet Our Team" , link: "/checkup"},
        {name: "News & Media" , link: "/personal-treatment"},
        {name: "Case Studies" , link: "/tooth-extract"},
        {name: "Contacts" , link: "/checkup"},
    ]
    const ourAddress = [
        {name: "New York - 101010 Hudson" , link: "//google.com/map"},
        {name: "Yards" , link: "//google.com/map"},
       
    ]
    const oralHealth = [
        {name: "Pricing and plans" , link: "/emergency"},
        {name: "Terms of Service" , link: "/checkup"},
        {name: "Help & FAQ" , link: "/personal-treatment"},
        {name: "Contact Us" , link: "/tooth-extract"},
        {name: "Site map" , link: "/checkup"}
    ]
    const services = [
        {name: "Software Development" , link: "/emergency"},
        {name: "Web Development" , link: "/checkup"},
        {name: "Analytic Solutions" , link: "/personal-treatment"},
        {name: "Cloud and DevOps" , link: "/tooth-extract"},
        {name: "Project Design" , link: "/checkup"}
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle="Company" menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Resources" menuItems={oralHealth}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6 className="text-light">Call now</h6>
                            <button className="btn btn-light">+2022233344</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center text-light">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;