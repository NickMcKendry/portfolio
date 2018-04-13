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
    // https://calm-inlet-55567.herokuapp.com/
    let promiseObj = axios.post('http://localhost:3000/email', contact)
    promiseObj.then((data) => {
      console.log(data);
      if(data.data.message === "Success") {
        this.setState({ success: true, email: '', name: '', message: '' });
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
          <div className="contact-details">
            <a href="mailto:nickmckendry@gmail.com" class="personal-email" title="Personal Email">nickmckendry@gmail.com</a>
            <br />
            <a href="tel:(720)2248814" class="phone-number" title="Phone Number">+(720) 224 8814</a>
          </div>
        </div>
      </div>
    );
  };
};
