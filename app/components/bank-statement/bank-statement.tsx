import { bankStatementData } from '@/data/global-data'
import { formatDate, formatMonth } from '@/utils/date'
import React, { useEffect, useState } from 'react'
import useStateController from '@/hooks/use-state-controller'

// TODO: This should not be at the component level
export interface IBankStatementItem {
  date: string
  amount: number
  type: 'deposit' | 'transfer'
}

export interface IBankStatement {
  title: string
  transactions: IBankStatementItem[]
}

const BankStatement = () => {
  const { title } = bankStatementData as IBankStatement
  const [currentStatement, setCurrentStatement] = useState<IBankStatementItem[]>([])
  const { userId } = useStateController()

  // Limpar statement quando userId mudar
  useEffect(() => {
    setCurrentStatement([]);
  }, [userId]);

  useEffect(() => {
    if (userId) {
      fetchStatment(userId);
    }
  }, [userId])

  const fetchStatment = async(id: string) =>  {
      try {
        const data = await fetch(`https://bytebank-api-uh6h.onrender.com/transactions/${id}`);
        
        if (!data.ok) {
          console.error('Error fetching transactions: HTTP', data.status);
          setCurrentStatement([]);
          return;
        }
        
        const response = await data.json();
        setCurrentStatement(response)
        return response;

      } catch(error) {
        console.log('Error to fetch data', error)
        // Se não conseguir fazer parse do JSON, usar array vazio
        setCurrentStatement([])
      }
  }
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
              {formatMonth(transaction.date)}
            </span>
            <div className='flex items-center justify-between'>
              <p className='!leading-none'>
                {transaction.type === 'deposit' ? 'Depósito' : 'Transferência'}
              </p>
              <span className='text-xs text-[#8B8B8B]'>{formatDate(transaction.date)}</span>
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
