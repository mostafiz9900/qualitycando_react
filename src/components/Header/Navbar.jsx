import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Navbar = () => (
    <div
        style={{
            background: '#0392FD',
            position: 'sticky',
            top: 0,
        }}
    >
        <nav className="navbar navbar-expand-lg navbar-dark  bg-dark text-white shadow ">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    QualityCanDo
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                activeClassName="nav-link--active"
                                aria-current="page"
                                activeStyle={{ fontWeight: 'bold' }}
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                activeClassName="nav-link--active text-white"
                                aria-current="page"
                                activeStyle={{ fontWeight: 'bold' }}
                                to="/about"
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                activeClassName="nav-link--active text-white"
                                aria-current="page"
                                activeStyle={{ fontWeight: 'bold' }}
                                to="/services"
                            >
                                Services
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                activeClassName="nav-link--active  text-white"
                                aria-current="page"
                                activeStyle={{ fontWeight: 'bold' }}
                                to="/contact"
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
);

export default Navbar;
