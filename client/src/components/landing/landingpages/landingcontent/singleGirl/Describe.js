import React, { Fragment } from 'react';

import '../../../../../styles/singleGirl.css';

import Carousel from './carousel/Carousel';
import DescribeGirl from './describeGirl/Girl';
import GalleryGirl from './gallery/Gallery';

const DescribeContent = () => {
  return (
    <Fragment>
      <Carousel />
      <div className="holder">
        <div className="background"></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-8">
              <DescribeGirl />
            </div>
            <div className="col-sm-12 col-md-4">
              <GalleryGirl />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DescribeContent;
