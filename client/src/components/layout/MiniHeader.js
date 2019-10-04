import React from 'react';
import '../../styles/small-header.css';
import germany from '../../img/flag-icons/germany.png';
import france from '../../img/flag-icons/france.png';
import italy from '../../img/flag-icons/italy.png';
import romania from '../../img/flag-icons/romania.png';
import portugal from '../../img/flag-icons/portugal.png';
import russia from '../../img/flag-icons/russia.png';
import unitedkingdom from '../../img/flag-icons/united-kingdom.png';

const MiniHeader = () => {
  return (
    <div className="small-header">
      <div className="language">
        <a href="#!">
          <img src={unitedkingdom} alt="" />
        </a>
        <a href="#!">
          <img src={france} alt="" />
        </a>
        <a href="#!">
          <img src={germany} alt="" />
        </a>
        <a href="#!">
          <img src={italy} alt="" />
        </a>
        <a href="#!">
          <img src={portugal} alt="" />
        </a>
        <a href="#!">
          <img src={unitedkingdom} alt="" />
        </a>
        <a href="#!">
          <img src={romania} alt="" />
        </a>
        <a href="#!">
          <img src={russia} alt="" />
        </a>
      </div>
    </div>
  );
};

export default MiniHeader;
