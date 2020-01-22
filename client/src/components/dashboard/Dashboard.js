import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import DashboardAction from "./DashboardActions";

import Carousel from "../landing/landingpages/landingcontent/singleGirl/carousel/Carousel";
import Header from "../landing/landingpages/landingcontent/singleGirl/describeGirl/componentGirls/HeaderGirl";
import DescribeGirl from "../landing/landingpages/landingcontent/singleGirl/describeGirl/Girl";
import GalleryHolder from "../landing/landingpages/landingcontent/singleGirl/gallery/GalleryHolder";

import { getCurrentProfile, deleteAccount } from "../../actions/profile";

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
  deleteAccount
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  const [type, setType] = useState(false);

  // console.log(profile);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      {profile !== null ? (
        <Fragment>
          <div className="container text-center px-1">
            {/* <div>
          <i className="fas fa-user" /> Welcome {user && user.nickname}
        </div> */}
            <DashboardAction />
          </div>
          <Carousel photos={profile.photos} />
          <div className="holder dashboard-content">
            <Header profile={profile} />
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-8">
                  <DescribeGirl profile={profile} />
                </div>
                <div className="col-sm-12 col-md-4 gallery">
                  <GalleryHolder profile={profile} />
                </div>
              </div>
              <button
                className="btn btn-danger"
                onClick={() => deleteAccount()}
              >
                <i className="fas fa-user-minus"> Delete My Account</i>
              </button>
            </div>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <div className="container m-5 dashboard-create">
            <p>You have not yet setup a profile, please add some info</p>
            <p className="mt-4">Please tell us are you Escort or an Agency?</p>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="type"
                id="escort"
                value="escort"
                onChange={() => setType(true)}
              />
              <label className="form-check-label" htmlFor="active">
                Escort
              </label>
            </div>
            <div className="form-check form-check-inline mb-3">
              <input
                className="form-check-input"
                type="radio"
                name="type"
                id="agency"
                value="agency"
                onChange={() => setType(true)}
              />
              <label className="form-check-label" htmlFor="inactive">
                Agency
              </label>
            </div>
            <br />
            {!type ? (
              <Link
                to="/postanad"
                className="btn disabled"
                style={{ backgroundColor: "#2b2b2b", color: "#fff" }}
              >
                Post an Ad
              </Link>
            ) : (
              <Link
                to="/postanad"
                className="btn  my-3 rose-border"
                style={{ backgroundColor: "#2b2b2b", color: "#fff" }}
              >
                Post an Ad
              </Link>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});
export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
