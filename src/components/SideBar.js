import React,{ Component } from "react";
import { Redirect } from "react-router-dom";
class SideBar extends Component{

    searchRef = React.createRef();

    state = {
        search: null,
        redirect: false
    }

    redirectToSearch =(e) =>{
        e.preventDefault();

        this.setState({
            search: this.searchRef.current.value,
            redirect: true
        })
    }
    render(){

        if (this.state.redirect){
            return (
                <Redirect to={'/redirect/'+this.state.search}></Redirect>
            )
        }

        return(
            <aside>
              <div className="col-md-4">
                <h2>Buscador</h2>
                <p>Encuentra el articulo que buscas</p>
                <form onSubmit={this.redirectToSearch}>

                    <input type="text" name="search" ref={this.searchRef}/>
                    <input type="search" name="submit" value="buscar" className="btn btn-primary"></input>
                </form>
              </div>
              </aside>
        );
    }
}
export default SideBar;