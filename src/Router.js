import React, { Component } from "react";
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Error from "./components/Error";
import Contacto from "./components/Contacto";
import Content from "./components/Content";
import About from "./components/About";
import SamplePost from "./components/SamplePost";
import Main from './components/Main';
import Footer from './components/Footer';
class Router extends Component{

    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Content}  />
                    <Route exact path="/sample-post" component={SamplePost}  />
                    <Route exact path="/contact" component={Contacto}  />
                    <Route exact path="/about" component={About}  />
                    <Route component={Error} />
                </Switch>
                <Main />
                <Footer/> 
            </BrowserRouter>
        );
    }

}

export default Router;