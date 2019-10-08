import React, { useState } from 'react';

import one from '../../../../../../img/girls/girl/1.jpeg';
import two from '../../../../../../img/girls/girl/2.jpeg';
import three from '../../../../../../img/girls/girl/3.jpeg';
import four from '../../../../../../img/girls/girl/4.jpeg';
import five from '../../../../../../img/girls/girl/5.jpeg';
import six from '../../../../../../img/girls/girl/6.jpeg';
import seven from '../../../../../../img/girls/girl/7.jpeg';
import eight from '../../../../../../img/girls/girl/8.jpeg';

const Carousel = () => {
  let [leftArrow] = useState('');
  let [rightArrow] = useState('');

  rightArrow = () => {
    document.getElementById('move').scrollLeft += 250;
  };

  leftArrow = () => {
    document.getElementById('move').scrollLeft -= 150;
  };

  return (
    <div className="carousel-holder">
      <div className="carousel-gallery" id="move">
        <img src={one} alt="" className="img-fluid" />
        <img src={two} alt="" className="img-fluid" />
        <img src={three} alt="" className="img-fluid" />
        <img src={four} alt="" className="img-fluid" />
        <img src={five} alt="" className="img-fluid" />
        <img src={six} alt="" className="img-fluid" />
        <img src={seven} alt="" className="img-fluid" />
        <img src={eight} alt="" className="img-fluid" />
      </div>
      <div className="leftArrow arrow" onClick={leftArrow}>
        <i className="fas fa-arrow-left"></i>
      </div>
      <div className="rightArrow arrow" onClick={rightArrow}>
        <i className="fas fa-arrow-right"></i>
      </div>
    </div>
  );
};

export default Carousel;
