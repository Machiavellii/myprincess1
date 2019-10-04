import React, { Fragment, useState } from 'react';
import Contents from './Contents';
// import Pagination from '../../../common/Pagination';

const Content = () => {
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

export default Content;
