import React from "react";
import "./Filter.css";

const Filter = ({ searchText, handleSearch }) => {
  const handleChange = (event) => {
    handleSearch(event.target.value);
  };
  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Search by Order Id, Vendor name, Pick up date, or Status"
        value={searchText}
        onChange={handleChange}
      />
    </div>
  );
};

export default Filter;
