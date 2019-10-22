import React, { useState } from 'react';

import FsLightbox from 'fslightbox-react';

const Carousel = ({ profile }) => {
  const { photos } = profile;

  let [leftArrow] = useState('');
  let [rightArrow] = useState('');
  let [toggler, setToggler] = useState(false);
  const [photoGallery, setPhotos] = useState('');

  rightArrow = () => {
    document.getElementById('move').scrollLeft += 250;
  };

  leftArrow = () => {
    document.getElementById('move').scrollLeft -= 150;
  };

  toggler = photo => {
    setToggler(!toggler);
    setPhotos(photo);
  };

  return (
    <div className="carousel-holder">
      <div className="carousel-gallery" id="move">
        {photos.map((photo, i) => (
          <img
            key={i}
            src={`${window.location.origin}/${photo}`}
            alt=""
            className="img-fluid"
            onClick={toggler.bind(this, photo)}
          />
        ))}
      </div>
      <div className="leftArrow arrow" onClick={leftArrow}>
        <i className="fas fa-arrow-left"></i>
      </div>
      <div className="rightArrow arrow" onClick={rightArrow}>
        <i className="fas fa-arrow-right"></i>
      </div>
      <FsLightbox
        toggler={toggler}
        sources={[`${window.location.origin}/${photoGallery}`]}
      />
    </div>
  );
};

export default Carousel;
