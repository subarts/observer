"use client"
import React, { children } from "react";
import store from ".";
import { Provider } from "react-redux";


export function ReduxProvider(){
  return <Provider store={store}>{children}</Provider>

}


