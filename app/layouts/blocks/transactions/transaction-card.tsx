import TransactionsCardLayout from './transaction-card-layout'
import TransactionForm from './transaction-form'
import { transactionsData } from '@/data/global-data'

import Graphism from '@/assets/images/graphism-blue.svg'

const TransactionCard = () => {

  const {
    title,
    transactionType,
    placeholderInput,
    placeholderSelect,
  } = transactionsData


  return (
    <TransactionsCardLayout>
      <h5 className="font-bold text-white text-[25px] mb-6 text-center md:text-left z-2">
        {title}
      </h5>
      <Graphism className='absolute bottom-0 left-0 w-[9rem] md:w-[11.25rem] h-auto' />
      <Graphism className='absolute top-0 right-0 w-[9rem] md:w-[11.25rem] h-auto rotate-180' />
      <TransactionForm
        transactionType={transactionType}
        placeholderInput={placeholderInput}
        placeholderSelect={placeholderSelect}
      />
    </TransactionsCardLayout>
  )
}

export default TransactionCard
