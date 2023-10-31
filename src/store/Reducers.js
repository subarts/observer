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
  selectSort:"sort by"
}
// actions
export const addBonds=createAction("ADDBONDS")
export const searchBonds=createAction("SEARCHBONDS")
export const selectedSort=createAction("SELECTEDSORT")



// reducers
export default createReducer(initialState,{
       [addBonds]: function(state,action){
       
        state.bonds=[...action.payload.bonds]
        } , 
      [searchBonds]: function(state,action){
        state.searchQuerys=action.searchQuerys 
      },
       [selectedSort]: function(state,action){
        state.bonds.sort((a,b) => {
          return a[action.selectSort].localeCompare(b[action.selectSort])
        
        }) 
     
      
      }
      
  

})

