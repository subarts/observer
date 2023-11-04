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
  count:0
}
// actions
export const addBonds=createAction("ADDBONDS")
export const searchBonds=createAction("SEARCHBONDS")
export const selectedSort=createAction("SELECTEDSORT")
export const selectNext=createAction("SELECTVIEWLIST")
export const selectPrev=createAction("SELECTPREV")

// reducers
 const reducer=createReducer(initialState,(builder)=>{
  builder
       addBonds("ADDBONDS",(state,action)=>{
       
        state.bonds=[...action.payload.bonds]
        })  
      searchBonds("SEARCHBONDS",(state,action)=>{
        state.searchQuerys=action.searchQuerys 
      })
       selectedSort("SELECTEDSORT", (state,action)=>{
        state.selectSort=action.selectSort
        state.bonds.sort((a,b) => {
          return a[action.selectSort].localeCompare(b[action.selectSort])}) 
      })
      selectNext("SELECTVIEWLIST",(state,action)=>{
        console.log(state.count)
        state.count=state.count+10
      
      })
      selectPrev("SELECTPREV",(state,action)=>{
      state.count=state.count-10
      console.log(state.count)
      })
  

}) 
export default reducer
/* export default createReducer(initialState,{
  [addBonds]: (state,action)=>{
  
   state.bonds=[...action.payload.bonds]
   } , 
 [searchBonds]: (state,action)=>{
   state.searchQuerys=action.searchQuerys 
 },
  [selectedSort]: (state,action)=>{
   state.selectSort=action.selectSort
   state.bonds.sort((a,b) => {
     return a[action.selectSort].localeCompare(b[action.selectSort])}) 
 },
 [selectNext]: (state,action)=>{
   console.log(state.count)
   state.count=state.count+10
 
 },
 [selectPrev]:(state,action)=>{
 state.count=state.count-10
 console.log(state.count)
 }


})  */