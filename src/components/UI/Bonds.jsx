import React, { useState, useMemo } from "react";
import BondItem from "./BondItem";
import SearchBond from "./SearchBond";
import SelectSort from "./SelectSort";
import store from "../../store/index";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { addBonds, searchBonds } from "../../store/Reducers";
import BondsList from "./BondsList";
import GetBonds from "../../API/RestRequest";
const Bonds = () => {
  let arrayBonds = [];
  fetchBonds();
  async function fetchBonds() {
    const response = await GetBonds();
    return (arrayBonds = [...response.data.instruments]);
  }

  const bonds = useSelector((state) => state.rootReduser.toolKit.bonds);
  const bondsRequest = () => {
    store.dispatch(addBonds({ bonds: [...arrayBonds] }));
  };

  /*    const sortedAndSearchBond = useSelector(
    (state) => state.rootReduser.toolKit.bonds
  );  */
  /*   const search = () => {
    store.dispatch(addBonds({ searchQuery: "" }));
  }; */

  //up the redux

  /*   const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const sortedBonds = useMemo(() => {
    if (selectedSort) {
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
  }; */

  return (
    <div className={"bonds"}>
      <button onClick={bondsRequest} className="ButtonBonds">
        get bonds
      </button>
      <h1>Bonds</h1>
      {/* 
      <button onClick={bondsRequest} className="ButtonBonds">
        get bonds
      </button>
      <div className="searchSort">
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
          <div className="bondItem">
            <BondItem bond={bond} key={bond.figi} />
          </div>
        ))}
      </div>

      <BondsList /> */}
    </div>
  );
};

export default Bonds;
