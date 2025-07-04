import { useState } from 'react';

import CustomSelect from '../select/Select';
import Input from '../input/Input';
import useLocalStorage from '@/hooks/use-local-storage';
import { useTransaction } from '@/contexts/transaction-context';

import { Button } from '../button/Button';
import { TransactionFormProps } from './types';

interface IBankStatementItem {
  date: string
  amount: number
  type: 'deposit' | 'transfer'
}

const TransactionForm = ({
  transactionType,
  placeholderInput,
  placeholderSelect,
}: TransactionFormProps) => {

  const { storedValue, setValue } = useLocalStorage<IBankStatementItem[]>('statement', []);
  const { triggerRefresh } = useTransaction();

  const [selectedTransaction, setSelectedTransaction] = useState('');
  const [amount, setAmount] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newTransaction = {
      type: selectedTransaction,
      amount: Number(amount),
      date: new Date().toISOString().split('T')[0],
    } as IBankStatementItem;

    setValue([...storedValue, newTransaction]);
    
    // Usa o context para notificar a atualização
    triggerRefresh();
    
    setSelectedTransaction('');
    setAmount('');
  }

  return (
    <form className="flex flex-col items-center lg:items-start md:items-start z-2"
    onSubmit={handleSubmit}
    >
      <CustomSelect
        borderColor="blue"
        options={transactionType}
        placeholder={placeholderSelect}
        className="mb-8 max-w-[350px] h-10"
        onValueChange={setSelectedTransaction}
      />
      <div className='max-w-[144px] md:max-w-[250px] lg:max-w-[250px]'>
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
      <div className='max-w-[144px] md:max-w-[250px] lg:max-w-[250px]'>
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
  );
};

export default TransactionForm;
