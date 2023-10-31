import React, { useMemo } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import BondItem from "./BondItem";
const BondsList = () => {
  const bonds = useSelector((state) => state.rootReduser.toolKit.bonds);
  const searchQuery = useSelector(
    (state) => state.rootReduser.toolKit.searchQuerys
  );

  const sortedAndSearchBond = useMemo(() => {
    return bonds.filter(
      (bond) =>
        bond.figi.toLowerCase().includes(searchQuery) ||
        bond.ticker.toLowerCase().includes(searchQuery) ||
        bond.name.toLowerCase().includes(searchQuery)
    );
  }, [searchQuery, bonds]);

  /*  store.dispatch(bondsAdd(arrayBonds)); */

  return (
    <div className={"bondsList"}>
      {sortedAndSearchBond.map((bond) => (
        <div className="bondItem">
          <BondItem bond={bond} key={bond.figi} />
        </div>
      ))}
    </div>
  );
};
export default BondsList;
