import TransactionsCardLayout from './transaction-card-layout';
import TransactionForm from './transaction-form';
import { TransactionCardProps } from './types';

import Image from 'next/image';

import image1 from '@/assets/images/transaction-mobile.png';
import image2 from '@/assets/images/transaction-tablet.png';
import image3 from '@/assets/images/transaction-desktop.png';

const TransactionCard = ({
  title,
  transactionType,
  placeholderInput,
  placeholderSelect,
  imageAlt,
}: TransactionCardProps) => {
  return (
    <TransactionsCardLayout>
      <h5 className="font-bold text-white text-[25px] mb-6 text-center md:text-left lg:text-left">
        {title}
      </h5>
      <Image
        className="md:hidden lg:hidden absolute top-0 left-0 w-full h-full"
        src={image1}
        alt={imageAlt}
        width={500}
        height={300}
      />
      <Image
        className="hidden md:block lg:hidden absolute top-0 left-0 w-full h-full"
        src={image2}
        alt={imageAlt}
        width={500}
        height={300}
      />
      <Image
        className="hidden md:hidden lg:block absolute top-0 left-0 w-full h-full"
        src={image3}
        alt=""
        aria-hidden="true"
        width={500}
        height={300}
      />
      <TransactionForm
        transactionType={transactionType}
        placeholderInput={placeholderInput}
        placeholderSelect={placeholderSelect}
      />
    </TransactionsCardLayout>
  );
};

export default TransactionCard;
