import { createAction, createReducer } from "@reduxjs/toolkit";



   const initialState={
  bonds:[{ name: "name",
          figi: "figi",
          ticker: "ticker",
          currency: "currency",
          maturityDate: "maturity date",
          couponQuantity:"coupon quantity",
}],
searchQuerys:"seacrh"
}
export const addBonds=createAction("ADDBONDS")
export const searchBonds=createAction("SEARCHBONDS")
//up actions


//down reducers
export default createReducer(initialState,{
       [addBonds]: function(state,action){
        state.bonds=[...action.payload.bonds]
        } , 
      [searchBonds]: function(state,action){
        state.searchQuerys=action.searchQuerys
        console.log(state.searchQuerys)
     
        //state.searchQuerys==initialState.searchQuerys:state.searchQuerys=action.searchQuerys
     
        
       

      }
       
      
      


})

