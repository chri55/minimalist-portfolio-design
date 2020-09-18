import React, { Component } from 'react';

import ImageFeatureRow from  '../../components/image-feature-row/image-feature-row.component';
import HomeHero from '../../components/home-hero/home-hero.component';

import './home.scss';
import homeData from '../../assets/home.json';

class Home extends Component {
  render() {
    console.log(homeData);
    return (
      <div>
        <HomeHero></HomeHero>
        <ImageFeatureRow {...homeData.pages.featureRow}></ImageFeatureRow>
      </div>
    );
  }
}

export default Home;