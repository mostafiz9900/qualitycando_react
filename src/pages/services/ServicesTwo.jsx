import React from 'react';
import { useParams } from 'react-router-dom';

const ServicesTwo = () => {
    const { id } = useParams();
    const data = {
        12: {
            title: 'Service',
            description: 'This is test Description for service two',
        },
        13: {
            title: 'Service',
            description: 'This is test Description for service Mostwafafoajfojsalfj',
        },
    };
    return (
        <div className="container">
            <h1>{data[id].title}</h1>
            <h1>{data[id].description}</h1>
        </div>
    );
};

export default ServicesTwo;
