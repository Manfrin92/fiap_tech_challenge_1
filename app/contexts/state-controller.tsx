import React, { createContext, useState, useEffect } from 'react'
import type { User } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/config/firebaseConnection";

interface IStateControllerContext {
  isAuthModalOpen: boolean
  setIsAuthModalOpen: (value: boolean) => void
  isLoggedIn: boolean
  setIsLoggedIn: (value: boolean) => void
  currentAuthModal: 'login' | 'subscribe'
  setCurrentAuthModal: (value: 'login' | 'subscribe') => void
  isLoading: boolean
  setIsLoading: (value: boolean) => void
  user: User | null;
  setUser: (user: User | null) => void;
}

const initialState: IStateControllerContext = {
  isAuthModalOpen: false,
  setIsAuthModalOpen: () => {},
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  currentAuthModal: 'login',
  setCurrentAuthModal: () => {},
  isLoading: false,
  setIsLoading: () => {},
  user: null,
  setUser: () => {}
}

export const StateControllerContext =
  createContext<IStateControllerContext>(initialState)

const StateControllerProvider = ({ children }: React.PropsWithChildren) => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(initialState.isLoggedIn)
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(initialState.isAuthModalOpen)
  const [currentAuthModal, setCurrentAuthModal] = useState<'login' | 'subscribe'>(initialState.currentAuthModal)
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);           // Atualiza o contexto com o user do Firebase
      setIsLoggedIn(!!firebaseUser);   // Atualiza o status de login
    });
    return () => unsubscribe();
  }, []);


  return (
    <StateControllerContext.Provider
      value={{
        isAuthModalOpen,
        setIsAuthModalOpen,
        isLoggedIn,
        setIsLoggedIn,
        currentAuthModal,
        setCurrentAuthModal,
        isLoading,
        setIsLoading,
        user,
        setUser,
      }}
    >
      {children}
    </StateControllerContext.Provider>
  )
}

export default StateControllerProvider
