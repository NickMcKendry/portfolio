import React, { Component } from 'react';
import './Contact.css';

export default class Contact extends Component {
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
                  <input type="text" name="name" id="username" placeholder="Enter your full name" required/>
                </label>
              </div>
              <div className="col-sm-6">
                <label for="email">
                  <span>Email</span>
                  <input type="email" name="email" id="email" placeholder="Enter a valid email address" required/>
                </label>
              </div>
              <div className="col-sm-12">
                <label for="message">
                  <span>Message</span>
                  <textarea name="message" id="message" placeholder="How can I help you?" required/>
                </label>
              </div>
              <div className="col-sm-4 col-sm-offset-4 submit-button">
                  <button type="submit">Send Now</button>
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
