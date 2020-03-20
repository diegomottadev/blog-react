import React, { Component } from 'react';
import axios from 'axios';
import Article from './Article';
import Global from '../Global';
import SideBar from './SideBar';
class Articles extends Component {

    url = Global.url;
    state = {
        articles: [],
        statu: null
    }

    componentWillMount() {
        var home = this.props.home;
        var search = this.props.search;
        console.log(home);
        if (home === 'true') {
            this.getLastArticles();
        } else if (search && search != null && search != undefined) {
            this.getArticlesBySearch(search);
        } else {
            this.getArticles();
        }

    }

    getArticles = () => {
        axios.get(this.url + "articles").then(res => {
            this.setState({
                articles: res.data.articles,
                status: 'success'
            });
        });
    }
    getLastArticles = () => {
        axios.get(this.url + "articles/last").then(res => {
            this.setState({
                articles: res.data.articles,
                status: 'success'
            });
        }).catch(err => {
            this.setState({
                articles: [],
                status: 'success'
            });
        });
    }

    getArticlesBySearch = (searched) => {
        axios.get(this.url + "search/" + searched).then(res => {
            if (res.data.article) {
                this.setState({
                    articles: res.data.articles,
                    status: 'success'
                });
            } else {
                this.setState({
                    articles: res.data.articles,
                    status: 'failed'
                });
            }

        });
    }
    render() {
        if (this.state.articles.length >= 1) {
            return (
                <section className="container">
                    <div className="row">
                        <div className="col-md-5 offset-md-2">
                            {
                                this.state.articles.map((article, i) => {
                                    return (
                                        <Article key={i} article={article}></Article>
                                    );
                                })
                            }
                            <div className="clearfix">
                                <a className="btn btn-primary float-right" href="fake_url">Older Posts &rarr;</a>
                            </div>
                            
                        </div>
                        <SideBar/>
                    </div>
                </section>
            )
        } else if (this.state.articles.length === 0 && this.state.statu === 'success') {

            return (
                <section className="container cabecera">
                    <div className="row">
                        <div className="post-preview">
                            <h2 className="post-title">
                                No hay articulos
                                        </h2>
                            <h3 className="post-subtitle">
                                Todavia no hay contenidos en esta sección
                                        </h3>
                        </div>
                    </div>
                </section>)
        } else {
            return (
                <section className="container cabecera">
                    <div className="row">
                        <div className="post-preview">
                            <h2 className="post-title">
                                Cargando articulos ...
                                </h2>
                            <h3 className="post-subtitle">
                                Espere por favor
                                </h3>
                        </div>
                    </div>
                </section>
            )
        }

    }
}

export default Articles;