import React, { createContext, useState, useEffect } from 'react'
import type { User } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/config/firebaseConnection";
import { IBankStatementItem } from '@/components/bank-statement/bank-statement';
import { collection, query, orderBy, onSnapshot, where } from "firebase/firestore";
import { db } from "@/config/firebaseConnection";

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
  bankStatement: IBankStatementItem[];
  setBankStatement: (items: IBankStatementItem[]) => void;
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
  setUser: () => {}, 
  bankStatement: [],
  setBankStatement: () => {},
}

export const StateControllerContext =
  createContext<IStateControllerContext>(initialState)

const StateControllerProvider = ({ children }: React.PropsWithChildren) => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(initialState.isLoggedIn)
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(initialState.isAuthModalOpen)
  const [currentAuthModal, setCurrentAuthModal] = useState<'login' | 'subscribe'>(initialState.currentAuthModal)
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState<User | null>(null);
  const [bankStatement, setBankStatement] = useState<IBankStatementItem[]>([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);           // Atualiza o contexto com o user do Firebase
      setIsLoggedIn(!!firebaseUser);   // Atualiza o status de login
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user?.uid) return;
    setIsLoading(true)
    const statementRef = collection(db, "transactions");
    const q = query(statementRef, orderBy("createdAt", "desc"), where("userId", "==", user.uid));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const list: IBankStatementItem[] = [];
      snapshot.forEach((doc) => {
        const timestamp = doc.data().createdAt;
        const date = timestamp.toDate();
        const dateString = date.toISOString();
        list.push({
          type: doc.data().type,
          amount: doc.data().amount,
          createdAt: dateString,
        });
      });
      setBankStatement(list);
      setIsLoading(false)
    });
    return () => unsubscribe();
  }, [user?.uid, setIsLoading, setBankStatement]);


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
        bankStatement,
        setBankStatement,
      }}
    >
      {children}
    </StateControllerContext.Provider>
  )
}

export default StateControllerProvider


