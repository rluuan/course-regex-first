const texto = 'Pedrinho (filho do Pedro Silva) é doutor do ABCabc!'

console.log(texto.match(/[(abc)]/gi)) // nao e um grupo
console.log(texto.match(/([abc])/gi))
console.log(texto.match(/(abc)+/gi))