module.exports = function(app){

	app.get('/noticia', (req, res) => {

		var connection = app.config.dbConnection()
		var noticiasModel = app.app.models.NoticiasDAO(connection)

		noticiasModel.getNoticia(function(error, result){
			res.render("noticias/noticia", {noticia : result})
		})
	})
}