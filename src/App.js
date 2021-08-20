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
import Home2 from './pages/home/Home2';
import Home3 from './pages/home/Home3';
import Services from './pages/services/Services';

function App() {
    return (
        <Router>
            <div>
                <Navbar />  
                <Switch>
                    <Route  path="/" component={Home} />                       
                           
                    <Route exact path="/about" component={About} />
                    <Route  path="/services" >
                        <Services/>
                    </Route>
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/home2" component={Home2} />
                    <Route exact path="/home3" component={Home3} />
                    <Route component={Error} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
