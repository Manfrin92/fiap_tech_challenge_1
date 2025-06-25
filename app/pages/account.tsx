import AsideNav from "@/components/aside-nav"
import DashboardHero from "@/components/dashboard-hero"
import Extract from "@/components/extract"
import { NextSeo } from "next-seo"

export default function AccountPage() {
  return (
    <>
      <NextSeo title="Bytebank | Account" />
      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-5 py-5">
        <AsideNav />
        <div className="lg:col-span-7 flex flex-col gap-5">
          <DashboardHero />
        </div>
        <Extract />
      </div>
    </>
  )
}
