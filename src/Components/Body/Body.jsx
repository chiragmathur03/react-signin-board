import React from 'react';
import './body.css';
import './body.scss';
import Top from './Top/Top';
import Listing from './Listing/Listing';
import Activity from './Activity/Activity';
import Schedule from './Schedule/Schedule';
import Products from './Products/Products';


const Body = () => {
  return (
    <div className="mainContent">
      <Top />

      <div className="bottom">
        <Listing />
        <Activity />
        <div className="bottom flex">
          <Products />
          <Schedule /> 
        </div>
      </div>
    </div>
  )
}

export default Body