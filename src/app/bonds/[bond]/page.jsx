import React from "react"
import SomeInformation from "../../../components/UI/SomeInformation"
import Image from "next/image"
import BondPanel from "../../../components/UI/BondPanel"
/* import BondDescript from "../../components/UI/BondItem" */
import { useSelector } from "react-redux/es/hooks/useSelector"
import AboutBond from "../../../components/UI/AboutBond"
export default function BondWindow({ params }) {
  return (
    <div className="bondPage" /*  className="bondInform" */>
      <SomeInformation />
      <BondPanel />
      <div className="bondGraph">
        <AboutBond {...params} />
        <Image
          src="/image_2023-11-06_10-24-02.png"
          priority={true}
          width={1000}
          height={1000}
          alt="Picture of the author"
        />
      </div>
    </div>
  )
}
