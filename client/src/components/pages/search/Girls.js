import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import sara from '../../../img/girls/sara.jpeg';

const Girls = () => {
  let [redirect] = useState('');
  let [tru, setTru] = useState(false);

  redirect = () => {
    setTru((tru = true));
  };

  return (
    <div className="row">
      <div className="col-sm-6">
        <div className="card" onClick={redirect}>
          {tru ? (
            <Redirect to="/describe-content" />
          ) : (
            <Fragment>
              <img src={sara} alt="" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Sara</h5>
                <p className="card-text">Student hot in Yverdon</p>
                <Link to="/describe-content">
                  <i className="fas fa-map-marker-alt" /> Street Uttins 20, VD
                  CH
                </Link>
              </div>
            </Fragment>
          )}
        </div>
      </div>
      <div className="col-sm-6">
        <div className="card" onClick={redirect}>
          <img src={sara} alt="" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Sara</h5>
            <p className="card-text">Student hot in Yverdon</p>
            <Link to="/describe-content">
              <i className="fas fa-map-marker-alt" /> Street Uttins 20, VD CH
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Girls;
