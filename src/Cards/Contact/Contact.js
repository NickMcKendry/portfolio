import React, { Component } from 'react';
import './Contact.css';
import axios from 'axios';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      success: ''
    }
  }

  setName(e) {
    this.setState({ name: e.target.value });
    console.log(this.state.name);
  }

  setEmail(e) {
    this.setState({ email: e.target.value });
    console.log(this.state.email);
  }

  setMessage(e) {
    this.setState({ message: e.target.value });
    console.log(this.state.message);
  }

  sendEmail(e) {
    let contact = {
      email: this.state.email,
      name: this.state.name,
      message: this.state.message
    };
    e.preventDefault();
    let promiseObj = axios.post('https://calm-inlet-55567.herokuapp.com/email', contact)
    promiseObj.then((data) => {
      console.log(data);
      if(data.data.message === "Success") {
        this.setState({ success: true })
      } else {
        this.setState({ success: false })
      }
    })
  }

  render() {
    return (
      <div className="main6 has-after-border">
        <div className="container text-center">
          <h1 className="section-header">Contact Me</h1>
          <p className="subtitle">Feel free to contact me about any devlopment or design work you have, email or phone work best! Thank you!</p>
          <form id="contact-form" class="contact-form">
            <input type="hidden" name="form-name" value="contactForm" />
            <div className="row">
              <div className="col-sm-6">
                <label for="username">
                  <span>Name</span>
                  <input type="text" name="name" id="username" placeholder="Enter your full name" onChange={this.setName.bind(this)} required/>
                </label>
              </div>
              <div className="col-sm-6">
                <label for="email">
                  <span>Email</span>
                  <input type="email" name="email" id="email" placeholder="Enter a valid email address" onChange={this.setEmail.bind(this)} required/>
                </label>
              </div>
              <div className="col-sm-12">
                <label for="message">
                  <span>Message</span>
                  <textarea name="message" id="message" placeholder="How can I help you?" onChange={this.setMessage.bind(this)} required/>
                </label>
              </div>
              <div className="col-sm-4 col-sm-offset-4 submit-button">
                  <button type="submit" onClick={this.sendEmail.bind(this)}>Send Now</button>
                  <i className="fa fa-send"></i>
              </div>
            </div>
          </form>
          <div className="contact-details">
            <strong>or</strong>
            <a href="mailto:nickmckendry@gmail.com" class="personal-email" title="Personal Email">nickmckendry@gmail.com</a>
            <br />
            <a href="tel:(720)2248814" class="phone-number" title="Phone Number">+(720) 224 8814</a>
          </div>
        </div>
      </div>
    );
  };
};
