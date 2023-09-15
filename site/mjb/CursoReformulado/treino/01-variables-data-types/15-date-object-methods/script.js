let x
let d = new Date()

// Date methods

// x = d convertida em string vai retornar o string da data

// x = d em time

//x = o valor de d

//x = o ano completo de d

//x = o mês de d e o mês de d + 1

//x = a o dia de d aqui é getDate

//x = o dia da semana de d aqui é getDay

//x = a hora de d

//x = os minutos de d

//x = os segundos de d

//x = os milliseconds de d

//x = o ano o mês e a data de d com backtics${d.getDate()}`

// Intl.DateTimeFormat API (locale specific)
// x = Intl.DateTimeFormat d com a data formatada en-US, en-GB e default

//x = Intl.DateTimeFormat imprimindo o mês em long format exemplo October

//x = d toLocaleString default com o mês no formato short

/* exemplo mais completo da data usando toLocaleString
x = d.toLocaleString('default', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZone: 'America/New_York',
})*/

console.log(x)
