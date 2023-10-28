import { createAction, createReducer } from "@reduxjs/toolkit";



   const initialState={
  bonds:["one"],
  searchQuery: "searchQuery "
}
export const addBonds=createAction("ADDBONDS")
export const searchBonds=createAction("SEARCHBONDS")

export default createReducer(initialState,{
       [addBonds]: function(state,action){
        state.bonds=[...state.bonds,...action.payload.bonds]
        console.log("working!",[...state.bonds])
    
        
   
        } , 
      [searchBonds]:  function(state){
       console.log(state.searchQuery)
       }
    
       
      
      


})

