import React, { Component  } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Global from '../Global';
import Header from './Header';

class CreateArticle extends Component {

        
    // Create the ref
    url = Global.url;
    title = React.createRef();
    content = React.createRef();
    description= React.createRef();

    state = {
        article : {},
        status: null,
        seletedFile: null
    };

    fileChange =(event)=>{
        this.setState({
            seletedFile: event.target.files[0]
        })
    }
    
    changeState = ()=>{
        this.setState({
            article:{
                title: this.title.current.value,
                content: this.content.current.value,
                image: "",
                date: new Date()
            }
        });
     } 

    saveArticle = (e) =>{
        e.preventDefault();
        this.changeState()
       
        axios.post(this.url+"save",this.state.article).then(res =>{
            if(res.data.article){
                this.setState({
                    article: res.data.article,
                    status: "waiting"
                });
                if (this.state.seletedFile!== null){
                    var id = this.state.article._id;
                    const formData = new FormData();
                    formData.append(
                        'file0',
                        this.state.seletedFile, 
                        this.state.seletedFile.name
                    )
                    axios.post(this.url+ 'upload-image/'+ id , formData).then(res => {
                        if(res.data.article){
                            this.setState({
                                article: res.data.article,
                                status: "success"
                            })
                        }else{
                            this.setState({
                                article: res.data.article,
                                status: "failed"
                            })
                        }

                    })
                }else{
                    this.setState({
                        status: "success"
                    })
                }
            }else{
                this.setState({
                    status: "failed"
                })
            }


        })
    }



    render() {
            if (this.state.status === 'success'){
                return (
                    <Redirect to="/blog"></Redirect>
                )
            }

        return (
            <div>
                <Header titulo="Create Article" />
                    <section className="container cabecera">
                            <div className="row">
                            <h2 className="post-title">Crear articulos</h2>
                            </div>
                            <div className="row">
                                <form className="form" onSubmit={this.saveArticle}>
                                    <div className="form-group">
                                        <label htmlFor="title">Titulo</label>
                                        <input type="text" className="form-control" name="title" ref={this.title} onChange={this.changeState}/>
                                    </div>
                                    <div className="form-group">
                                    <label htmlFor="title">Content</label>
                                        <textarea type="text" className="form-control" name="subtitle" ref={this.content} onChange={this.changeState}/>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="file0">Archivo</label>
                                        <input type="file" className="form-control" name="file0" onChange={this.fileChange}/>
                                    </div>

                                    <input type='submit' value="Guardar" className="btn btn-success"></input>
                                </form>
                            </div>
                    </section>
            </div>

        );

    }
}
export default CreateArticle;
