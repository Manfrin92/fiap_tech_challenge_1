const monthList = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro"
]

const parseDecimal = (value: number) => {
  return value < 10 ? `0${value}` : value
}

export const formatMonth = (date: Date | string) => {
  const d = new Date(date)
  const month = monthList[d.getMonth()]

  return month
}

export const formatDate = (date: Date | string) => {
  const d = new Date(date)
  const day = d.getDate()
  const month = d.getMonth()
  const year = d.getFullYear()

  return `${parseDecimal(day + 1)}/${parseDecimal(month + 1)}/${year}`
}

const today = new Date()

export const todayFormatted = new Intl.DateTimeFormat('pt-BR', {
  weekday: 'long',
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
}).format(today)
