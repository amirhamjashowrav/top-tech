import React from 'react';
import jwt_decode from 'jwt-decode'

const Topbar = () => {
    const decodedToken = jwt_decode(sessionStorage.getItem('token'));
    const { name, picture } = decodedToken
    return (
        <div className="d-flex justify-content-between align-items-center" style={{ height: '80px' }}>
            <h3 className='mt-4 mx-4'>Order</h3>
            <div>
                <h5 className='mt-4 mr-4'>{name}</h5>
            </div>
        </div>
    );
};

export default Topbar;