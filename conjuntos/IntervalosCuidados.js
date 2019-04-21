const texto = `ABC [abc] a-c 1234`

console.log(texto.match(/[a-c]/g))
console.log(texto.match(/a-c/g))
console.log(texto.match(/[A-z]/g)) // tras tudo que estiver nesse range, incluse [] ^ 
console.log(texto.match(/[a-zA-Z]/g)) 
