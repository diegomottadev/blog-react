import React,{ Component } from "react";
import Header from "./Header";
import Articles from "./Articles";
class Home extends Component{
    render(){
        return(
          <div>
          <Header titulo="Home"/>
            <div className="container cabecera">
              <Articles home='true'/>
            </div>
          </div>
        );
    }
}
export default Home;