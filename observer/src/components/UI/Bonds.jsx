import React from "react"
import SearchBond from "./SearchBond"
import SelectSort from "./SelectSort"
import { dispatch } from "../../store/dispatch"
import BondsList from "./BondsList"
import GetBonds from "../../API/RestRequestBonds"
import { bondsAdd } from "../../store/actionCreators"
const Bonds = () => {
  let arrayBonds = []
  fetchBonds()
  async function fetchBonds() {
    const response = await GetBonds()
    return (arrayBonds = [...response.data.instruments])
  }

  const bondsRequest = () => {
    dispatch(bondsAdd(arrayBonds))
  }

  return (
    <div className={"bonds"}>
      <h1>Bonds</h1>
      <button onClick={bondsRequest} className="ButtonBonds">
        get bonds
      </button>

      <SearchBond />
      <SelectSort />
      <BondsList />
    </div>
  )
}

export default Bonds
