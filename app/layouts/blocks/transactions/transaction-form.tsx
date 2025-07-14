import {  useState } from 'react'
import { db } from '@/config/firebaseConnection'
import { collection, addDoc } from 'firebase/firestore'

import { TransactionFormProps } from './types'
import useStateController from '@/hooks/use-state-controller'

import { transactionsData } from '@/data/global-data'
import { toast } from 'react-toastify'
import Input from '@/components/input'
import Button from '@/components/button'
import CustomSelect from '@/components/select'

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

  const { user } = useStateController()

  const [selectedTransaction, setSelectedTransaction] = useState('')
  const [amount, setAmount] = useState('');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
       
    const newTransaction = {
      type: selectedTransaction,
      amount: Number(amount),
      createdAt: new Date(),
      userId: user?.uid
    } as IBankStatementItem

      await addDoc(collection(db, "transactions"), {
        ...newTransaction
      })
      .then(() => {
       toast.success('Dados salvos com sucesso')
      })
      .catch(() => {
        toast.error('Gerou error')
      })
    setSelectedTransaction('')
    setAmount('') 
  }

  return (
    <form className="flex flex-col items-center lg:items-start md:items-start z-2"
    onSubmit={handleSubmit}
    >
      <CustomSelect
        borderColor="blue"
        options={transactionsData?.transactionType}
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