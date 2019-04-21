const texto = '1,2,3,4,5,6,a.b c!d?e'

const regexVirgula = /,/

fm = (t, r) => console.log(t.match(r))
fs = (t, r) => console.log(t.split(r))

fs(texto, regexVirgula)
fm(texto, regexVirgula)
fm(texto, /,/g)
fm(texto, /A/g)
fm(texto, /A/i)
fm(texto, /2/g)
fm(texto, /b c!d/)