import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import ScrollToTop from './components/scroll-to-top/scroll-to-top.component';
import Home from './pages/home/home';
import Portfolio from './pages/portfolio/portfolio';
import Contact from './pages/contact/contact';

import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
          <Header></Header>
          <Switch>
            <Route path="/portfolio">
              <Portfolio></Portfolio>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
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
