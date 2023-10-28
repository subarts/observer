import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
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
