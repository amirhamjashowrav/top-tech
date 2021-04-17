import React, { useEffect, useState } from 'react';
import OrderDetail from '../OrderDetail/OrderDetail';
import jwt_decode from 'jwt-decode'
import './ServiceList.css'

const ServiceList = () => {
    const [orders, setOrders] = useState([])
    const decodedToken = jwt_decode(sessionStorage.getItem('token'));
    const { email } = decodedToken
    useEffect(() => {
        fetch(`http://localhost:5000/userOrder/${email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [email])
    return (
        <div className='service-list-container p-5'>
            <div className="row">
                {
                    orders.map(order => <OrderDetail order={order} key={order._id} />)
                }
            </div>
        </div>
    );
};

export default ServiceList;