var http = require('http')

var server = http.createServer((req, res) => {

	var categoria = req.url

	if (categoria == '/tecnologia') {
		res.end('<html><body>Notícias de tecnologia</body></html>')
	} else if (categoria == '/saude') {
		res.end('<html><body>Notícias de saude</body></html>')
	} else if (categoria == '/cidade') {
		res.end('<html><body>Notícias da cidade</body></html>')
	} else {
		res.end('<html><body>Portal de notícias</body></html>')
	}
	console.log('teste')
})

server.listen(3000)