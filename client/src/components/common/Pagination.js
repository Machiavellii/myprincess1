import React from 'react';

const Pagination = ({ contentPerPage, totalContent, paginate }) => {
  // contentNumbers = [];

  // for (let i = 1; i <= Math.ceil(totalContent / contentPerPage); i++) {
  //   contentNumbers.push(i);
  // }

  return (
    <nav>
      <ul className="pagination">
        {/* {contentNumbers.map(number => (
          <li key={number} className='page-item'>
            <a href="!#" onClick={() => paginate(number)} className='page-link'>
              {number}
            </a>
          </li>
        ))} */}
        <li className="page-item">
          <a href="!#" className="page-link">
            1
          </a>
        </li>
        <li>
          <a href="!#" className="page-link">
            2
          </a>
        </li>
        <li>
          <a href="!#" className="page-link">
            3
          </a>
        </li>
        <li>
          <a href="!#" className="page-link">
            4
          </a>
        </li>
        <li>
          <a href="!#" className="page-link">
            5
          </a>
        </li>
        <li>
          <a href="!#" className="page-link">
            6
          </a>
        </li>
        <li>
          <a href="!#" className="page-link">
            7
          </a>
        </li>
        <li>
          <a href="!#" className="page-link">
            Next "
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
