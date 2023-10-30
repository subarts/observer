import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import BondItem from "./BondItem";
const BondsList = () => {
  const bonds = useSelector((state) => state.rootReduser.toolKit.bonds);

  return (
    <div className={"bondsList"}>
      {bonds.length < 1 ? (
        <div>{bonds}</div>
      ) : (
        bonds.map((bond) => (
          <div className="bondItem">
            <BondItem bond={bond} key={bond.figi} />
          </div>
        ))
      )}
    </div>
  );
};
export default BondsList;
