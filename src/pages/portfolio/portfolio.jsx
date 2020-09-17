import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ImageFeatureRow from '../../components/image-feature-row/image-feature-row.component';

import portfolio from '../../assets/portfolio.json';

class Portfolio extends Component {
  render() {
    return (
      <div>
        {
          portfolio.pages.map(portfolioItem => (
            <ImageFeatureRow {...portfolioItem}></ImageFeatureRow>
          ))
        }
      </div>
    );
  }
}

export default Portfolio;