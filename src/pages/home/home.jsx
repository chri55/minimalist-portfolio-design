import React, { Component } from 'react';

import ImageFeatureRow from  '../../components/image-feature-row/image-feature-row.component';

import './home.scss';
import homeData from '../../assets/home.json';

class Home extends Component {
  render() {
    console.log(homeData);
    return (
      <div>
        <ImageFeatureRow {...homeData.pages.featureRow}></ImageFeatureRow>
      </div>
    );
  }
}

export default Home;