import React from "react"
import { useSelector } from "react-redux/es/hooks/useSelector"
import store from "../../store"
import { SwitcherNumbItems } from "../../store/actionCreators"
const SwitchNumbItems = () => {
  const selectNumbItems = useSelector(
    (state) => state.rootReduser.toolKit.selectNumbItems
  )
  const select = (value) => {
    store.dispatch(SwitcherNumbItems(value))
  }

  return (
    <select
      className=""
      onChange={(e) => select(e.target.value)}
      value={selectNumbItems}
    >
      <option disabled value={"empty"}>
        {"empty"}
      </option>
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="15">15</option>
    </select>
  )
}
export default SwitchNumbItems

/* 
onChange={(e) => select(e.target.value)}
        value={selectSort}
      >
        <option disabled value={defaultValue}>
          {defaultValue} */
