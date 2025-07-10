import React, { createContext, useState, useEffect } from 'react'
import type { User } from "firebase/auth";

interface IStateControllerContext {
  isAuthModalOpen: boolean
  setIsAuthModalOpen: (value: boolean) => void
  isLoggedIn: boolean
  setIsLoggedIn: (value: boolean) => void
  currentAuthModal: 'login' | 'subscribe'
  setCurrentAuthModal: (value: 'login' | 'subscribe') => void
  refreshExtract: number
  triggerRefresh: () => void
  balance: number
  updateBalance: () => Promise<void>
  isLoading: boolean
  userId: string
  createUserId: () => void
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
  refreshExtract: 0,
  triggerRefresh: () => {},
  balance: 0,
  updateBalance: async () => {},
  isLoading: false,
  userId: '',
  createUserId: () => {},
  user: null,
  setUser: () => {}
}

export const StateControllerContext =
  createContext<IStateControllerContext>(initialState)

const StateControllerProvider = ({ children }: React.PropsWithChildren) => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(initialState.isLoggedIn)
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(initialState.isAuthModalOpen)
  const [currentAuthModal, setCurrentAuthModal] = useState<'login' | 'subscribe'>(initialState.currentAuthModal)
  const [refreshExtract, setRefreshExtract] = useState<number>(initialState.refreshExtract)
  const [balance, setBalance] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [userId, setUserId] = useState('')
  const [user, setUser] = useState<User | null>(null);


  function getOrCreateUserId() {
    let storedUserId = localStorage.getItem('userId');
    if (!storedUserId) {
      storedUserId = crypto.randomUUID();
      localStorage.setItem('userId', storedUserId);
    }
    return storedUserId;
  }

  const createUserId = () => {
    const newUserId = getOrCreateUserId();
    setUserId(newUserId);
  }

  const updateBalance = async () => {
    // Se não há userId no estado, tentar pegar do localStorage
    let currentUserId = userId;
    if (!currentUserId) {
      currentUserId = localStorage.getItem('userId') || '';
    }
    
    if (!currentUserId) {
      console.log('No userId available for balance update');
      return;
    }
    
    setIsLoading(true);
    try {
      const data = await fetch(`https://bytebank-api-uh6h.onrender.com/amount/${currentUserId}`);
      
      if (!data.ok) {
        console.error('Error fetching balance: HTTP', data.status);
        return;
      }
      
      const response = await data.json();
      setBalance(response.totalAmount);
    } catch (error) {
      console.error('Error fetching balance:', error);
      // Se não conseguir fazer parse do JSON, definir saldo como 0
      setBalance(0);
    } finally {
      setIsLoading(false);
    }
  };

  const triggerRefresh = () => {
    setRefreshExtract(prev => prev + 1)
  }

  useEffect(() => {
    const existingUserId = localStorage.getItem('userId');
    if (existingUserId) {
      setUserId(existingUserId);
    }
  }, []);

  useEffect(() => {
    if (userId) {
      updateBalance();
    }
  }, [userId]);

  useEffect(() => {
    // Atualizar balance quando refreshExtract mudar (quando uma transação for criada)
    if (userId && refreshExtract > 0) {
      updateBalance();
    }
  }, [refreshExtract, userId]);

  return (
    <StateControllerContext.Provider
      value={{
        isAuthModalOpen,
        setIsAuthModalOpen,
        isLoggedIn,
        setIsLoggedIn,
        currentAuthModal,
        setCurrentAuthModal,
        refreshExtract,
        triggerRefresh,
        balance,
        updateBalance,
        isLoading,
        userId,
        createUserId,
        user,
        setUser,
      }}
    >
      {children}
    </StateControllerContext.Provider>
  )
}

export default StateControllerProvider
