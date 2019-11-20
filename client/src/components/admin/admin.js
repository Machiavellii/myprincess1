import React, { Fragment, useEffect } from "react";

// import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { logout } from "../../actions/adminAuth";
import { getProfiles } from "../../actions/profile";
import Spinner from "../layout/Spinner";

const Admin = ({ logout, getProfiles, profile }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  console.log(profile);
  const { profiles } = profile;
  return (
    <Fragment>
      {profile.profiles.length < 1 ? (
        <Spinner />
      ) : (
        <div className="container">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control mt-2"
              placeholder="Search by names"
            />
          </div>
          {profiles.map(profile => (
            <div className="card mb-3" key={profile._id}>
              <div className="card-header">Header</div>
              <div className="row">
                <div className="col-md-4">
                  <img
                    src={profile.cover_photo}
                    alt=""
                    style={{ height: "100%" }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{profile.user.nickname}</h5>
                    <p className="card-text">City: {profile.city}</p>
                    <p className="card-text">Gender: {profile.gender}</p>
                    <p className="card-text">
                      Active: {profile.is_active ? "Yes" : "No"}
                    </p>
                    <p className="card-text">Email: {profile.user.email} </p>
                    <p className="card-text">
                      <small className="text-muted">{profile.type}</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="">
            <button className="btn btn-danger mb-2" onClick={logout}>
              Admin Logout
            </button>
          </div>
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { logout, getProfiles })(Admin);
