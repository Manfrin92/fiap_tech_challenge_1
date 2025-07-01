import TransactionsCardLayout from './TransactionCardLayout';
import TransactionForm from './TransactionForm';
import { TransactionCardProps } from './types';

const TransactionCard = ({
  title,
  transactionType,
  placeholderInput,
  placeholderSelect,
}: TransactionCardProps) => {
  return (
    <TransactionsCardLayout>
      <h5 className="font-bold text-white text-[25px] mb-6 text-center md:text-left lg:text-left">
        {title}
      </h5>
      <TransactionForm
        transactionType={transactionType}
        placeholderInput={placeholderInput}
        placeholderSelect={placeholderSelect}
      />
    </TransactionsCardLayout>
  );
};

export default TransactionCard;
