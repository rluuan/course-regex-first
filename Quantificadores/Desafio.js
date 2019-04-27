const texto = `
CPF dos Aprovados:
    - 600.567.890-12
    - 765.998.345-23
    - 467.975.436-24
    - 124.234.102-23
    - 3489.234.234-00
    - 348.234.2344-00
`
const exp = /\b\d{3}\b.\b\d{3}\b.\b\d{3}\b-../g
console.log(texto.match(exp))