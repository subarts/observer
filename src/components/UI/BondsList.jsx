"use client"
import React, { useMemo } from "react"
import { useSelector } from "react-redux"
import BondItem from "./BondItem"
import Link from "next/link"
import SwitcherPage from "./SwitcherPage"
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

  return (
    <>
      <SwitcherPage props={sortedAndSearchBond} />

      <div className={"bondsList"}>
        {sortedAndSearchBond
          .slice(
            count,
            count + 8
          ) /* обавить какое количество облиг выводить на странице */
          .map((bond) => (
            <div className="bondItem" key={bond.figi}>
              <Link href={`/bonds/${bond.figi}`}>
                <BondItem bond={bond} />
              </Link>
            </div>
          ))}
      </div>
    </>
  )
}
export default BondsList
