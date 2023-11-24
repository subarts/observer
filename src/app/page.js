
import Link from "next/link";
export default function home() {

  return (
   <main className="flex min-h-screen items-center justify-between ">
      <Link href={"./bonds"}><button>Bonds</button></Link>
     
    </main>
  )
}
/* import store from "../store/index"
import { Provider } from "react-redux" */