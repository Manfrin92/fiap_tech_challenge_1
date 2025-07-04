import React, { createContext, useContext, useState, ReactNode } from 'react';

interface TransactionContextType {
  refreshExtract: number;
  triggerRefresh: () => void;
}

const TransactionContext = createContext<TransactionContextType | undefined>(undefined);

interface TransactionProviderProps {
  children: ReactNode;
}

export const TransactionProvider: React.FC<TransactionProviderProps> = ({ children }) => {
  const [refreshExtract, setRefreshExtract] = useState(0);

  const triggerRefresh = () => {
    setRefreshExtract(prev => prev + 1);
  };

  return (
    <TransactionContext.Provider value={{ refreshExtract, triggerRefresh }}>
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransaction = () => {
  const context = useContext(TransactionContext);
  if (context === undefined) {
    throw new Error('useTransaction must be used within a TransactionProvider');
  }
  return context;
}; 