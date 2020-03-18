import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import { uploadCover, getCurrentProfile } from '../../../actions/profile';

import Progress from '../../layout/Progress';

const UploadCover = ({
  uploadCover,
  history,
  getCurrentProfile,
  profile: { profile, loading }
}) => {
  const [cover_photo, setCoverphoto] = useState(null);
  const [uploadPercentage, setUploadPercentage] = useState(0);

  useEffect(() => {
    getCurrentProfile();

    setCoverphoto({
      cover_photo: loading || !profile.cover_photo ? null : profile.cover_photo
    });
  }, [loading, getCurrentProfile]);

  const onChange = e => {
    setCoverphoto(e.target.files[0]);

    // console.log(e.target.files[0]);
  };

  const onSubmit = e => {
    e.preventDefault();

    let formCover = new FormData();
    formCover.append('cover_photo', cover_photo);

    uploadCover(formCover, history, setUploadPercentage);
  };

  return (
    <div className="container upload-cover">
      <Link to="/dashboard" className="btn btn-light mt-3">
        Back
      </Link>
      <form onSubmit={onSubmit} className="p-5">
        <h4 className="mb-3 text-center">Upload Profile Photo</h4>
        <input
          type="file"
          name="cover_photo"
          onChange={onChange}
          className="form-control mb-3"
        />

        <Progress percentage={uploadPercentage} />

        {profile === null || profile.cover_photo === undefined ? (
          <p className="text-center">
            <small className="tip">Add new cover photo</small>
          </p>
        ) : (
          <div className="holder-img">
            <div className="closeHolder">
              {/* <button
                type="button"
                className="close"
                // onClick={e => onClickImg(profile.cover_photo)}
              >
                <span aria-hidden="true">&times;</span>
              </button> */}
              <img
                src={`https://myprincess.jcloud.ik-server.com/${profile.cover_photo}`}
                alt=""
              />
            </div>
          </div>
        )}

        <button
          type="submit"
          className="btn btn-primary btn-block main-theme-btn mb-1"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { uploadCover, getCurrentProfile })(
  withRouter(UploadCover)
);
