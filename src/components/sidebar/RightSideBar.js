/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
import React from 'react';
import { Link } from 'react-router-dom';

const RightSideBar = () => {
    return (
        <div>
            <h2><Link to="/" >Home</Link></h2>
            <h2><Link to="/home2" >Home2</Link></h2>
            <h2><Link to="/home3" >Home3</Link></h2>
                          
        </div>
    );
}

export default RightSideBar;
