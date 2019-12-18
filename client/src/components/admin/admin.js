import React, { Fragment, useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { logout } from "../../actions/adminAuth";
import {
  deleteAccountAdmin,
  getCurrentProfileAdmin1
} from "../../actions/adminControl";
import { getProfiles } from "../../actions/profile";
import Spinner from "../layout/Spinner";
import { filterFunc } from "../../actions/profile";
import Moment from "react-moment";
import * as moment from "moment";

const Admin = ({
  logout,
  getProfiles,
  profile,
  deleteAccountAdmin,
  filterFunc,
  getCurrentProfileAdmin1
}) => {
  const [filter, setFilter] = useState("");

  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  const onChange = e => {
    setFilter(e.target.value);
    filterFunc(filter);
  };

  const { profiles } = profile;

  const filterGirls =
    profile.profileFilter.length >= 1 ? profile.profileFilter : profiles;

  const hours = moment.duration(7, "days").asHours();

  console.log(hours);

  return (
    <Fragment>
      {profile.profiles.length < 1 ? (
        <Spinner />
      ) : (
        <div className="container">
          <div className="input-group mb-3">
            <input
              type="text"
              value={filter}
              className="form-control mt-2"
              placeholder="Search by names"
              onChange={e => onChange(e)}
            />
          </div>
          {filterGirls.map(profile => (
            <div className="card mb-3" key={profile._id}>
              <div className="card-header">
                <div className="expire-holder">
                  <span className="mb-2">
                    This profile is{" "}
                    {profile.is_active ? (
                      <span className="badge badge-success">active</span>
                    ) : (
                      <span className="badge badge-danger">is not active</span>
                    )}{" "}
                  </span>
                  <br />
                  <span style={{ fontSize: ".8rem", fontWeight: "800" }}>
                    This profile will be online until
                    <i className="far fa-clock ml-1" />
                    <span className=" ml-1">
                      <Moment
                        format="YYYY/MM/DD"
                        add={{ days: profile.subscription_plan }}
                      >
                        {profile.date}
                      </Moment>{" "}
                      Or{" "}
                      {moment
                        .duration(parseInt(profile.subscription_plan), "days")
                        .asHours()}{" "}
                      hours
                    </span>
                  </span>
                </div>
                <div className="btn-holder">
                  <Link
                    to="/editprofileAdmin"
                    className="btn btn-primary mr-1"
                    onClick={() => getCurrentProfileAdmin1(profile)}
                  >
                    <i className="fas fa-user-edit" /> Edit Profile
                  </Link>
                  <button
                    type="button"
                    className="btn btn-danger "
                    onClick={() => deleteAccountAdmin(profile.user._id)}
                  >
                    <i className="fas fa-user-minus" /> Delete Profile
                  </button>
                </div>
              </div>
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
                    <p className="card-text">Canton: {profile.canton}</p>
                    <p className="card-text">Gender: {profile.gender}</p>
                    <p className="card-text">Email: {profile.user.email} </p>
                    <p className="card-text">
                      <span className="badge badge-info">{profile.type}</span>
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

export default connect(mapStateToProps, {
  logout,
  getProfiles,
  deleteAccountAdmin,
  filterFunc,
  getCurrentProfileAdmin1
})(Admin);
