import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/images/logo.svg';
import {ReactComponent as OpenMenu} from '../../assets/images/icons/hamburger.svg';
import {ReactComponent as CloseMenu} from '../../assets/images/icons/close.svg';

import './header.styles.scss';

class Header extends Component {
  toggleMenu(e) {
    e && e.preventDefault();
    document.querySelectorAll('.menu__button')
    .forEach(e => {
        e.classList.toggle('active');
    });
    document.querySelector('.header-links').classList.toggle('menu-open');
  }

  render() {
    return (
      <div className="header" id="header">
        <Logo></Logo>
        <div className="header-links">
          <Link 
            className="header-links__link"
            to="/"
            activeClassName="active"
            onClick={(e) => this.toggleMenu()}
            exact
          >
            Home
          </Link>
          <Link 
            className="header-links__link"
            to="/portfolio#header"
            activeClassName="active"
            onClick={(e) => this.toggleMenu()}

          >
            Portfolio
          </Link>
          <Link 
            className="header-links__link"
            to="/contact"
            activeClassName="active"
            onClick={(e) => this.toggleMenu()}

          >
            Contact Me
          </Link>
        </div>
        <div className="menu">
          <OpenMenu onClick={(e) => this.toggleMenu(e)} className="menu__button active"></OpenMenu>
          <CloseMenu onClick={(e) => this.toggleMenu(e)} className="menu__button"></CloseMenu>
        </div>
      </div>
    );
  }
}

export default Header;