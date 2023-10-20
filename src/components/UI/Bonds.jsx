import React, { useState, useEffect, useMemo } from "react";
import BondItem from "./BondItem";
import PostServise from "../../API/RestRequest";
import ButtonGetBonds from "./ButtonGetBonds";
import SearchBond from "./SearchBond";
import SelectSort from "./SelectSort";

const Bonds = () => {
  const [bonds, setBonds] = useState([]);
  const [selectedSort, setSelectedSort] = useState("");

  const [searchQuery, setSearchQuery] = useState("");

  const sortedBonds = useMemo(() => {
    if (selectedSort) {
      console.log("work");
      return [...bonds].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return bonds;
  }, [selectedSort, bonds]);
  const sortedAndSearchBond = useMemo(() => {
    return sortedBonds.filter(
      (bond) =>
        bond.figi.toLowerCase().includes(searchQuery) ||
        bond.ticker.toLowerCase().includes(searchQuery) ||
        bond.name.toLowerCase().includes(searchQuery)
    );
  }, [searchQuery, sortedBonds]);
  const sortBonds = (sort) => {
    setSelectedSort(sort);
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
      {/*    <SearchBond value={searchQuery} onChange={(e) => e.target.value} /> */}
      <div>
        <SearchBond
          value={searchQuery}
          type="text"
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="search"
        />
        <SelectSort
          className={"filter"}
          value={selectedSort}
          onChange={sortBonds}
          defaultValue="sorts"
          options={[
            { value: "name", name: "sort by name" },
            { value: "figi", name: "sort by figi" },
            { value: "ticker", name: "sort by ticker" },
          ]}
        />
      </div>
      <div className={"bondsList"}>
        {sortedAndSearchBond.map((bond) => (
          <div className="buttonGetBond">
            <BondItem bond={bond} key={bond.figi} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Bonds;
