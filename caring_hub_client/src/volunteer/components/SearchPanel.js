import React from "react";
import "./search.css";
function Search({ value, onChange }) {
  return (
    <div className="container">
      {/*Heading*/}

      {/*Search Input*/}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          <label
            style={{ width: "450px" }}
            className="search-label mb-2"
            htmlFor="search-input"
          >
            <input
              type="text"
              value={value}
              id="search-input"
              placeholder="Search..."
              onChange={onChange}
            />
            <i className="fa fa-search search-icon" />
          </label>
        </div>
      </div>
    </div>
  );
}

export default Search;
