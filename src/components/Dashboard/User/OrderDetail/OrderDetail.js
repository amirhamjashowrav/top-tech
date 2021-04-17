import React, { useState, useEffect } from 'react';
import './OrderDetail.css'

const OrderDetail = ({ order }) => {
    const { status } = order;
    const statusBtnStyles = {
        width: "108px",
        height: "40px",
        borderRadius: "5px",
    }

    if (status === "Pending") {
        statusBtnStyles.background = "#FFE3E3"
        statusBtnStyles.color = "#FF4545"
    } else if (status === "On Going") {
        statusBtnStyles.background = "#ffe5c7"
        statusBtnStyles.color = "#FFBD3E"
    } else if (status === "Done") {
        statusBtnStyles.background = "#C6FFE0"
        statusBtnStyles.color = "#009444"
    }


    const [orderList, setOrderList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allOrders')
            .then(res => res.json())
            .then(data => setOrderList(data));
    }, [])

    return (
        <div className="col-md-6">
            <div className="order-card p-4 mb-5">
                <div className="order-top d-flex justify-content-between align-items-start">
                    <button style={statusBtnStyles} className="btn">{status}</button>
                </div>
                <div>
                    {orderList.map((info) => (
                        <div>
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