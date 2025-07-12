import { useEffect } from "react"
import { useRouter } from "next/router"
import useStateController from "@/hooks/use-state-controller"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "@/config/firebaseConnection"

export default function useRequireAuth() {
  const { authStatus, setIsLoggedIn, isLoading, setIsLoading } = useStateController()
  const router = useRouter()

  useEffect(() => {
    setIsLoading(true)
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user)
      setIsLoading(false)
    })
    return () => unsubscribe()
  }, [setIsLoggedIn, setIsLoading])

  useEffect(() => {
    if (!isLoading && !authStatus) {
      router.replace('/')
    }
  }, [isLoading, authStatus, router])

  return { isLoading, authStatus }
}
