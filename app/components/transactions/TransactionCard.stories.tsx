import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import TransactionCard from './TransactionCard';

import { TransactionsData } from '@/data/global-data';

const meta: Meta<typeof TransactionCard> = {
  title: 'components/Transaction-Card',
  component: TransactionCard,
  parameters: {
    docs: {
      description: {
        component: 'Card individual de Transactiono, com formulário e layout responsivo.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof TransactionCard>;

const {title, transactionType, placeholderInput, placeholderSelect} = TransactionsData;

export const Default: Story = {


  args: {
    title: title,
    transactionType: transactionType,
    placeholderInput: placeholderInput,
    placeholderSelect: placeholderSelect,
  },
}; 