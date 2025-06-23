import CustomSelect from "@/components/select/Select"

interface TransactionSelectorProps {
  onValueChange?: (value: string) => void
  defaultValue?: string
  className?: string
}

const transactionOptions = [
  { value: "receita", label: "Receita" },
  { value: "despesa", label: "Despesa" },
  { value: "transferencia", label: "Transferência" },
  { value: "investimento", label: "Investimento" },
]

export default function TransactionSelector({ onValueChange, defaultValue, className = "" }: TransactionSelectorProps) {
  return (
    <div className={`w-full max-w-2xl mx-auto p-8 ${className}`}>
          <CustomSelect
              options={transactionOptions}
              placeholder="Selecione o tipo de transação"
              onValueChange={onValueChange}
              borderColor="blue"
            />
    </div>
  )
}

