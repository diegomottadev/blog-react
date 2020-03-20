import React, { Component } from "react";
import {BrowserRouter,Route,Switch, Redirect} from 'react-router-dom';
import Error from "./components/Error";
import Contacto from "./components/Contacto";
import Content from "./components/Content";
import About from "./components/About";
import SamplePost from "./components/SamplePost";
import Main from './components/Main';
import Footer from './components/Footer';
import Home from './components/Home';
import Search from './components/Search';
import SideBar from "./components/SideBar";
class Router extends Component{

    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}  />
                    <Route exact path="/blog" component={Content}  />
                    <Route exact path="/sample-post" component={SamplePost}  />
                    <Route exact path="/contact" component={Contacto}  />
                    <Route exact path="/about" component={About}  />
                    <Route exact path="/blog/busqueda/:search" component={Search}  />
                    
                    <Route exact path="/redirect/:search" render={() =>(
                       (props)=>{
                           var search = props.match.params.search;
                           return (<Redirect to={'/blog/search'+search}/>)
                       }
                    )
                    }/>

                    <Route exact path="/sample-post/:id" render={() =>(
                        <h1>Pagina individual</h1>
                    )
                    }/>
                    <Route component={Error} />
                </Switch>
                <Main />
                <Footer/> 
            </BrowserRouter>
        );
    }

}

export default Router;