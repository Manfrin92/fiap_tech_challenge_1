import { useEffect } from "react"
import { useRouter } from "next/router"
import useStateController from "@/hooks/use-state-controller"
import LoggedOutLayout from "@/components/logged-out-layout/logged-out-layout"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "@/config/firebaseConnection"
import { NextSeo } from "next-seo"

export default function Home() {
  const { setIsLoggedIn, isLoading, setIsLoading } = useStateController()
  const router = useRouter()

  useEffect(() => {
    setIsLoading(true)
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user)
      setIsLoading(false)
      if (user) {
        router.replace('/dashboard')
      }
    })
    return () => unsubscribe()
  }, [setIsLoggedIn, setIsLoading, router])

  if (isLoading) return null

  return (
    <>
      <NextSeo title="Bytebank | Homepage" />
      <div className="w-screen min-h-screen py-10 bg-gradient-to-b from-green-dark to-white">
        <div className="container">
          <LoggedOutLayout />
        </div>
      </div>
    </>
  )
}