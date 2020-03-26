import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Global from '../Global';
import Header from './Header';
import SimpleReactValidator from 'simple-react-validator';
import swal from 'sweetalert';

class EditArticle extends Component {

    // Create the ref
    url = Global.url;
    articleId = null;
    title = React.createRef();
    content = React.createRef();
    description = React.createRef();

    state = {
        article: {},
        status: null,
        seletedFile: null
    };

    fileChange = (event) => {
        this.setState({
            seletedFile: event.target.files[0]
        })
    }

    changeState = () => {
        this.setState({
            article: {
                title: this.title.current.value,
                content: this.content.current.value,
                image: this.state.article.imagen,
                date: new Date()
            }
        });
    }

    saveArticle = (e) => {
        e.preventDefault();
        this.changeState()

        if (this.validator.allValid) {



            axios.put(this.url + "article/"+this.articleId, this.state.article).then(res => {
                if (res.data.article) {
                    this.setState({
                        article: res.data.article,
                        status: "waiting"
                    });
                    if (this.state.seletedFile !== null) {
                        var id = this.state.article._id;
                        const formData = new FormData();
                        formData.append(
                            'file0',
                            this.state.seletedFile,
                            this.state.seletedFile.name
                        )
                        axios.post(this.url + 'upload-image/' + id, formData).then(res => {
                            if (res.data.article) {
                                this.setState({
                                    article: res.data.article,
                                    status: "success"
                                })
                            } else {
                                this.setState({
                                    article: res.data.article,
                                    status: "failed"
                                })
                            }

                        })
                    } else {
                        this.setState({
                            status: "success"
                        })
                    }

                    swal(
                        'Articulo creado',
                        'El articulo a sido creado correctamente',
                        'success'
                    )
                } else {
                    this.setState({
                        status: "failed"
                    })
                }


            })
        } else {

            this.setState({
                status: "failed"
            })

            this.validator.showMessages();
            this.forceUpdate();

        }
    }

    componentWillMount() {
        this.articleId = this.props.match.params.id
        this.getArticle(this.articleId );
        this.validator = new SimpleReactValidator({
            messages:{
                required: "Este campo es requerido"
   
            }
        });
    }

    getArticle=(id)=>{
        axios.get(this.url+'/article/'+id).then(res=>{
            this.setState({
                article: res.data.article,
                status: null
            })
        });
    }

    render() {
        if (this.state.status === 'success') {
            return (
                <Redirect to="/blog"></Redirect>
            )
        }
        var article = this.state.article;
        return (
            <div>
                <Header titulo="Create Article" />
                <section className="container cabecera">
                    <div className="row">
                        <h2 className="post-title">Editar articulos</h2>
                    </div>
                    {this.state.article.title &&
                        <div className="row">
                            <form className="form" onSubmit={this.saveArticle}>
                                <div className="form-group">
                                    <label htmlFor="title">Titulo</label>
                                    <input type="text" className="form-control" name="title" defaultValue={article.title} ref={this.title} onChange={this.changeState} />
                                    {this.validator.message('title', this.state.article.title, 'required|alpha_num_space')}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="title">Content</label>
                                    <textarea type="text" className="form-control" name="subtitle" defaultValue={article.content}  ref={this.content} onChange={this.changeState} />
                                    {this.validator.message('title', this.state.article.title, 'required')}
    
                                </div>
    
                                <div className="form-group">
                                    <label htmlFor="file0">Archivo</label>
                                    <input type="file" className="form-control" name="file0" onChange={this.fileChange} />
                                </div>
    
                                <input type='submit' value="Guardar" className="btn btn-success"></input>
                            </form>
                        </div>
                    }
                    {!this.state.article.title && 
                        <div className="row">
                            <h2 className="post-title">Cargando articulo</h2>
                        </div>
                    }
                </section>
            </div>

        );

    }
}
export default EditArticle;
