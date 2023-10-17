import React from "react";

const Filter = () => {
  return (
    <div className={"filter"}>
      <h2>Bond Filter</h2>
      <select>
        <option value="value1">sort by name</option>
        <option value="value1">sort by xz</option>
        <option value="value1">sort by price</option>
        <option value="value1">sort by maturity date</option>
        <option value="value1">sort by number of payment</option>
      </select>
      <input></input>
    </div>
  );
};
export default Filter;
