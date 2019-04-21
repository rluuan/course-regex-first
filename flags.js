// g - global - find all letters of text search, else just first letter
// i - ignore case A or a

const suffix = `Rodrigo encontrou um novo livro | Rodrigo find a new book`
const RegSuffix = new RegExp('Rodrigo')
console.log(RegSuffix.exec(suffix))