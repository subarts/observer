import React from "react";
const BondDescript = (props) => {
  return (
    <div className={"BondDescript"}>
      <h1>{props.bond.name}</h1>
      <ul>
        <li>{props.bond.figi}</li>
        <li>{props.bond.ticker}</li>
        <li>{props.bond.currency}</li>
        <li>{props.bond.maturityDate}</li>
        <li>{props.bond.couponQuantityPerYear}</li>
      </ul>
    </div>
  );
};
export default BondDescript;
