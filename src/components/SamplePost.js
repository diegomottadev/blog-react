import React, { Component } from "react";
import ImgNotFound from '../assets/img/not_found.png';
import Moment from 'react-moment';
import 'moment/locale/es';
import Header from "./Header";
import Global from "../Global";
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
import swal from 'sweetalert';
class SamplePost extends Component {



    url = Global.url;
    state = {
        article: {},
        status: null
    };



    getArticle = () => {
        var id = this.props.match.params.id;
        axios.get(this.url + "article/" + id).then(res => {
            this.setState({
                article: res.data.article,
                status: 'success'
            });
        }).catch(err => {
            this.setState({
                article: false,
                status: 'success'
            });
        });
    }

deleteArticle = (id)=>{
    axios.delete(this.url+'article/'+id).then(res =>{
        this.setState({
            article: res.data.article,
            status: 'deleted'
        })
        swal(
            'Articulo elimado',
            'El articulo a sido eleiminado correctamente',
            'success'
        )
    })
}

    componentWillMount() {
        this.getArticle();
    }

    render() {

        if(this.state.status === 'deleted'){
            return(
                <Redirect to="/blog"></Redirect>
            );
        }

        var article = this.state.article;
        return (
            <div>
                <Header titulo="Sample - Post" />
                <article>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-10 mx-auto">
                                <article className="post-preview">


                                    {!article && this.state.status === "success" &&
                                        <h2 className="post-title">Articulo no existe</h2>
                                    }

                                    {!this.state.status == null &&
                                        <h2 className="post-title">Cargando...</h2>
                                    }


                                    {article &&
                                        <div>
                                            <h2 className="post-title">{article.title}</h2>

                                            <h3 className="post-subtitle">{article.content}</h3>
                                            <div>
                                                {article.image !== "" ? (
                                                        <img  src={this.url+'get-image/'+article.image} alt={this.title} className="rounded" width="400" height="300" />
                                                ) : (
                                                        <img src={ImgNotFound} className="rounded" alt="Not found" width="400" height="300" />
                                                    )}

                                            </div>
                                            <span className="caption text-muted">To go places and do things that have never been done before – that’s what living is all about.</span>

                                            <p>Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no man has gone before.</p>

                                            <p>As I stand out here in the wonders of the unknown at Hadley, I sort of realize there’s a fundamental truth to our nature, Man must explore, and this is exploration at its greatest.</p>

                                            <p className="post-meta">Posted by
                                            <a href="fake_url">Start Bootstrap</a>
                                            on <Moment locale="es" fromNow>{article.date}</Moment></p>

                                            <button onClick={()=>{
                                                this.deleteArticle(article._id)
                                            }} href="sampleurl" className="btn btn-danger">
                                                Eliminar            
                                            </button>

                                            <Link to={"/blog/edit/"+article._id} className="btn btn-warning">
                                                Editar       
                                            </Link>
                                        </div>


                                    }
                                </article>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        );
    }

}

export default SamplePost;
