import InvestimentsCardLayout from './InvestimentCardLayout';
import InvestimentForm from './InvestimentForm';
import { InvestimentCardProps } from './types';

const InvestimentCard = ({
  title,
  transactionType,
  placeholderInput,
  placeholderSelect,
}: InvestimentCardProps) => {
  return (
    <InvestimentsCardLayout>
      <h5 className="font-bold text-white text-[25px] mb-6 text-center md:text-left lg:text-left">
        {title}
      </h5>
      <InvestimentForm
        transactionType={transactionType}
        placeholderInput={placeholderInput}
        placeholderSelect={placeholderSelect}
      />
    </InvestimentsCardLayout>
  );
};

export default InvestimentCard;
