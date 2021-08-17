/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
import React from 'react';
import { Link } from 'react-router-dom';

const RightSideBar = () => {
    return (
        <div>
            <h2><Link to="/" >Home</Link></h2>
            <h2><Link to="/about" >About</Link></h2>
            <h2><Link to="/services" >Services</Link></h2>
            <h2><Link to="/contact" >Contact</Link></h2>
                          
        </div>
    );
}

export default RightSideBar;
