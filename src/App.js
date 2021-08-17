/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Header/Navbar';
import RightSideBar from './components/sidebar/RightSideBar';
import Home from './pages';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Footer from './pages/footer/Footer';
import Services from './pages/Services';

function App() {
    return (
        <BrowserRouter>
            <div>
                <Navbar />
                <div  className="row">
                <div className="col-md-10">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/services" component={Services} />
                    <Route exact path="/contact" component={Contact} />
                    <Route component={Error} />
                </Switch>

                </div>
                <div className="col-md-2">
                    <RightSideBar></RightSideBar>

                </div>
                </div>
               

                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
