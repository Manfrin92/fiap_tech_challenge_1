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

export const formatMonth = (date: Date | string) => {
  const d = new Date(date)
  const month = monthList[d.getMonth()]

  return month
}

export const formatDate = (date: Date | string) => {
  const d = new Date(date)
  
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
  }).format(d)
}

const today = new Date()

export const getCurrentMonth =  new Intl.DateTimeFormat('pt-BR', {
  month: 'long',
}).format(today)

export const getCurrentDateShort =  new Intl.DateTimeFormat('pt-BR', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
}).format(today)

export const getCurrentDate = new Intl.DateTimeFormat('pt-BR', {
  weekday: 'long',
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
}).format(today)
