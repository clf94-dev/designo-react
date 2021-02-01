import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Locations from './pages/Locations';
import Contact from './pages/Contact';
import WebDesign from './pages/WebDesign';
import AppDesign from './pages/AppDesign';
import GraphicDesign from './pages/GraphicDesign';
import Navbar from './Navbar';
import Footer from './Footer';

import './styles/App.scss';


function App(){
    return(
<div>
    <Router>
        <Navbar/>
        <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/home' component={Home}></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/locations' component={Locations}></Route>
            <Route path='/contact' component={Contact}></Route>
            <Route path='/webdesign' component={WebDesign}></Route>
            <Route path='/appdesign' component={AppDesign}></Route>
            <Route path='/graphicdesign' component={GraphicDesign}></Route>
        </Switch>
        <Footer/>
    </Router>
</div>
    )
}
export default App;