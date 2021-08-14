import React from 'react';
import './Footer.css';

const Footer = () => (
    <div className="footer bg-dark text-white">
        <div className="pt-4">
            <a href="http://github.com/mostafiz9900">
                <i className="fab faba fa-github" />{' '}
            </a>
            <a href="http://facebook.com/mostafiz9900">
                <i className="fab faba fa-facebook" />
            </a>
            <a href="https://www.linkedin.com/in/mostafiz9900/">
                <i className="fab faba fa-linkedin" />
            </a>
        </div>
        <p className="text-white pb-4">
            &copy; 2021. All Rights Reserve, Made With <span className="love">❤</span>{' '}
            <a className="text-white" href="https://facebook.com/mostafiz9900">
                Mostafizur Rahman
            </a>
        </p>
    </div>
);

export default Footer;
