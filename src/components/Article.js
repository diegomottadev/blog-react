import React,{ Component } from "react";
import ImgNotFound from '../assets/img/not_found.png';
import Moment from 'react-moment';
import 'moment/locale/es';
import {Link} from 'react-router-dom';
class Article extends Component{


    render(){
        const {_id, title, subtitle,img,date} = this.props.article

        return(
          <article className="post-preview">
           
            <Link to={'/sample-post/'+ _id}>
              <h2 className="post-title">
                  {title}
              </h2>
              <h3 className="post-subtitle">
                {subtitle}
              </h3>
              { img !== "" ? (
                <img src={img} className="rounded" alt="Cinque Terre" width="400" height="300" /> 
              ):(
                <img src={ImgNotFound} className="rounded" alt="Not found" width="400" height="300" /> 
              )
              
              }
              
            </Link>
            <p className="post-meta">Posted by
              <a href="fake_url">Start Bootstrap</a>
              on <Moment locale="es" fromNow>{date}</Moment></p>
            
            </article>
        );
    }

}

export default Article;