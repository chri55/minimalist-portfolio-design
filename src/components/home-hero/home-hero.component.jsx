import React, { Component } from 'react';

import {ReactComponent as DownArrow} from '../../assets/images/icons/down-arrows.svg';

import './home-hero.styles.scss';

class HomeHero extends Component {
  getScreenWidth() {
    return (window.innerWidth > 900
       ? 'desktop' 
       : (window.innerWidth <= 900 && window.innerWidth >= 600) 
         ? 'tablet' 
         : 'mobile');
  }

  render() {
    let image = require('../../assets/images/homepage/desktop/image-homepage-hero.jpg');
    return (
      <div 
        style={{
          backgroundImage: `${this.getScreenWidth() !== 'mobile' ? 'url(' + image + ')' : 'none'}`,
          backgroundSize:'cover',
          backgroundPosition: 'center',
        }}
        className="home-hero"
      >
        { this.getScreenWidth() === 'mobile' &&
          <img 
            src={image} 
            alt="Alex Spencer Home"
            className="home-hero__image"
          />
        }
        <div className="home-hero__intro">
          <h1 className="home-hero__intro--header">Hey, I’m Alex Spencer and I love building beautiful websites</h1>
          <div className="home-hero__intro--button"> 
            <DownArrow></DownArrow>
            About Me
          </div>
        </div>

      </div>
    );
  }
}

export default HomeHero;