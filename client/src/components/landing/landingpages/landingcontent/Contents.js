import React from 'react';
import { Link } from 'react-router-dom';

const Contents = ({ profiles: { profile } }) => {
  return (
    <div className="row">
      {profile.map(profile => (
        <div className="col-sm-6 col-md-4 col-lg-3" key={profile._id}>
          <article className="content">
            <div className="contentHolder">
              <div className="top-holder">
                <Link to="/" className="links">
                  {profile.canton}
                </Link>
              </div>
              <Link to={`/profile/user/${profile.user._id}`}>
                <img src={profile.cover_photo} alt="" className="img-fluid" />
              </Link>
              <div className="bottom-holder">
                <h5>
                  <Link to="/" className="links link-name">
                    {' '}
                    {profile.user.nickname}
                  </Link>
                </h5>
              </div>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
};

export default Contents;
