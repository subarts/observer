import React, { useEffect } from "react"
import { useSelector } from "react-redux/es/hooks/useSelector"
import store from "../../store"
import { searchBond } from "../../store/actionCreators"
const SearchBond = () => {
  const searchQuery = useSelector(
    (state) => state.rootReduser.toolKit.searchQuerys
  )

  const search = (value) => {
    store.dispatch(searchBond(value))
  }

  return (
    <div className="searchSort">
      <form className="searchForm">
        <b>search</b>
        <input
          value={searchQuery}
          onChange={(e) => search(e.target.value)}
          placeholder="search"
        ></input>
      </form>
    </div>
  )
}

export default SearchBond
