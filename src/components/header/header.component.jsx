import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/images/logo.svg';
import {ReactComponent as OpenMenu} from '../../assets/images/icons/hamburger.svg';
import {ReactComponent as CloseMenu} from '../../assets/images/icons/close.svg';

import './header.styles.scss';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Logo></Logo>
        <div className="header-links">
          <Link 
            to="/"
            activeClassName="active"
            exact
          >
            Home
          </Link>
          <Link 
            to="/portfolio"
            activeClassName="active"
          >
            Portfolio
          </Link>
          <Link 
            to="/contact"
            activeClassName="active"
          >
            Contact Me
          </Link>
        </div>
        <div className="header-links__menu">
          <OpenMenu className="header-links__menu__button--active"></OpenMenu>
          <CloseMenu className="header-links__menu__button"></CloseMenu>
        </div>
      </div>
    );
  }
}

export default Header;