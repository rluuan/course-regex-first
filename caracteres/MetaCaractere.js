fm = (t, r) => console.log(t.match(r))
fs = (t, r) => console.log(t.split(r))

const texto = '1,2,3,4,5,6 a.b c!d?e'

const regexPonto = /\./g
fs(texto, regexPonto)

const regexSimbolos = /,|\.|\?|!| /g
fs(texto, regexSimbolos)