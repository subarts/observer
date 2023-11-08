import React from "react"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { dispatch } from "../../store/dispatch"
import { selectNext, selectPrev } from "../../store/Reducers"
const SwitcherPage = (props) => {
  const count = useSelector((state) => state.rootReduser.toolKit.count)
  let pageCount = count / 5
  const counterAdd = () => {
    dispatch(selectNext())
  }
  const counterDel = () => {
    dispatch(selectPrev())
  }
  const bonds = { ...props }
  return (
    <div className="switchPage">
      {pageCount === 0 ? (
        <button onClick={counterDel} className="ButtonList" disabled>
          get prev bonds
        </button>
      ) : (
        <button onClick={counterDel} className="ButtonList">
          get prev bonds
        </button>
      )}
      Page: {pageCount + 1}/{Math.ceil(bonds.props.length / 5)}
      {pageCount >= Math.ceil(bonds.props.length / 5 - 1) ? (
        <button onClick={counterAdd} className="ButtonList" disabled>
          get next bonds
        </button>
      ) : (
        <button onClick={counterAdd} className="ButtonList">
          get next bonds
        </button>
      )}
    </div>
  )
}
export default SwitcherPage
