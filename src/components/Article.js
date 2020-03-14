import React,{ Component } from "react";

class Article extends Component{


    render(){
        const {title, subtitle} = this.props.article

        return(
            <div className="post-preview">
                  <a href="fake_url">
                    <h2 className="post-title">
                        {title}
                    </h2>
                    <h3 className="post-subtitle">
                      {subtitle}
                    </h3>
                  </a>
                  <p className="post-meta">Posted by
                    <a href="fake_url">Start Bootstrap</a>
                    on September 24, 2019</p>
            </div>
        );
    }

}

export default Article;