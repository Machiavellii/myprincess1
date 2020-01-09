import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getCurrentProfile } from '../../actions/profile';

const DashboardActions = ({ getCurrentProfile, profile: { profile } }) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  let activeStatus = profile.is_active;
  console.log(activeStatus);

  const [isActive, toggleIsActive] = useState(activeStatus);

  return (
    <div>
      <Link to="/edit-profile" className="btn btn-light">
        <i className="fas fa-user-circle" /> Edit Profile
      </Link>
      {isActive && (
        <Fragment>
          <button
            type="button"
            className="btn btn-secondary ml-3"
            onClick={() => toggleIsActive(!activeStatus)}
          >
            Stop your hours
          </button>
        </Fragment>
      )}
      {!isActive && (
        <Fragment>
          <button
            type="button"
            className="btn btn-success ml-3"
            onClick={() => toggleIsActive(activeStatus)}
          >
            Start your hours
          </button>
        </Fragment>
      )}
      <p className="mt-3">You have 384 hours left</p>
      {/* <Link to="/upload-cover" className="btn btn-light">
        <i className="fas fa-user-circle" /> Upload Profile Photo
      </Link>
      <Link to="/upload-gallery" className="btn btn-light">
        <i className="fas fa-user-circle" /> Upload Gallery
      </Link> */}
    </div>
  );
};

DashboardActions.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(
  DashboardActions
);
