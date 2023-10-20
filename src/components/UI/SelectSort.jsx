import React from "react";
const SelectSort = ({ options, defaultValue, value, onChange }) => {
  return (
    <select
      className="selectSort"
      value={value}
      onChange={(event) => {
        onChange(event.target.value);
      }}
    >
      (
      <option disabled value="">
        {defaultValue}
      </option>
      ),
      {options.map((option) => (
        <option key={option.figi} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};
export default SelectSort;
