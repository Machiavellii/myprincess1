import React from 'react';
import Describe from './galleryComponent/Describe';
import Gallery from './galleryComponent/Gallery';
import sara from '../../../../../../img/girls/sara.jpeg';

const GalleryHolder = () => {
  return (
    <div className="gallery-holder">
      <div className="img-holder mb-4">
        <img src={sara} alt="Sara.jpeg" className="img-fluid" />
      </div>
      <div className="location mb-5">
        <h6>Job Activity</h6>
        <p>active</p>
        <p>Yverdon-les-Bains</p>
        <div className="map mb-4">Google Maps</div>
        <p>Rue Uttins 20VD CH</p>
        <a href="!#">Get directions</a>
      </div>
      <Describe />
      <Gallery />
    </div>
  );
};

export default GalleryHolder;
