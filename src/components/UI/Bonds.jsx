import React, { useState, useEffect } from "react";
import BondItem from "./BondItem";
import Filter from "./Filter";
import setPost from "../UI/SomeInformation";
import PostServise from "../../API/RequestBonds";
import ButtonGetBonds from "./ButtonGetBonds";

const Bonds = () => {
  const [bonds, setPosts] = useState([]);
  async function fetchBonds() {
    const response = await PostServise.getBonds();
    setPosts(response);
  }
  useEffect(() => {
    fetchBonds();
  }, []);

  return (
    <div className={"bonds"}>
      <h1>Bonds</h1>
      <ButtonGetBonds onClick={fetchBonds} />
      <Filter />
      <div className={"bondsList"}>
        {bonds.map((bond) => (
          <BondItem bond={bond} key={bond.figi} />
        ))}
      </div>
    </div>
  );
};
export default Bonds;
