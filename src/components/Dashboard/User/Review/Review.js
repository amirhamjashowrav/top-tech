import React from 'react';
import { useForm } from 'react-hook-form';
import './Review.css'
import jwt_decode from 'jwt-decode'

const Review = () => {
    const { register, handleSubmit } = useForm()
    const decodedToken = jwt_decode(sessionStorage.getItem('token'));
    const { name, picture } = decodedToken

    const onSubmit = data => {
        data.img = picture
        fetch('https://limitless-woodland-17961.herokuapp.com/addReview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert("Review submitted successfully")
                }
            })
    }

    return (
        <div className='review-container order-container p-4'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit(onSubmit)} className="order-form form-group pt-1">
                            <input ref={register} value={name} placeholder="Your name" className='form-control mb-3' type="text" name="name" id="" required />
                            <input ref={register} placeholder="Company's name, Designation" className='form-control mb-3' type="text" name="designation" id="" required />
                            <textarea ref={register} placeholder='Project Detail' name="detail" id="" cols="30" rows="8" className="form-control mb-3" required />
                            <button className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;