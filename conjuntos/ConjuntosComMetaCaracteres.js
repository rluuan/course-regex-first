const texto = '.$+*?-'

f = (t, r) => console.log(t.match(r))
f(texto, /[+.?*$]/g)
f(texto, /[$-?]/g)