
import { createAction, createReducer } from "@reduxjs/toolkit";

   const initialState={
        bonds:[{ name: "name",
          figi: "figi",
          ticker: "ticker",
          currency: "currency",
          maturityDate: "maturity date",
          couponQuantity:"coupon quantity",
}],
  searchQuerys:"",
  selectSort:"sort by",
  count:0,
  numberItems:5

}
// actions
export const addBonds=createAction("ADDBONDS")
export const searchBonds=createAction("SEARCHBONDS")
export const selectedSort=createAction("SELECTEDSORT")
export const selectNext=createAction("SELECTVIEWLIST")
export const selectPrev=createAction("SELECTPREV")
export const selectNumbItems=createAction("SELECTNUMBITEMS")

// reducers
 const reducers = createReducer(initialState,(builder)=>{
  builder
        .addCase(addBonds,(state,action)=>{
        state.bonds=[...action.payload.bonds]
        })  
        .addCase(searchBonds,(state,action)=>{
        state.searchQuerys=action.searchQuerys 
      })
      .addCase(selectedSort, (state,action)=>{
        state.selectSort=action.selectSort
        state.bonds.sort((a,b) => {
          return a[action.selectSort].localeCompare(b[action.selectSort])}) 
      })
      .addCase(selectNext,(state,action)=>{
        state.count=state.count+ state.numberItems
 
      })
      .addCase(selectPrev,(state,action)=>{
      state.count=state.count- state.numberItems
  
       })
       .addCase(selectNumbItems,(state,action)=>{
        state.numberItems=action.numberItems
        
         })
  

}) 
export default reducers

