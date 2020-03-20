import React,{ Component } from "react";
import Header from "./Header"
import Articles from "./Articles"

class Content extends Component{

    render(){
        return(
          <div>
            <Header titulo="Blog"/>
            <Articles />
           
          </div>
          
        );
    }
}
export default Content;