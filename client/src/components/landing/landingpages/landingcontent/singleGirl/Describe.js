import React, { Fragment } from 'react';

import '../../../../../styles/singleGirl.css';

import Carousel from './carousel/Carousel';
import Header from './describeGirl/componentGirls/HeaderGirl';
import DescribeGirl from './describeGirl/Girl';
import GalleryHolder from './gallery/GalleryHolder';

const DescribeContent = () => {
  return (
    <Fragment>
      <Carousel />
      <div className="holder">
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-8">
              <DescribeGirl />
            </div>
            <div className="col-sm-12 col-md-4 gallery">
              <GalleryHolder />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DescribeContent;
