f = (t, r) => console.log(t.match(r))


const texto = 'Casa bonita eh a casa amarela da esquina com a rua ACASALAR.'

const regex = /casa bonita/gi
fm(texto, /A/i)

f(texto, regex)