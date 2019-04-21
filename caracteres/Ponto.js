fm = (t, r) => console.log(t.match(r))
fs = (t, r) => console.log(t.split(r))

// eh um coringa
const texto = '1,2,3,4,5,6,7,8,9,0'

fm(texto, /1.2/g)
fm(texto, /1..2/g)
fm(texto, /1..,/g)

const notas = '8.3,7.1,8.8,10.0'
fm(notas, /8../g)
fm(notas, /.\../g)