import React from "react";
import "./Filter.css";

const Filter = ({ searchText, handleSearch }) => {
  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Search by Order Id, Vendor name, Pick up date, or Status"
        value={searchText}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Filter;
