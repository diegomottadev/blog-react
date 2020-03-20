import React,{ Component } from "react";
import Header from "./Header"
import Articles from "./Articles"
class Search extends Component{

    render(){
        var busqueda = this.props.match.params.search
        return(
          <div>
          <Header titulo={' Search: ' + busqueda } />
            <div className="container cabecera">
              <Articles search={busqueda}/>
            </div>
          </div>
        );
    }
}
export default Search;