import { investimentsData } from '@/data/global-data';
import Input from '../input/Input';
import CustomSelect from '../select/Select';
import { Button } from '../button/Button';

const InvestimentCard = () => {
  const { title, placeholder } = investimentsData;

  return (
    <section className="flex flex-col bg-[url('/images/investiments-mobile.png')] 
  md:bg-[url('/images/investiments-tablet.png')] 
  lg:bg-[url('/images/investiments-desktop.png')] bg-no-repeat bg-cover  p-8 pb-[141px] rounded-lg min-h-10">
      <h5 className="font-bold text-white text-[25px] mb-6">{title}</h5>
      <form>
        <CustomSelect
          borderColor="blue"
          options={[
            {
              label: 'Opção 1',
              value: '1',
            },
            {
              label: 'Opção 2',
              value: '2',
            },
            {
              label: 'Opção 3',
              value: '3',
            },
          ]}
          placeholder="Selecione uma opção"
          className='mb-8 max-w-[350px] h-10'
        />
        <Input
          placeholder="00.00"
          className="border-[var(--color-green-dark)] mb-8 w-[250px] bg-white"
        />
        <Button
            label="Concluir transação"
            onClick={() => {}}
            primary
            className='w-[250px]'
            />
      </form>
    </section>
  );
};

export default InvestimentCard;
