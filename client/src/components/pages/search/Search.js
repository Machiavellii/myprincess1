import React, { useState } from 'react';

import '../../../styles/searchPage.css';

import Map from './Map';
import Girls from './Girls';
import FilterForm from './FilterForm';

const Search = () => {
  let [toggleFilter] = useState('');
  let [toggleMap] = useState('');
  let [activeFilter, setActive] = useState(false);
  let [activeMap, setActiveMap] = useState(false);

  toggleFilter = e => {
    setActive((activeFilter = !activeFilter));
  };

  toggleMap = e => {
    setActiveMap((activeMap = !activeMap));
  };

  return (
    <div className="row py-1">
      <div className="col-sm-12 d-lg-none btns">
        <button className="btn btn-rose-back" onClick={toggleFilter}>
          <i className="fas fa-filter" /> Filter ads
        </button>
        <button className="btn" onClick={toggleMap}>
          View map <i className="far fa-map" />
        </button>
      </div>

      <div className="col-md-12 col-lg-6">
        <div className={activeFilter ? 'd-block' : 'd-none d-lg-block'}>
          <FilterForm />
        </div>
        <div className={activeMap ? 'd-none' : 'col-md-12'}>
          <Girls />
        </div>
      </div>
      <div className={activeMap ? 'col-md-12 d-md-block' : 'd-none d-lg-block'}>
        <Map />
      </div>
    </div>
  );
};

export default Search;
