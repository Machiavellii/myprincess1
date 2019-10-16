import React, { Fragment } from 'react';

import '../../styles/landing.css';
import Content from './landingpages/landingcontent/Content';
import LatestAds from './landingpages/landingcontent/LatestAds';
import LandingCanton from './landingpages/LandingCanton';
import LandingDescribe from './landingpages/LandingDescribe';
import Pagination from '../common/Pagination';

const Landing = () => {
  return (
    <Fragment>
      <div className="header">
        <span>
          Directory for escort and erotic massage parlor in Switzerland
        </span>
      </div>
      <div className="container mt-5">
        <div className="holder-line">
          <span className="sep-holder holder-1">
            <span className="line"></span>
          </span>
          <h4>VIP</h4>
          <span className="sep-holder holder-2">
            <span className="line"></span>
          </span>
        </div>

        <Content />

        <div className="holder-line">
          <span className="sep-holder holder-1">
            <span className="line"></span>
          </span>
          <h4>LATEST ADS</h4>
          <span className="sep-holder holder-2">
            <span className="line"></span>
          </span>
        </div>
        <LatestAds />
        <Pagination />
      </div>
      <LandingCanton />
      <div className="container">
        <LandingDescribe />
      </div>
    </Fragment>
  );
};

export default Landing;
