import React from "react";
export const SearchComponent = props => (
  <div className="d-flex align-items-center p-3 my-3 text-white-50 bg-black rounded box-shadow">
    <input
      onChange={props.handleChange}
      className="form-control form-control-lg"
      type="text"
      placeholder="Search News"
    />
  </div>
);
