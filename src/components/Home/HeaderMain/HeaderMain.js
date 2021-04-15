import React from 'react';
import homeBg from '../../../images/homebg.png';

const HeaderMain = () => {
    return (
        <main className="container">
            <div className="row d-flex align-items-center">
                <div className="col-xs-12 col-sm-12 col-md-5">
                    <h1 style={{ color: '#101010' }}>We Are Digital Agency,<br /> Technology Solution.</h1>
                    <br />
                    <h5 style={{color: '#444444'}}>We are leading technology solutions providing company all over the world.</h5>
                    <br />
                    <button className="btn btn-primary">Get Started</button>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-7">
                    <img src={homeBg} alt="" className="img-fluid" />
                </div>
            </div>
        </main>
    );
};

export default HeaderMain;