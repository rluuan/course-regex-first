const texto = 'a   b'
console.log(texto.match(/.\s\s\s./g))
console.log(texto.match(/a   b/g))
console.log(texto.match(/.{3}../g))
console.log(texto.match(/.\s+./))