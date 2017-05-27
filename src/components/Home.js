import React from 'react';
import { Helmet } from "react-helmet";

import './Home.css';
import Hero from './Hero';
import Brands from './Brands';

function Home() {
  return (
    <div>
      <Helmet>
          <title>Antonio Rodriguez</title>
      </Helmet>

      <Hero />
      <Brands />
    </div>
  )
}

export default Home;
