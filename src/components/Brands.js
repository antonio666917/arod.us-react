import React from 'react';
import PropTypes from 'prop-types';

import './Brands.css';
import { BrandsList } from '../data/Brands';

function Brands() {
  const brandList = BrandsList();
  return (
    <section className="brands">
      <div className="wrapper">
        <h2>Besides building my own companies, I've built <span>stuff</span> for many brands!</h2>
        <div className="brand_list">
          {brandList.map((brand, index) => {
            return (
              <BrandItem key={index} logo={brand.logo_filename} alt={brand.name} />
            )
          })}
        </div>
        <a className="brand_link" title="{brand.name}" href="mailto:antoniwan@gmail.com?subject=Let's Work Together!">Let's work together!</a>
      </div>
    </section>
  )
}

function BrandItem(props) {
  let imageSource = require(`../images/brands/${props.logo}`);
  return (
    <div className="brand_item">
      <img src={imageSource} title={props.alt} alt={props.alt} />
    </div>
  )
}
BrandItem.propTypes = {
  logo: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default Brands;
