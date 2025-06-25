import { NextSeo } from "next-seo"
import AsideNav from "@/components/aside-nav"
import DashboardHero from "@/components/dashboard-hero"
import Extract from "@/components/extract"

import useLocalStorage from "@/hooks/useLocalStorage"

export default function TransfersPage() {
  const [valueStorage, setValueStorage, getValueStorage] = useLocalStorage(
    "welcome",
    "This item was get in Local Storage"
  )

  return (
    <>
      <NextSeo title="Bytebank | Transfers" />
      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-5 py-5">
        <AsideNav />
        <div className="lg:col-span-7 flex flex-col gap-5">
          <DashboardHero />
        </div>
        <Extract />
      </div>
      {/* <h1>{valueStorage}</h1>
      <button className='bg-green-dark text-white mr-3 p-2 mt-3' onClick={() => setValueStorage("You are here again")}>Click me</button>
      <button className='bg-green-light' onClick={() => alert(getValueStorage())}>Ler direto do localStorage</button> */}
    </>
  )
}
