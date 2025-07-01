import AsideNav from "@/components/aside-nav"
import DashboardHero from "@/components/dashboard-hero"
import BankStatement from "@/components/bank-statement"
import { NextSeo } from "next-seo"
import { TransactionsData } from "@/data/global-data";

import TransactionCard from "@/components/transactions/transaction-card";



export default function Home() {
  const { title, transactionType, placeholderInput, placeholderSelect } =
  TransactionsData;

  return (
    <>
      <NextSeo title="Bytebank | Homepage" />
      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-5 py-5">
        <AsideNav />
        <div className="lg:col-span-7 flex flex-col gap-5">
          <DashboardHero />
          <TransactionCard
            title={title}
            transactionType={transactionType}
            placeholderInput={placeholderInput}
            placeholderSelect={placeholderSelect}
          />
        </div>
        <BankStatement />
 
      </div>
    </>
  )
}
