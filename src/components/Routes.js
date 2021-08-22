import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Error from '../pages/Error';

import Services from '../pages/Services';

const Routes = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/contact" component={Contact} />
            <Route component={Error} />
        </Switch>
    </div>
);

export default Routes;
