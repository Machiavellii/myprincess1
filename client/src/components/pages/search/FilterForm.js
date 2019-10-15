import React from 'react';

const FilterForm = () => {
  return (
    <div className="form-select">
      <select className="form-control">
        <option>All Regions</option>
      </select>
      <select className="form-control">
        <option>Category</option>
      </select>
      <select className="form-control ">
        <option>Prestations</option>
      </select>
    </div>
  );
};

export default FilterForm;
