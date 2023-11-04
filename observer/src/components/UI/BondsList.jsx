"use client"
import React, { useEffect, useMemo } from "react"
import { useSelector } from "react-redux"
import BondItem from "./BondItem"
import { dispatch } from "../../store/dispatch"
import { selectNext, selectPrev } from "../../store/Reducers"
import SwitcherNumbItems from "../UI/SwitchNumbItems"
const BondsList = () => {
  const bonds = useSelector((state) => state.rootReduser.toolKit.bonds)

  const searchQuery = useSelector(
    (state) => state.rootReduser.toolKit.searchQuerys
  )

  /*   const selectNumbItems = useSelector(
    (state) => state.rootReduser.toolKit.selectNumbItems
  ) */
  const count = useSelector((state) => state.rootReduser.toolKit.count)
  const sortedAndSearchBond = useMemo(() => {
    return bonds.filter(
      (bond) =>
        bond.figi.toLowerCase().includes(searchQuery) ||
        bond.ticker.toLowerCase().includes(searchQuery) ||
        bond.name.toLowerCase().includes(searchQuery)
    )
  }, [searchQuery, bonds])

  const counterAdd = () => {
    dispatch(selectNext())
  }
  const counterDel = () => {
    dispatch(selectPrev())
  }

  return (
    <>
      <div className="switchPage">
        <button onClick={counterDel} className="ButtonList">
          get prev bonds
        </button>

        {/* <SwitcherNumbItems /> */}

        <button onClick={counterAdd} className="ButtonList">
          get next bonds
        </button>
      </div>
      <div className={"bondsList"}>
        {sortedAndSearchBond
          .slice(
            count,
            count + 5
          ) /* обавить какое количество облиг выводить на странице */
          .map((bond) => (
            <div className="bondItem">
              <BondItem bond={bond} key={bond.figi} />
            </div>
          ))}
      </div>
    </>
  )
}
export default BondsList
