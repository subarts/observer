import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import store from "../../store";
import { selectedSort } from "../../store/actionCreators";
const SelectSort = () => {
  const selectSort = useSelector(
    (state) => state.rootReduser.toolKit.selectSort
  );
  const select = (value) => {
    store.dispatch(selectedSort(value));
  };

  const defaultValue = "sort by";
  return (
    <select className="selectSort" onChange={(e) => select(e.target.value)}>
      <option disabled value={defaultValue}>
        {defaultValue}
      </option>
      <option value="name">sort by name </option>
      <option value="figi">sort by figi</option>
      <option value="ticker">sort by ticker</option>
    </select>
  );
};

export default SelectSort;
