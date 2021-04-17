import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faUserPlus, faHdd, faShoppingCart, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import logo from '../../../images/logo.png';
import './Sidebar.css';
import { useHistory } from 'react-router-dom';

const Sidebar = ({ navigation, setNavigation, isAdmin }) => {
    const history = useHistory();
    return (
        <div className='col-md-2 sidebar text-center p-0'>
            <div className="container">
                <img className='my-4' onClick={() => history.push('/')} src={logo} width='150' alt="" />
                <ul lassName="list-unstyled text-left ml-4 mt-4">
                    {
                        !isAdmin ?
                            <>
                                <li style={{ color: navigation === 'Order' && "#009444" }} className='mb-3' onClick={() => setNavigation('Order')}>
                                    <FontAwesomeIcon className='mr-2' style={{ fontSize: '18px' }} icon={faShoppingCart} /> <span>Order</span>
                                </li>
                                <li style={{ color: navigation === 'Service list' && "#009444" }} className='mb-3' onClick={() => setNavigation('Service list')}>
                                    <FontAwesomeIcon className='mr-2' style={{ fontSize: '18px' }} icon={faHdd} /> <span>Service list</span>
                                </li>
                                <li style={{ color: navigation === 'Review' && "#009444" }} className='mb-3' onClick={() => setNavigation('Review')}>
                                    <FontAwesomeIcon className='mr-2' style={{ fontSize: '18px' }} icon={faCommentDots} /> <span>Review</span>
                                </li>
                            </>
                            :
                            <>
                                <li style={{ color: navigation === 'Admin Service list' && "#009444" }} className='mb-3' onClick={() => setNavigation('Admin Service list')}>
                                    <FontAwesomeIcon className='mr-2' style={{ fontSize: '18px' }} icon={faHdd} /> <span>Service list</span>
                                </li>
                                <li style={{ color: navigation === 'Add Service' && "#009444" }} className='mb-3' onClick={() => setNavigation('Add Service')}>
                                    <FontAwesomeIcon className='mr-2' style={{ fontSize: '18px' }} icon={faPlus} /> <span>Add Service</span>
                                </li>
                                <li style={{ color: navigation === 'Make Admin' && "#009444" }} className='mb-3' onClick={() => setNavigation('Make Admin')}>
                                    <FontAwesomeIcon className='mr-2' style={{ fontSize: '18px' }} icon={faUserPlus} /> <span>Make Admin</span>
                                </li>
                            </>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;