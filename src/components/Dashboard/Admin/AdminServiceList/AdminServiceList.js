import React, { useEffect, useState } from 'react';
import './AdminServiceList.css'

const AdminServiceList = () => {
    const [orders, setOrders] = useState([])

    const status = ['Pending', 'On Going', 'Done']
    useEffect(() => {
        fetch('http://localhost:5000/allOrders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const handleChange = (e) => {
        const data = { id: e.target.name, status: e.target.value }
        fetch('http://localhost:5000/updateOrder', {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
    }

    return (
        <div className='service-list p-4'>
            <div className="all-services p-4">
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>Name</th>
                            <th scope='col'>Email ID</th>
                            <th scope='col'>Service</th>
                            <th scope='col'>price</th>
                            <th scope='col'>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.length === 0
                                ?
                                <div className="spinner-border text-success text-center" style={{ width: "3rem", height: "3rem" }} role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                :
                                orders.map(order => <tr key={order._id} scope='row'>
                                    <td>{order.shipment.name}</td>
                                    <td>{order.shipment.email}</td>
                                    <td>{order.shipment.service}</td>
                                    <td>{order.shipment.price}</td>
                                    <td>
                                        <select className='selectDropdown' onChange={handleChange} name={order._id} id="">
                                            <option value={order.status}>{order.status}</option>
                                            {
                                                status.filter(sts => order.status !== sts).map(sts => <option key={sts} value={sts}>{sts}</option>)
                                            }
                                        </select>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminServiceList;