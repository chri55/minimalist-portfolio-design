import React, { Component } from 'react';
import {
  Link, 
  useParams,
} from 'react-router-dom';

import pages from '../../assets/pages.json';

import './detail.scss';

let getScreenWidth = () => {
  return (document.innerWidth > 900
    ? 'dekstop' 
    : (document.innerWidth <= 900 && document.innerWidth > 600
      ? 'tablet' 
      : 'mobile'
    )
  )
}

let Detail = () => {
  const { portfolioItem } = useParams();
  const {
    title, 
    summary, 
    skills,
    tools,
    background,
    images,
    sourceFolder,
    next,
    nextName,
    previous,
    previousName,
  } = pages[portfolioItem];

  let imgUrl = require.context('../../assets/images');

  return (
    <div className="detail-view">
      <img 
        src={imgUrl(`./detail/${getScreenWidth()}/${images[0]}`)} 
        alt={`${title}`} 
        className="detail-view__hero"
      />
      <div className="detail-view__info-container">
        <div className="detail-view__info-container__project-summary">
          <hr/>
          <h1 className="detail-view__info-container__project-summary--title">{title}</h1>
          <p className="detail-view__info-container__project-summary--body">{summary}</p>
          <div className="detail-view__info-container__project-summary--skill-list">
            {
              skills.map((skill, i) => (
                <span>{skill} {i !== skills.length - 1 ? '/' : ''} </span>
              ))
            }
          </div>
          <div className="detail-view__info-container__project-summary--skill-list">
            {
              tools.map((tool, i) => (
                <span>{tool} {i !== tools.length - 1 ? '/' : ''} </span>
              ))
            }
          </div>
          <hr/>
        </div>
        <div className="detail-view__info-container__background">
          <h2 className="detail-view__info-container__background--subtitle">
            Project Background
          </h2>
          <p className="detail-view__info-container__background--body">
            {background}
          </p>
          <h2 className="detail-view__info-container__background--subtitle">
            Static Previews
          </h2>
          {images.slice(1).map(image => (
            <img 
            src={imgUrl(`./detail/${getScreenWidth()}/${image}`)} 
            alt={`${title} Static Site Preview`} 
            className="detail-view__info-container__background--image"
          />
          ))}
        </div>
      </div>
      <div className="detail-view__bottom-links">
        <hr/>
        <div className="detail-view__bottom-links__mid-container">
          <div className="link prev">
            <h3>{previousName}</h3>
            <Link to={`/portfolio${previous}`}>Previous Project</Link>
          </div>
          <div className="spacer"></div>
          <div className="link next">
            <h3>{nextName}</h3>
            <Link to={`/portfolio${next}`}>Next Project</Link>
          </div>
        </div>

        <hr/>
      </div>
    </div>
  );
}

export default Detail;