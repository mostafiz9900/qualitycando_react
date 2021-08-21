/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Header/Navbar';
import Home from './pages';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Footer from './pages/footer/Footer';
import Services from './pages/services/Services';

function App() {
    return (
        <Router>
            <div>
                <Navbar />  
                <Switch>
                    <Route exact path="/" component={Home} />                       
                           
                    <Route  path="/about" component={About} />                  
                    <Route  path="/services" >
                        <Services/>
                    </Route>
                    <Route exact path="/contact" component={Contact} />                   
                    <Route component={Error} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
