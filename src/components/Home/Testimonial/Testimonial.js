import React from 'react';

const Testimonial = (props) => {
    const { detail, name, designation, img } = props.testimonial;
    return (
        <div className="col-md-4">
            <div class="card mb-3" style={{ maxWidth: '540px' }}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img style={{padding: '10px'}} src={img} alt="..." />
                        <div>
                            <h6 style={{padding: '5px'}} className="text-primary">{name}</h6>
                            <p style={{ color: '#444444', padding: '10px' }} className="m-0">{designation}</p>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <p style={{ color: '#444444' }} class="card-text">{detail}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;