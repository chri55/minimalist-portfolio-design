import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Home from './pages/home/home';
import Portfolio from './pages/portfolio/portfolio';

import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/portfolio">
            <Portfolio></Portfolio>
          </Route>
          <Route path="/contact">
            <div>Contact</div>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
