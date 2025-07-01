import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import InvestimentCard from './InvestimentCard';

import { investimentsData } from '@/data/global-data';

const meta: Meta<typeof InvestimentCard> = {
  title: 'components/Investiment-Card',
  component: InvestimentCard,
  parameters: {
    docs: {
      description: {
        component: 'Card individual de investimento, com formulário e layout responsivo.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof InvestimentCard>;

const {title, transactionType, placeholderInput, placeholderSelect} = investimentsData;

export const Default: Story = {


  args: {
    title: title,
    transactionType: transactionType,
    placeholderInput: placeholderInput,
    placeholderSelect: placeholderSelect,
  },
}; 