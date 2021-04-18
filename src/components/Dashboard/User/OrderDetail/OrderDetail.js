import React, { useState, useEffect } from 'react';
import './OrderDetail.css'

const OrderDetail = () => {
    
    const statusBtnStyles = {
        width: "108px",
        height: "40px",
        borderRadius: "5px",
        backgroundColor: "cyan"
    }

    const [orderList, setOrderList] = useState([]);

    useEffect(() => {
        fetch('https://limitless-woodland-17961.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(data => setOrderList(data));
    }, [])

    return (
        <div className="col-md-6">
            <div className="order-card p-4 mb-5">
                <div className="order-top d-flex justify-content-between align-items-start">
                    {orderList.map((info) =>(
                        <div key={info._id}>
                            <button style={statusBtnStyles} className="btn">{info.status}</button>
                            <p className="order-title mt-3">{info.shipment.service}</p>
                            <p style={{ color: 'rgba(0, 0, 0, 0.7)' }} className="text-secondary">Price: ${info.shipment.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OrderDetail;