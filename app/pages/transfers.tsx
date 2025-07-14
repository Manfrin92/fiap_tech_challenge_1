import { NextSeo } from "next-seo"
import AsideNav from "@/layouts/blocks/aside-nav"
import DashboardHero from "@/layouts/blocks/dashboard-hero"
import BankStatement from "@/layouts/blocks/bank-statement"
import TransactionCard from "@/layouts/blocks/transactions"
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
