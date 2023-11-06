"use client"
import React from "react"
import { useSelector } from "react-redux/es/hooks/useSelector"
import store from "../../store"

const AboutBond = (props) => {
  const bonds = useSelector((state) => state.rootReduser.toolKit.bonds)

  const bond = bonds.filter((bond) => bond.figi == props.bond)

  return (
    <>
      <ul className="bondInformation">
        <li>Name: {bond[0].name}</li>
        <li>Ticker: {bond[0].ticker}</li>
        <li>Figi: {bond[0].figi}</li>
        <li>Amortization: {bond[0].amortizationFlag.toString()}</li>
        <li>Country Of Risk Name: {bond[0].countryOfRiskName}</li>
        <li>Coupon Quantity Per Year: {bond[0].couponQuantityPerYear}</li>
        <li>Sector: {bond[0].sector}</li>
        <li>Currency: {bond[0].currency}</li>
        <li>For qual investor: {bond[0].forQualInvestorFlag.toString()}</li>
        <li>Maturity date: {bond[0].maturityDate}</li>
        <li>Real exchange: {bond[0].realExchange}</li>
        <li>Risk level: {bond[0].riskLevel}</li>
        <li>Trading status: {bond[0].tradingStatus}</li>
      </ul>
    </>
  )
}
export default AboutBond

{
  /* <ul>
        <li>Name: {bond[0].name}</li>
        <li>Ticker:{bond[0].ticker}</li>
        <li>Figi:{bond[0].figi}</li>
        <li>Amortization:{bond[0].amortizationFlag}</li>
        <li>Country Of Risk Name:{bond[0].countryOfRiskName}</li>
        <li>Coupon Quantity Per Year:{bond[0].couponQuantityPerYear}</li>
        <li>Sector:{bond[0].sector}</li>
        <li>Currency:{bond[0].currency}</li>
        <li>For qual investor:{bond[0].forQualInvestorFlag}</li>
        <li>Maturity date:{bond[0].maturityDate}</li>
        <li>Real exchange:{bond[0].realExchange}</li>
        <li>Risk level:{bond[0].riskLevel}</li>
      </ul> */
}
