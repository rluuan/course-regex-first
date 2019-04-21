fm = (t, r) => console.log(t.match(r))
fs = (t, r) => console.log(t.split(r))

const texto = 'Lista de arquivos mp3: jazz.mp3,rock.mp3,podcast.mp3,blues.mp3'
fm(texto, /\.mp3/g)

// no futuro
fm(texto, /\w+\.mp3/g)
