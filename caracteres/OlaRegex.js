f = (t, r) => console.log(t.match(r))


const texto = 'Casa bonita eh a casa amarela da esquina com a rua ACASALAR.'

const regex = /casa/gi

f(texto, regex)
f(texto, /a b/)