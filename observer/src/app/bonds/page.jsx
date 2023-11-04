"use client"
import React from "react"
import SomeInformation from "../../components/UI/SomeInformation"
import BondsCatalog from "../../components/UI/BondsCatalog"
import store from "../../store"
import { Provider } from "react-redux"
export default function Bonds() {
  return (
    <>
      <Provider store={store}>
        <SomeInformation />
        <BondsCatalog />
      </Provider>
    </>
  )
}
