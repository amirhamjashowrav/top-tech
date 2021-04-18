import React from 'react';
import { useForm } from 'react-hook-form';
import './MakeAdmin.css'

const MakeAdmin = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = data => {
        fetch('https://limitless-woodland-17961.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert("Admin added successfully")
                }
            })
    }
    return (
        <div className='MakeAdmin p-4'>
            <div className="service-form p-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <p className="m-0">Email</p>
                    <input required ref={register} type="email" placeholder='john@gmail.com' name="email" id="" className="form-control" />
                    <button className="btn btn-success px-4">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;