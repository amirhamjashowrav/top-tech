import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const ManageServices = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allServices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const deleteService = (_id) => {
        fetch(`http://localhost:5000/delete/${_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    const remaining = services.filter((service) => service._id !== _id);
                    toast.info('Deleted service Successfully');
                    alert('Deleted service successfully');
                    setServices(remaining);
                }
            })
            .catch((err) => {
                toast.error(err);
            });
    };

    return (
        <div className='service-list p-4'>
            <div className="all-services p-4">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Service Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {services.map((service) => (
                            <tr>
                                <td>{service.title}</td>
                                <td>{service.price}</td>
                                <td><FontAwesomeIcon onClick={() => deleteService(service._id)} style={{ fontSize: '18px', cursor: 'pointer', color: 'red' }} icon={faTrash} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageServices;