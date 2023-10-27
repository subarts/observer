import { createAction, createReducer } from "@reduxjs/toolkit";
import GetBonds from "../API/RestRequest";



let arr=[]
async function fetchBonds() {
  const response = await GetBonds();
   return arr=response.data.instruments}
const inicialState={
  bonds:[]
}
export const addBonds=createAction("ADDBONDS")
fetchBonds()
export default createReducer(inicialState,{
      [addBonds]: function(state){
       state.bonds=arr
        } 
        
       
      
      

      
      
})