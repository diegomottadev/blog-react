import React,{ Component } from "react";
import Article from "./Article";
import Header from "./Header"
class Content extends Component{


    
    state = {
      articles : [
        {title: "Man must explore, and this is exploration at its greatest", subtitle: "Problems look mighty small from 150 miles up"},
        {title: " I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.", subtitle: "Problems look mighty small from 150 miles up"},
        {title: "Science has not yet mastered prophecy", subtitle: "We predict too much for the next year and yet far too little for the next ten."},
        {title: "Failure is not an option", subtitle: " Many say exploration is part of our destiny, but it’s actually our duty to future generations."},
      ]
    }

    render(){
        return(
          <div>
          <Header titulo="Blog"/>
            <div className="container cabecera">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                {
                  this.state.articles.map((article,i)=> {

                    return(
                      <Article key={i} article={article}></Article>
                    );  
                    
                  })
                }

                
                
                <div className="clearfix">
                  <a className="btn btn-primary float-right" href="fake_url">Older Posts &rarr;</a>
                </div>
              </div>
            </div>
          </div>
          </div>
        );
    }
}
export default Content;