import React, { useState, useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../../App';
import ProcessPayment from '../../../ProcessPayment/ProcessPayment';
import './Order.css'

const Order = () => {

    const { register, handleSubmit } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [shippingData, setShippingData] = useState(null);

    const onSubmit = data => {
        setShippingData(data);
    }

    const handlePaymentSuccess = paymentId => {
        const orderDetails = {
            ...loggedInUser,
            status: 'pending',
            shipment: shippingData,
            paymentId,
            orderTime: new Date()
        };


        fetch('http://localhost:5000/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Your Order Placed Successfully');
                }
            })
    }

    return (
        <div className='order-container p-4'>
            <div className="container">
                <div className="row">
                    <div style={{ display: shippingData ? 'none' : 'block' }} className="col-md-6">
                        <form onSubmit={handleSubmit(onSubmit)} className="order-form form-group pt-3">
                            <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your name" className='form-control mb-3'/>
                            <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="email" className='form-control mb-3'/>
                            <input ref={register({ required: true })} placeholder='Graphic Design' className='form-control mb-3' type="text" name="service" id="" />
                            <input ref={register({ required: true })} placeholder='Price' className='form-control mb-3 d-inline mr-4' type="number" name="price" id="" /><br />
                            <button className="btn btn-primary mb-4">Send</button>
                        </form>
                    </div>
                    <div style={{ display: shippingData ? 'block' : 'none' }} className="col-md-6">
                        <h3>Provide Your Payment Information</h3>
                        <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;