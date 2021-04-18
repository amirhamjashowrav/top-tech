import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'

import './AddService.css'
import { useForm } from 'react-hook-form';

const AddService = () => {
    const [file, setFile] = useState(null)
    const { register, handleSubmit } = useForm()
    const onSubmit = data => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('title', data.title)
        formData.append('price', data.price)
        formData.append('description', data.description)

        fetch('https://limitless-woodland-17961.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('Service Added Successfully')
                }
            })
    }
    return (
        <div className='AddService p-5'>
            <form onSubmit={handleSubmit(onSubmit)} className='w-100'>
                <div className="service-form row p-4">
                    <div className="col-md-6">
                        <p className='m-0'>Service Title</p>
                        <input required ref={register} className='form-control mb-4' name='title' type="text" />
                        <p className='m-0'>Price</p>
                        <input required ref={register} className='form-control mb-4' name='price' type="text" />
                        <p className='m-0'>Description</p>
                        <textarea required ref={register} className='form-control' name="description" id="" cols="30" rows="5"></textarea>
                    </div>
                    <div className="col-md-6">
                        <p className='m-0'>Icon</p>
                        <input onChange={e => setFile(e.target.files[0])} className='upload-file-inp' type="file" name="file" id="uploadImg" />
                        <label htmlFor="uploadImg" className='upload-file-btn text-center'><FontAwesomeIcon icon={faCloudUploadAlt} /> Upload image</label>
                    </div>
                </div>
                <button className="btn btn-success mt-3 px-4">Submit</button>
            </form>
        </div>
    );
};

export default AddService;