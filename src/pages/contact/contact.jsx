import React, { Component } from 'react';

import {ReactComponent as GitHub} from '../../assets/images/icons/github.svg';
import {ReactComponent as Twitter} from '../../assets/images/icons/twitter.svg';
import {ReactComponent as LinkedIn} from '../../assets/images/icons/linkedin.svg';

import './contact.scss';

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <hr/>
        <div className="contact__description">
          <h1 className="contact__description--title">Get in Touch</h1>
          <div className="contact__description--body">
            <p>
              I’d love to hear about what you’re working on and how I could help. I’m currently looking for a new role and am open to a wide range of opportunities. My preference would be to find a position in a company in London. But I’m also happy to hear about opportunites that don’t fit that description. I’m a hard-working and positive person who will always approach each task with a sense of purpose and attention to detail. Please do feel free to check out my online profiles below and get in touch using the form.
            </p>
            <div className="contact__description--media-links">
              <GitHub></GitHub>
              <Twitter></Twitter>
              <LinkedIn></LinkedIn>
            </div>

          </div>
        </div>
        <hr/>
        <div className="contact__description">
          <h1 className="contact__description--title">Contact Me</h1>
          <div className="contact__description--body">
            <form>
              <label for="name">Name</label>
              <input type="text" placeholder="Jane Appleseed" id="name"></input>
              <label for="email">Email Address</label>
              <input type="text" placeholder="email@example.com" id="email"></input>
              <label for="message">Message</label>
              <textarea placeholder="How can I help?" id="message"></textarea>
              <div className="send-message">Send Message</div>
            </form>

          </div>
        </div>
      </div>
    );
  }
}

export default Contact;