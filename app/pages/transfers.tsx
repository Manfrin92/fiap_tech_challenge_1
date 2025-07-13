import { NextSeo } from "next-seo"
import AsideNav from "@/components/aside-nav"
import DashboardHero from "@/components/dashboard-hero"
import BankStatement from "@/components/bank-statement"
import TransactionCard from "@/components/transactions"
import useRequireAuth from "@/hooks/use-require-auth"

export default function TransfersPage() {
  const { isLoading, authStatus } = useRequireAuth()

  if (isLoading || !authStatus) return null

  return (
    <>
      <NextSeo title="Bytebank | Transfers" />
      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-5 py-5">
        <AsideNav />
        <div className="lg:col-span-7 flex flex-col gap-5">
          <DashboardHero />
          <TransactionCard />
        </div>
        <BankStatement />
      </div>
    </>
  )
}
