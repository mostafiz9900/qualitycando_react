import React from 'react';

const Home = () => (
    <div className="container">
        <h2>Name</h2>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img
                        className="d-block w-100"
                        src="assets/images/banner/banner1.jpg"
                        alt="First slide"
                    />
                </div>
                <div className="carousel-item">
                    <img
                        className="d-block w-100"
                        src="assets/images/banner/banner2.jpg"
                        alt="Second slide"
                    />
                </div>
                <div className="carousel-item">
                    <img
                        className="d-block w-100"
                        src="assets/images/banner/banner3.jpg"
                        alt="Third slide"
                    />
                </div>
            </div>
            <a
                className="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
            </a>
            <a
                className="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
            </a>
        </div>
        <h2>Titles</h2>
        <h4>Subtitle</h4>
        <div className="pra">
            <p>
                This is a mistake. Here, we’ll refer to some time-honored typesetting conventions,
                with an emphasis on readability, and offer guidance on adapting them effectively for
                devices and screens. We’ll see that the ability to embed fonts with @font-face is
                not by itself a solution to all of our typographic challenges.
            </p>
        </div>
    </div>
);

export default Home;
