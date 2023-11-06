import React from "react"
import SomeInformation from "../../components/UI/SomeInformation"
import Image from "next/image"
import BondPanel from "../../components/UI/BondPanel"
export default function BondWindow() {
  return (
    <div /*  className="bondInform" */>
      <SomeInformation />
      <BondPanel />
      <aside>information about bond</aside>
      <Image
        src="/image_2023-11-06_10-24-02.png"
        priority={true}
        width={1000}
        height={1000}
        alt="Picture of the author"
      />
    </div>
  )
}
