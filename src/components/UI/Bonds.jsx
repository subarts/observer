import React, { useState, useEffect } from "react";
import BondItem from "./BondItem";
import Filter from "./Filter";
import PostServise from "../../API/RequestBonds";
import ButtonGetBonds from "./ButtonGetBonds";
import { useNavigate } from "react-router-dom";
import BondWindow from "./BondWindow";

const Bonds = () => {
  const router = useNavigate();
  const [bonds, setPosts] = useState([]);

  async function fetchBonds() {
    const response = await PostServise.getBonds();
    setPosts(response.data.instruments);
  }
  useEffect(() => {
    fetchBonds();
  }, []);

  console.log(bonds);

  return (
    <div className={"bonds"}>
      <h1>Bonds</h1>
      <ButtonGetBonds className={"ButtonBonds"} onClick={fetchBonds} />
      <Filter />
      <div className={"bondsList"}>
        {bonds.map((bond) => (
          <div
            className="buttonGetBond"
            //PonClick={<BondWindow style={{ display: "block" }} />}
          >
            <BondItem bond={bond} key={bond.figi} />
          </div>
        ))}
      </div>
      <BondWindow />
    </div>
  );
};
export default Bonds;
