import React from "react";
const SearchBond = ({ onChange, value, type }) => {
  return (
    <div>
      <form className="searchForm">
        <b>search</b>
        <input type={type} onChange={onChange} value={value}></input>
      </form>
    </div>
  );
};

export default SearchBond;
