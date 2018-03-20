var express = require('express')
var app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
	res.send("<html><body>Portal de notícias</body></html>")
})

app.get('/tecnologia', (req, res) => {
	res.send("<html><body>Notícias de tecnologia</body></html>")
})

app.listen(3000, () => {
	console.log("Servidor rodando com express")
})