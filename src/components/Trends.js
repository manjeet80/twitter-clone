import React from "react";
import { FaSearch } from "react-icons/fa";
import TrendsKeyword from "./TrendsKeyword";
const Trends = () => {
  return (
    <div className="trends">
      <div className="trends_search">
        <input
          type="text"
          className="input_search"
          placeholder="Search Twitter"
        />
        <div className="trend_icon">
          <FaSearch className="search-icon" />
        </div>
      </div>
      <TrendsKeyword />
    </div>
  );
};

export default Trends;
