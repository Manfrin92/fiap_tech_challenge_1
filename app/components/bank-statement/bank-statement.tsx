import { bankStatementData } from '@/data/global-data'
import { formatDate, formatMonth } from '@/utils/date'
import React, { useEffect, useState } from 'react'
import useStateController from '@/hooks/use-state-controller'

import { collection, onSnapshot, query, orderBy, where } from 'firebase/firestore'
import { db } from '@/config/firebaseConnection'
export interface IBankStatementItem {
  amount: number
  type: 'deposit' | 'transfer',
  createdAt: string,
}
export interface IBankStatement {
  title: string
  transactions: IBankStatementItem[]
}

const BankStatement = () => {
  const { title } = bankStatementData
  const [currentStatement, setCurrentStatement] = useState<IBankStatementItem[]>([])
  const { userId } = useStateController()

  useEffect(() => {
    async function loadStatements() {
      if (userId) {
        const statementRef = collection(db, "transactions")
        const q = query(statementRef, orderBy("createdAt", "desc"), where("userId", "==", userId))
        onSnapshot(q, (snapshot) => {
          const list: IBankStatementItem[] = [];

          snapshot.forEach((doc) => {
            const timestamp = doc.data().createdAt;
            const date = timestamp.toDate(); // Converte Timestamp para Date
            const dateString = date.toISOString(); // Converte para string ISO
            
            list.push({
              type: doc.data().type,
              amount: doc.data().amount,
              createdAt: dateString,
            });
          })

          console.log("teste", list)
          setCurrentStatement(list);
        })
      }
    }

    loadStatements()
  }, [userId])

  return (
    <section className='lg:col-span-3 rounded-lg bg-white px-6 py-8'>
      <h2 className='text-[1.5625rem] font-semibold'>{title}</h2>
      <ul>
        {currentStatement.map((transaction, index) => (
          <li
            key={`transaction-${index}`}
            className='flex flex-col gap-2 pt-6 pb-2 border-b border-green'
          >
            <span className='text-xs text-green font-semibold'>
              {formatMonth(transaction.createdAt)}
            </span>
            <div className='flex items-center justify-between'>
              <p className='!leading-none'>
                {transaction.type === 'deposit' ? 'Depósito' : 'Transferência'}
              </p>
              <span className='text-xs text-[#8B8B8B]'>{formatDate(transaction.createdAt)}</span>
            </div>
            <span className='font-semibold'>
              {`${transaction.type !== 'deposit' ? '-' : ''}R$ ${transaction.amount}`}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default BankStatement
