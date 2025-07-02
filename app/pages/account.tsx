import AsideNav from "@/components/aside-nav"
import DashboardHero from "@/components/dashboard-hero"
import BankStatement from "@/components/bank-statement"
import { NextSeo } from "next-seo"
import useStateController from "@/hooks/use-state-controller"

export default function AccountPage() {
  const {authStatus} = useStateController()

  return (
    <>
      <NextSeo title="Bytebank | Minha Conta" />
      {authStatus && (
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-5 py-5">
          <AsideNav />
          <div className="lg:col-span-7 flex flex-col gap-5">
            <DashboardHero />
          </div>
          <BankStatement />
        </div>
      )}
    </>
  )
}
