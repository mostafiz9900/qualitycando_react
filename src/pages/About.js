import React from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';
import SinglePage from '../components/pdf/single-page';
import AllPages from '../components/pdf/all-pages';

import './home/Home.css';
import './books/Book.css';
import '../styles.css';

const About = () => {
    // const [numPages, setNumPages] = useState(null);
    // const [pageNumber, setPageNumber] = useState(1);
    // console.log(setPageNumber);
    console.log('numPages');

    // function onDocumentLoadSuccess({ numPages2 }) {
    //     setNumPages(numPages2);
    // }
    return (
        <div className="container">
            <div className="app2">
                <h4>Single Page</h4>
                <SinglePage pdf="assets/pdf/JavaScript-Cookbook-2nd-Edition.pdf" />

                <hr />

                <h4>All Pages</h4>
                <div className="all-page-container">
                    <AllPages pdf="assets/pdf/JavaScript-Cookbook-2nd-Edition.pdf" />
                </div>

                <hr />

                <h4>Base 64 Single Page</h4>

                <hr />
            </div>
        </div>
    );
};

About.propTypes = {};

export default About;
