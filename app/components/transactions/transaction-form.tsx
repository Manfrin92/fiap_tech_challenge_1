import {  useEffect, useState } from 'react'
import { db } from '@/config/firebaseConnection'
import { collection, addDoc } from 'firebase/firestore'

import CustomSelect from '../select/Select'
import Input from '../input/Input'

import { Button } from '../button/Button'
import { TransactionFormProps } from './types'
import useStateController from '@/hooks/use-state-controller'

interface IBankStatementItem {
  date: string
  amount: number
  type: 'deposit' | 'transfer'
  userId: string,
  createdAt: Date
}

const TransactionForm = ({
  placeholderInput,
  placeholderSelect,
}: TransactionFormProps) => {

  const { triggerRefresh, userId } = useStateController()

  const [selectedTransaction, setSelectedTransaction] = useState('')
  const [amount, setAmount] = useState('');
  const [transactionType, setTransactionType] = useState([]);
  
  const fetchTransactionOptions = async () => {
    try {
      const data = await fetch('https://bytebank-api-uh6h.onrender.com/transaction-types');
      
      if (!data.ok) {
        console.error('Error fetching transaction types: HTTP', data.status);
        return;
      }
      
      const resp = await data.json();
      setTransactionType(resp)
      return resp;
    } catch (error) {
      console.error('Error fetching transaction types:', error);
      setTransactionType([])
    }
  }

  
  useEffect(() => {
    fetchTransactionOptions();
  },[])
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
       
    const newTransaction = {
      type: selectedTransaction,
      amount: Number(amount),
      createdAt: new Date(),
      userId: userId
    } as IBankStatementItem

      await addDoc(collection(db, "transactions"), {
        ...newTransaction
      })
      .then(() => {
        console.log('Dados salvos com sucesso')
      })
      .catch(() => {
        console.log('Gerou error')
      })
    triggerRefresh()
    setSelectedTransaction('')
    setAmount('') 
  }

  return (
    <form className="flex flex-col items-center lg:items-start md:items-start z-2"
    onSubmit={handleSubmit}
    >
      <CustomSelect
        borderColor="blue"
        options={transactionType}
        placeholder={placeholderSelect}
        className="mb-8 max-w-[21.875rem] h-10"
        onValueChange={setSelectedTransaction}
      />
      <div className='max-w-[9rem] md:max-w-[15.625rem]'>
        <Input
          placeholder={placeholderInput}
          className="border-[var(--color-green-dark)] mb-8 bg-white"
          id="price"
          label="Valor"
          labelStyle="text-white font-semibold text-center md:text-left lg:text-left"
          type="number"
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
      </div>
      <div className='max-w-[9rem] md:max-w-[15.625rem]'>
        <Button
          label="Concluir transação"
          onClick={() => {}}
          primary
          className="w-full bg-[var(--color-green-dark)] py-0"
          type="submit"
          disabled={Number(amount) <= 0  || !selectedTransaction}
        />
      </div>

    </form>
  )
}

export default TransactionForm
