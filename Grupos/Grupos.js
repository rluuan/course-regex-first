const texto1 = 'O José Simão é muito engraçado... heheheheh'
// console.log(texto1.match(/(he)+/g))

const texto2 = 'https://www.site.info www.escola.ninja.br google.com.ag'
console.log(texto2.match(/(https:\/\/)?(www.)?(\w)+\.\w+\.(\w){0,}/g))
