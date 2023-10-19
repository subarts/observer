import React, { useEffect, useState } from "react";
import ButtonGetBonds from "./ButtonGetBonds";

const BondDescript = (props) => {
  /*  async function fetchBonds() {
    const bonds = await PostServise.getBonds();
    setBonds = bonds.data;
  } */
  return (
    <div className={"BondDescript"}>
      <h1>{props.bond.name}</h1>
    </div>
  );
};
export default BondDescript;
