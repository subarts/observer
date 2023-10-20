import React from "react";
const BondDescript = (props) => {
  return (
    <div className={"BondDescript"}>
      <h1>{props.bond.name}</h1>
      <ul>
        <li>figi:{props.bond.figi}</li>
        <li>ticker:{props.bond.ticker}</li>
        <li>currency:{props.bond.currency}</li>
        <li>maturity date:{props.bond.maturityDate}</li>

        <li>coupon quantity:{props.bond.couponQuantityPerYear}</li>
      </ul>
    </div>
  );
};
export default BondDescript;
