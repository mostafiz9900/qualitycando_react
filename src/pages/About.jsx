/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import React from 'react';
import { HashRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './home/Home.css';
import Home2 from './home/Home2';
import Home3 from './home/Home3';
import './books/Book.css';

const About = () => (
    <div className="container rootTop">
        <Router>
            <div className="row">
                <div className="col-md-9 aboutBody">
                    <Switch>
                        <Route path="/home2" component={Home2} />
                        <Route path="/home3" component={Home3} />
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
                                <p>
                                    This is a mistake. Here, we’ll refer to some time-honored
                                    typesetting conventions, with an emphasis on readability, and
                                    offer guidance on adapting them effectively for devices and
                                    screens. We’ll see that the ability to embed fonts with
                                    @font-face is not by itself a solution to all of our typographic
                                    challenges.
                                </p>
                                <p>
                                    This is a mistake. Here, we’ll refer to some time-honored
                                    typesetting conventions, with an emphasis on readability, and
                                    offer guidance on adapting them effectively for devices and
                                    screens. We’ll see that the ability to embed fonts with
                                    @font-face is not by itself a solution to all of our typographic
                                    challenges.
                                </p>
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
                <div className="col-md-3 sideBarScroll">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                >
                                    Bangla
                                </button>
                            </h2>
                            <div
                                id="collapseOne"
                                className="accordion-collapse collapse show"
                                aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <Link
                                                className="nav-link active"
                                                aria-current="page"
                                                to="/home2"
                                            >
                                                About 2
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/home3">
                                                About 3
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo"
                                >
                                    English
                                </button>
                            </h2>
                            <div
                                id="collapseTwo"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <Link
                                                className="nav-link active"
                                                aria-current="page"
                                                to="/home2"
                                            >
                                                About 2
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/home3">
                                                About 3
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree"
                                >
                                    English
                                </button>
                            </h2>
                            <div
                                id="collapseThree"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <Link
                                                className="nav-link active"
                                                aria-current="page"
                                                to="/home2"
                                            >
                                                About 2
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/home3">
                                                About 3
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree"
                                >
                                    English
                                </button>
                            </h2>
                            <div
                                id="collapseThree"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <Link
                                                className="nav-link active"
                                                aria-current="page"
                                                to="/home2"
                                            >
                                                About 2
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/home3">
                                                About 3
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree"
                                >
                                    English
                                </button>
                            </h2>
                            <div
                                id="collapseThree"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <Link
                                                className="nav-link active"
                                                aria-current="page"
                                                to="/home2"
                                            >
                                                About 2
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/home3">
                                                About 3
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree"
                                >
                                    English
                                </button>
                            </h2>
                            <div
                                id="collapseThree"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <Link
                                                className="nav-link active"
                                                aria-current="page"
                                                to="/home2"
                                            >
                                                About 2
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/home3">
                                                About 3
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree"
                                >
                                    English
                                </button>
                            </h2>
                            <div
                                id="collapseThree"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <Link
                                                className="nav-link active"
                                                aria-current="page"
                                                to="/home2"
                                            >
                                                About 2
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/home3">
                                                About 3
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree"
                                >
                                    English
                                </button>
                            </h2>
                            <div
                                id="collapseThree"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <Link
                                                className="nav-link active"
                                                aria-current="page"
                                                to="/home2"
                                            >
                                                About 2
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/home3">
                                                About 3
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree"
                                >
                                    English
                                </button>
                            </h2>
                            <div
                                id="collapseThree"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <Link
                                                className="nav-link active"
                                                aria-current="page"
                                                to="/home2"
                                            >
                                                About 2
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/home3">
                                                About 3
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree"
                                >
                                    English
                                </button>
                            </h2>
                            <div
                                id="collapseThree"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <Link
                                                className="nav-link active"
                                                aria-current="page"
                                                to="/home2"
                                            >
                                                About 2
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/home3">
                                                About 3
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree"
                                >
                                    English
                                </button>
                            </h2>
                            <div
                                id="collapseThree"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <Link
                                                className="nav-link active"
                                                aria-current="page"
                                                to="/home2"
                                            >
                                                About 2
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/home3">
                                                About 3
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree"
                                >
                                    English
                                </button>
                            </h2>
                            <div
                                id="collapseThree"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <Link
                                                className="nav-link active"
                                                aria-current="page"
                                                to="/home2"
                                            >
                                                About 2
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/home3">
                                                About 3
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree"
                                >
                                    English
                                </button>
                            </h2>
                            <div
                                id="collapseThree"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <Link
                                                className="nav-link active"
                                                aria-current="page"
                                                to="/home2"
                                            >
                                                About 2
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/home3">
                                                About 3
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    </div>
);

About.propTypes = {};

export default About;
