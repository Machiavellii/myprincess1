import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProfiles } from '../../../../actions/profile';
import Contents from './Contents';
// import Pagination from '../../../common/Pagination';

const Content = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  console.log(profiles, loading);

  const [currentPage, setCurrentPage] = useState(1);
  const [contentsPerPage] = useState(7);

  //Get current posts
  // const indexOfLastContent = currentPage * contentsPerPage;
  // const indexOfFirstContent = indexOfLastContent - contentsPerPage;
  // const currentContent = content.slice(indexOfFirstContent, indexOfLastContent);

  return (
    <Fragment>
      <Contents />
      {/* <Pagination /> */}
    </Fragment>
  );
};

Content.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfiles }
)(Content);
