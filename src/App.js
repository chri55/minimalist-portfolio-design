import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/portfolio">
            <div>Portfolio</div>
          </Route>
          <Route path="/contact">
            <div>Contact</div>
          </Route>
          <Route path="/">
            <div>Home</div>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
