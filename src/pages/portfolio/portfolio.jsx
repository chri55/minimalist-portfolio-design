import React, { Component } from 'react';
import { 
  Link,
  Switch,
  Route,
  useRouteMatch, 
} from 'react-router-dom';

import ImageFeatureRow from '../../components/image-feature-row/image-feature-row.component';
import Detail from '../../pages/detail/detail';

import portfolio from '../../assets/portfolio.json';

let Portfolio = () => {
  let match = useRouteMatch();
  return (
    <div>
    <Switch>
      <Route path={`${match.path}/:portfolioItem`}>
        <Detail></Detail>
      </Route>
      <Route exact path={`${match.path}`}>
        {
          portfolio.pages.map(portfolioItem => (
            <ImageFeatureRow {...portfolioItem}></ImageFeatureRow>
          ))
        }
      </Route>
    </Switch>

    </div>
  );
}

export default Portfolio;