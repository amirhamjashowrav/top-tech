import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container-fluid">
                <Link to="/home">
                    <img className="me-5 ms-5" style={{ width: "160px" }} src={logo} alt='logo' />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <Link className="nav-link mr-5 me-5 text-white fw-bolder" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-5 me-5 text-white fw-bolder" to="/about">About us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-5 me-5 text-white fw-bolder" to="/projects">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-5 me-5 text-white fw-bolder" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-5 me-5 text-white fw-bolder" to="/admin">Admin</Link>
                        </li>
                        <form className="d-flex">
                            <Link to="/login"><button className="btn btn-light fw-bolder me-5" type="submit">Log in</button></Link>
                        </form>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;