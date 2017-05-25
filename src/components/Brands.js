import React from 'react';
import './Brands.css';
import { BrandsList } from '../data/Brands';

function Brands() {
  const brandList = BrandsList();
  return (
    <section className="brands">
      <div className="wrapper">
        <h2>I've built <span>stuff</span> for many brands!</h2>
        <div className="brand_list">
          {brandList.map((brand, index) => {
            return (
              <BrandItem key={index} logo={brand.logo_filename} alt={brand.name} />
            )
          })}
        </div>
        <a href="">Let's work together!</a>
      </div>
    </section>
  )
}

function BrandItem(props) {
  let source = require(`../images/brands/${props.logo}`);
  return (
    <div className="brand_item">
      <img src={source} alt={props.alt} />
    </div>
  )
}

export default Brands;
