import React, { Fragment, useState } from "react";
import "../../../styles/contents.css";
import { Link } from "react-router-dom";
import Pagination from "../../common/Pagination";

const Content = ({ profile, agency }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [contentsPerPage] = useState(6);

  // Get current posts
  const indexOfLastContent = currentPage * contentsPerPage;
  const indexOfFirstContent = indexOfLastContent - contentsPerPage;

  const currentContent = profile.profiles.slice(
    indexOfFirstContent,
    indexOfLastContent
  );

  const currentContentAgency = agency.agencies.slice(
    indexOfFirstContent,
    indexOfLastContent
  );

  const filter =
    profile.profileFilter.length >= 1 ? profile.profileFilter : currentContent;

  const filterAgency =
    agency.agencyFilter.length >= 1
      ? agency.agencyFilter
      : currentContentAgency;

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <Fragment>
      <div className="row">
        {filter.map(profile =>
          profile.user.block ? (
            <div className="col-sm-6 col-md-4 col-lg-3" key={profile._id}>
              <article className="content">
                <div className="contentHolder">
                  <div className="top-holder">
                    <Link to="/" className="links">
                      {profile.location ? profile.location.canton : "No canton"}
                    </Link>
                  </div>

                  <Link to={`/profile/user/${profile.user._id}`}>
                    <img
                      src={profile.cover_photo}
                      alt=""
                      className="img-fluid"
                    />
                    {!profile.is_active ? (
                      <div className="inactive">
                        <h6>This announcement is currently inactive</h6>
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </Link>
                  <div className="bottom-holder">
                    <h5>
                      <Link
                        to={`/profile/user/${profile.user._id}`}
                        className="links link-name"
                      >
                        {" "}
                        {profile.user.nickname}
                      </Link>
                    </h5>
                  </div>
                </div>
              </article>
            </div>
          ) : (
            ""
          )
        )}

        {filterAgency.map(profile =>
          profile.user.block ? (
            <div className="col-sm-6 col-md-4 col-lg-3" key={profile._id}>
              <article className="content">
                <div className="contentHolder">
                  <div className="top-holder">
                    <Link to="/" className="links">
                      {profile.location ? profile.location.canton : "No canton"}
                    </Link>
                  </div>

                  <Link to={`/agency/user/${profile.user._id}`}>
                    <img
                      src={profile.cover_photo}
                      alt=""
                      className="img-fluid"
                    />
                    {!profile.is_active ? (
                      <div className="inactive">
                        <h6>This announcement is currently inactive</h6>
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </Link>
                  <div className="bottom-holder">
                    <h5>
                      <Link
                        to={`/agency/user/${profile.user._id}`}
                        className="links link-name"
                      >
                        {" "}
                        {profile.user.nickname}
                      </Link>
                    </h5>
                  </div>
                </div>
              </article>
            </div>
          ) : (
            ""
          )
        )}
      </div>
      <Pagination
        contentsPerPage={contentsPerPage}
        totalContent={profile.profiles.length}
        paginate={paginate}
      />
    </Fragment>
  );
};

export default Content;
