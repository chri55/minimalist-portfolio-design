import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/images/logo.svg';
import {ReactComponent as GitHub} from '../../assets/images/icons/github.svg';
import {ReactComponent as Twitter} from '../../assets/images/icons/twitter.svg';
import {ReactComponent as LinkedIn} from '../../assets/images/icons/linkedin.svg';


import './footer.styles.scss';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Logo></Logo>
        <div className="footer__links">
          <Link to="/">Home</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact Me</Link>
        </div>
        <div className="footer__media-links">
          <GitHub></GitHub>
          <Twitter></Twitter>
          <LinkedIn></LinkedIn>
        </div>
      </div>
    );
  }
}

export default Footer;