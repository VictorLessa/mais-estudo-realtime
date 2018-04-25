module.exports = (app)=>{
	app.post('/sala', (req, res)=>{
		var dados = req.body;

		console.log(dados);
		for(var i =0; i < users.length; i++){
			if(users[i].nome == dados.usuario && users[i].senha == dados.senha){
				res.render('sala', {user: dados, userid:users[i].id, amigos: users});
			}
		}
		res.redirect('/');
	
	});

}