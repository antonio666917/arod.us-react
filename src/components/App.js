import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Helmet } from "react-helmet";

import './App.css';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Footer from './Footer';
import shareimage from '../images/share.jpg';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Helmet>
            <meta property="og:image" content={shareimage} />
          </Helmet>
          <Nav />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
