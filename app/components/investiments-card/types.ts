export interface Option {
  label: string;
  value: string;
}

export interface InvestimentFormProps {
  transactionType: Option[];
  placeholderInput: string;
  placeholderSelect: string;
}

export interface InvestimentCardProps extends InvestimentFormProps {
  title: string;
}