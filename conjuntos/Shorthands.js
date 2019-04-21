const texto = `1,2,3,4,5,6,a.b c!d?e	-
f_g`
console.log(texto.match(/\d/g)) // [0-9]
console.log(texto.match(/[0-9]/g)) // mesma coisa
console.log(texto.match(/[0|1|2|3|4|5|6|7|8|9]/g)) // mesma coisa
console.log(texto.match(/\D/g)) // nao numeros [^0-9]

console.log(texto.match(/\w/g)) // [a-zA-Z0-9_]
console.log(texto.match(/\W/g)) 

console.log(texto.match(/\s/g)) // espaco [ \t\n\r\f]
console.log(texto.match(/\S/g)) // espaco [^ \t\n\r\f]