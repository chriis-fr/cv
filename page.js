'use client'
import Details from "./components/sec1";
import Details2 from "./components/sec2";
import Sec3 from "./components/sec3";

const Page = () => {
  return(
    <div className="text-center bg-indigo-500 rounded border-4 border-orange-300">
      <h1 className="text-zonc-50 underline text-green-300">CV APPLICATION</h1>
      <Details />
      <Details2 />
      <Sec3 />
    </div>
  )
}

export default Page;