import React, { useMemo } from "react"
import { useSelector } from "react-redux"
import BondItem from "./BondItem"
import { selectNext, selectPrev } from "../../store/Reducers"
import { dispatch } from "../../store/dispatch"
const BondsList = () => {
  const bonds = useSelector((state) => state.rootReduser.toolKit.bonds)
  const searchQuery = useSelector(
    (state) => state.rootReduser.toolKit.searchQuerys
  )
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
      <button onClick={counterDel}>get prev bonds</button>
      <button onClick={counterAdd}>get next bonds</button>
      <div className={"bondsList"}>
        {sortedAndSearchBond
          .slice(
            count,
            count + 10
          ) /* обавить какое количество облиг выводить на странице */
          .map((bond) => (
            <div className="bondItem">
              <BondItem bond={bond} key={bond.figi} />
            </div>
          ))}
        {console.log(count)}
      </div>
    </>
  )
}
export default BondsList
