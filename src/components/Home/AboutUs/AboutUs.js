import React from 'react';
import about from '../../../images/about.png';

const AboutUs = () => {
    return (
        <section className="container">
            <div className="row d-flex align-items-center">
                <div className="col-xs-12 col-sm-12 col-md-6">
                    <img style={{height: '400px'}} src={about} alt=""/>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6">
                    <h5 className="text-primary fw-bolder">About us</h5>

                    <h1 style={{ color: '#101010' }}>We Are Helping Brands to Reach Full Potential</h1>
                    <br />
                    <h5 style={{ color: '#444444' }}>Provide users with appropriate view and access permissions to requests, problems, changes, contracts, assets, solutions, and reports with our experienced professionals.</h5>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;