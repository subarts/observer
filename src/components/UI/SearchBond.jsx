import React from "react"
import { useSelector } from "react-redux/es/hooks/useSelector"
import store from "../../store/index"
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
      <form className="searchForm" name="form">
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
