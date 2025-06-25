/* eslint-disable react-hooks/exhaustive-deps */
import { extractData } from '@/data/global-data'
import useLocalStorage from '@/hooks/useLocalStorage'
import { formatDate, formatMonth } from '@/utils/date'
import React, { useEffect } from 'react'

interface IExtractItem {
  date: string
  amount: number
  type: 'deposit' | 'transfer'
}

interface IExtract {
  title: string
  transactions: IExtractItem[]
}

const Extract = () => {
  const { title, transactions } = extractData as IExtract
  const [storedValue, setValue, getValue] = useLocalStorage('extract-data', transactions)

  useEffect(() => {
    getValue()
  }, [storedValue])

  return (
    <section className='lg:col-span-3 rounded-lg bg-white px-6 py-8'>
      <h2 className='text-[1.5625rem] font-semibold'>{title}</h2>
      <ul>
        {storedValue.map((transaction, index) => (
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

export default Extract
