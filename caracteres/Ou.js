const texto = 'Voce precisa responder sim, nao ou nao sei.'

console.log(texto.match(/sim|nao|nao sei/g))
console.log(texto.match(/sim|nao sei|nao/g))     