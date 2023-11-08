"use client"
import Link from "next/link";
export default function home() {

  return (
   <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={"./bonds"}><button>onclick</button></Link>
     
    </main>
  )
}
/* import store from "../store/index"
import { Provider } from "react-redux" */