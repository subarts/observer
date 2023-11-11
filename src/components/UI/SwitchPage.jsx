import React from "react"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { dispatch } from "./Dispatch"
import { selectNext, selectPrev } from "../../store/Reducers"
const SwitcherPage = (props) => {
  const count = useSelector((state) => state.rootReduser.toolKit.count)

  let pageCount = count / 10
  const counterAdd = () => {
    dispatch(selectNext())
  }
  const counterDel = () => {
    dispatch(selectPrev())
  }
  const bondsLength = [...Object.values(props)]

  return (
    <div className="switchPage">
      {pageCount <= 0 ? (
        <button onClick={counterDel} className="ButtonList" disabled>
          prev page bonds
        </button>
      ) : (
        <button onClick={counterDel} className="ButtonList">
          prev page bonds
        </button>
      )}
      Page: {pageCount + 1}/{Math.ceil(bondsLength / 10)}
      {pageCount >= bondsLength / 10 - 1 ? (
        <button onClick={counterAdd} className="ButtonList" disabled>
          prev page bonds
        </button>
      ) : (
        <button onClick={counterAdd} className="ButtonList">
          next page bonds
        </button>
      )}
    </div>
  )
}
export default SwitcherPage
