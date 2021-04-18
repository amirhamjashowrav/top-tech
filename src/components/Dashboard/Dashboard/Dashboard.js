import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode'
import './Dashboard.css'
import Sidebar from '../../Shared/Sidebar/Sidebar';
import Topbar from '../../Shared/Topbar/Topbar';
import AddService from '../Admin/AddService/AddService';
import AdminServiceList from '../Admin/AdminServiceList/AdminServiceList';
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';
import Order from '../User/Order/Order';
import OrderDetail from '../User/OrderDetail/OrderDetail';
import Review from '../User/Review/Review';
import ManageServices from '../Admin/ManageServices/ManageServices';

const Dashboard = () => {
    
    const decodedToken = jwt_decode(sessionStorage.getItem('token'));
    const { email, picture } = decodedToken
    const [isAdmin, setIsAdmin] = useState(false)
    const [navigation, setNavigation] = useState(isAdmin ? 'Admin Service list' : 'Order');

    useEffect(() => {
        fetch('https://limitless-woodland-17961.herokuapp.com/allAdmins/' + email)
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data)
                if (data) {
                    setNavigation("Admin Service list")
                }
            })
    }, [email])

    return (
        <section className='CustomerDashboard'>
            <div className='row'>
                <Sidebar navigation={navigation} setNavigation={setNavigation} isAdmin={isAdmin}></Sidebar>
                <div className="col-md-10 p-0">
                    <Topbar />
                    {
                        isAdmin ?
                            <>
                                {navigation === 'Add Service' && <AddService />}
                                {navigation === 'Admin Service list' && <AdminServiceList />}
                                {navigation === 'Make Admin' && <MakeAdmin />}
                                {navigation === 'Manage Services' && <ManageServices></ManageServices>}
                            </>
                            :
                            <>
                                {navigation === 'Order' && <Order></Order>}
                                {navigation === 'Service list' && <OrderDetail></OrderDetail>}
                                {navigation === 'Review' && <Review />}
                            </>
                    }
                </div>

            </div>
        </section>
    );
};

export default Dashboard;