import React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import '../home/Home.css';
import ServicesTwo from './ServicesTwo';

const Services = () => {
    const { url, path } = useRouteMatch();
    console.log(path);
    return (
        <div className="container">
            {/* <Route path={path}> */}
            <h1>Service page </h1>
            <ul>
                <li>
                    <Link to={`${url}/12`}>Service 1</Link>
                </li>
                <li>
                    <Link to={`${url}/13`}>Service 3</Link>
                </li>
            </ul>
            {/* </Route> */}
            <Switch>
                <Route path={`${path}/:id`}>
                    <ServicesTwo />
                    <h1>Service page </h1>
                </Route>
            </Switch>
        </div>
    );
};

Services.propTypes = {};

export default Services;
