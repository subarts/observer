import React, { useState, useEffect } from "react";
import BondItem from "./BondItem";
import Filter from "./Filter";
import PostServise from "../../API/RequestBonds";
import ButtonGetBonds from "./ButtonGetBonds";
import SearchBond from "./SearchBond";
import SelectSort from "./SelectSort";

const Bonds = () => {
  const [bonds, setBonds] = useState([]);
  const [selectedSort, setSelectedSort] = useState("");
  const sortBonds = (sort) => {
    setSelectedSort(sort);
    console.log(bonds[0]);
    setBonds([...bonds].sort((a, b) => a[sort].localeCompare(b[sort])));
  };
  async function fetchBonds() {
    const response = await PostServise.getBonds();
    setBonds(response.data.instruments);
  }
  useEffect(() => {
    fetchBonds();
  }, []);

  return (
    <div className={"bonds"}>
      <h1>Bonds</h1>
      <ButtonGetBonds onClick={fetchBonds} />
      <Filter />
      <SelectSort
        value={selectedSort}
        onChange={sortBonds}
        defaultValue="sorts"
        options={[
          { value: "name", name: "sort by name" },
          { value: "figi", name: "sort by figi" },
          { value: "ticker", name: "sort by ticker" },
          { value: "maturityDate", name: "sort by date" },
        ]}
      />
      <SearchBond />
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
    </div>
  );
};
export default Bonds;
