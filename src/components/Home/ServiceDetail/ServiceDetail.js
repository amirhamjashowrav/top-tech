import React from 'react';
import { useHistory } from 'react-router-dom';

const ServiceDetail = ({ service }) => {
    const { image } = service;
    const history = useHistory();

    return (
        <div className="col-xs-12 col-sm-12 col-md-4 text-center">
            <div className="card mt-5" style={{width: '18rem'}}>
                <img style={{ height: '200px', width: '', padding: '12px 60px' }} src={`data:image/png;base64,${image.img}`} className="card-img-top bg-primary" alt="..."/>
                    <div className="card-body">
                        <h5 style={{ color: '#101010' }} className="card-title">{service.title}</h5>
                        <h5 style={{ color: '#101010' }} className="card-title">{service.price}</h5>
                        <p style={{ color: '#444444' }} className="card-text">{service.description}</p>
                        <button onClick={()=>history.push('/dashboard/_id')} className="btn btn-primary">Explore</button>
                    </div>
            </div>
        </div>
    );
};

export default ServiceDetail;