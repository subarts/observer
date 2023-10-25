import { createAction, createReducer } from "@reduxjs/toolkit";


const inicialState={
  count:0,
  array: [0,1,2,3,4]
}
export  const increment=createAction("INCRIMENT")
export const decrement=createAction("DECRIMENT")
export default createReducer(inicialState,{
  [increment]: function(state){
     state.count =state.count +1
     console.log(state.count)},
     [decrement]: function(state){
      state.array=[...state.array,state.array.unshift()+1]
      console.log(state.array)},
})