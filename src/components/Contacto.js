import React, { Component } from "react";
import Header from "./Header";
class Contacto extends Component {

    render() {
        return (
            <div>
                <Header titulo="Contacto"></Header>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
                            <form name="sentMessage" id="contactForm" novalidate>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls">
                                        <div className="form-group floating-label-form-group controls">
                                            <label>Name</label>
                                            {/*<input type="text" className="form-control" placeholder="Name" id="name">*/}
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls">
                                        <label>Email Address</label>
                                        {/*<input type="email" className="form-control" placeholder="Email Address" id="email" >*/}
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group col-xs-12 floating-label-form-group controls">
                                        <label>Phone Number</label>
                                        {/*<input type="tel" className="form-control" placeholder="Phone Number" id="phone" >*/}
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls">
                                        <label>Message</label>
                                        <textarea rows="5" className="form-control" placeholder="Message" id="message"></textarea>
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>

                                <div id="success"></div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary" id="sendMessageButton">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Contacto;