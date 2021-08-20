import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home2 from './home/Home2';
import Home3 from './home/Home3';

const Home = () => (
    <div className="container">
        <Router>
            <div className="row">
                <div className="col-md-10">
                    <Switch>
                        <Route exact path="/home2" component={Home2} />
                        <Route exact path="/home3" component={Home3} />
                        <div>
                            <h2>Titles</h2>
                            <h4>Subtitle</h4>
                            <div className="pra">
                                <p>
                                    This is a mistake. Here, we’ll refer to some time-honored
                                    typesetting conventions, with an emphasis on readability, and
                                    offer guidance on adapting them effectively for devices and
                                    screens. We’ll see that the ability to embed fonts with
                                    @font-face is not by itself a solution to all of our typographic
                                    challenges.
                                </p>
                            </div>
                        </div>
                    </Switch>
                </div>
                <div className="col-md-2">
                    <li>
                        <Link to="/home2">Service 1</Link>
                    </li>
                    <li>
                        <Link to="/home3">Service 3</Link>
                    </li>
                    <li>
                        <Link to="/">home</Link>
                    </li>
                </div>
            </div>
        </Router>
    </div>
);

export default Home;
