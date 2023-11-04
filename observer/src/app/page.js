import Link from "next/link";
import store from "../store";

export default function home() {
  return (
   
   <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={"./bonds"}><button>onclick</button></Link>
     
    </main>
  )
}
