import React, { Component } from 'react';

import {Link} from 'react-router-dom';

import './image-feature-row.styles.scss';

class ImageFeatureRow extends Component {

  getWindowSize() {
    return (window.innerWidth > 900
       ? 'desktop' 
       : (window.innerWidth <= 900 && window.innerWidth >= 600) 
         ? 'tablet' 
         : 'mobile');
  }

  render() {
    const { 
      reverse,
      images,
      title, 
      summary, 
      link,
      linkText,
      sourceFolder,
    } = this.props;
    const imgUrl = require.context(`../../assets/images`);
    let image = imgUrl(`./${sourceFolder}/${this.getWindowSize()}/${images[0]}`);

    return (
      <div className={`image-feature ${reverse ? 'reverse' : ''}`}>
        {/*<img src={
            image
          } 
          alt={title}
        />*/}
        <div className={`image-feature__image ${sourceFolder === 'homepage' ? 'special' : ''}`} style={{backgroundImage: `url(${image})`}}></div>
        <div className="image-feature__info-column">
          <hr></hr>
          <h1 className="image-feature__info-column__title">{title}</h1>
          <p className="image-feature__info-column__summary">{summary}</p>
          <Link className="image-feature__info-column__link" to={`/portfolio${link}`}>{linkText}</Link>
          <hr></hr>
        </div>
        
      </div>
    );
  }
}

export default ImageFeatureRow;