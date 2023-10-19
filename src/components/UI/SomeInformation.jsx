import React, { useEffect, useState } from "react";
import ButtonGetBonds from "./ButtonGetBonds";
import PostServise from "../../API/RequestBonds";
const SomeInformation = () => {
  return (
    <div className={"someInformation"}>
      <h3>Some Information</h3>

      <div className={"lampConnect"}></div>
    </div>
  );
};
export default SomeInformation;
