"use client"
import React from "react"
import store from "../../store"
import { selectedSort } from "../../store/actionCreators"
import { useSelector } from "react-redux/es/hooks/useSelector"
const SelectSort = () => {
  const select = (value) => {
    store.dispatch(selectedSort(value))
  }
  const selectSort = useSelector(
    (state) => state.rootReduser.toolKit.selectSort
  )
  const defaultValue = "sort by"
  return (
    <div>
      <select
        className="selectSort"
        onChange={(e) => select(e.target.value)}
        value={selectSort}
      >
        <option disabled value={defaultValue}>
          {defaultValue}
        </option>
        <option value="name">sort by name </option>
        <option value="figi">sort by figi</option>
        <option value="ticker">sort by ticker</option>
      </select>
    </div>
  )
}

export default SelectSort
