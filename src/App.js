/* eslint-disable import/extensions */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Header/Navbar';
// eslint-disable-next-line import/no-named-as-default
import Home from './pages';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Footer from './pages/footer/Footer';
import Services from './pages/services/Services';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import RightSideBar from './components/sidebar/RightSideBar';
import './pages/books/Book.css';
import Home2 from './pages/home/Home2';
import Home3 from './pages/home/Home3';


function App() {
    return (
        <Router>
            <div>
                <Navbar /> 
                <div className="container">
                <div className="row ">
                <div className="col-md-9 mainBody">
                    <Switch>
                        <Route exact path="/" component={Home} />                    
                            
                        <Route  path="/about" component={About} />                  
                        <Route  path="/services" >
                        <Services/>
                        </Route>
                        <Route exact path="/contact" component={Contact} />                   
                        <Route exact path="/home2" component={Home2} />                   
                        <Route exact path="/home3" component={Home3} />                   
                        <Route component={Error} />
                    </Switch>   
                </div>
                <div className="col-md-3 aboutBody">
                <RightSideBar/>
                </div>
                </div>            
                
               
            </div>
            <Footer />
                </div>   
               
        </Router>
    );
}

export default App;
