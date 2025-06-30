import { investimentsData } from '@/data/global-data';
import Input from '../input/Input';
import CustomSelect from '../select/Select';
import { Button } from '../button/Button';

const InvestimentCard = () => {
  const { title, placeholderSelect, transactionType, placeholderInput } =
    investimentsData;

  return (
    <section
    className="flex flex-col 
    bg-[url('/images/investiments-mobile.png')] 
    md:bg-[url('/images/investiments-tablet.png')] 
    lg:bg-[url('/images/investiments-desktop.png')]
    bg-no-repeat 
    bg-cover 
    bg-bottom
    md:bg-bottom-right
    lg:bg-bottom
    pb-[141px] 
    rounded-lg 
    min-h-[633px] md:min-h-[629px] lg:min-h-100
    p-4 lg:p-8"
    >
      <h5 className="font-bold text-white text-[25px] mb-6 text-center md:text-left lg:text-left">
        {title}
      </h5>
      <form className="flex flex-col items-center lg:items-start md:items-start">
        <CustomSelect
          borderColor="blue"
          options={transactionType}
          placeholder={placeholderSelect}
          className="mb-8 max-w-[350px] h-10"
        />
        <Input
          placeholder={placeholderInput}
          className="border-[var(--color-green-dark)] mb-8 max-w-[250px] bg-white"
          id="price"
          label="Valor"
          labelStyle="text-white font-semibold"
          type="number"
        />
        <Button
          label="Concluir transação"
          onClick={() => {}}
          primary
          className=" max-w-[144px] lg:max-w-[250px] md:max-w-[250px]"
        />
      </form>
    </section>
  );
};

export default InvestimentCard;
