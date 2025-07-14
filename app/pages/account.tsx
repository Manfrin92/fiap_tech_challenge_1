import AsideNav from "@/layouts/blocks/aside-nav"
import { NextSeo } from "next-seo"
import Account from "@/layouts/blocks/account"
import useRequireAuth from "@/hooks/use-require-auth"

export default function AccountPage() {
  const { isLoading, authStatus } = useRequireAuth()

  if (isLoading || !authStatus) return null

  return (
    <>
      <NextSeo title="Bytebank | Account" />
      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-5 py-5">
        <AsideNav />
        <div className="lg:col-span-10">
          <Account />
        </div>
      </div>
    </>
  )
}
