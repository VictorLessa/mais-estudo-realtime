var app = require('./server.js');

users = [
{nome: 'victor', senha: '11031998',	id:'144'},
{nome: 'edson', senha: '1103', id:'156'},
{nome: 'Karen', senha: 'f1000', id:'123'},
{nome: 'edson', senha: '1103', id:'147'},
{nome: 'jhoni', senha: '123', id:'158'},
{nome: 'gabriel', senha: '1234', id:'153'},
{nome: 'samuel', senha: '1248', id:'111'}


];

mensagem = [];

var servidor = app.listen(80, ()=>{
	console.log('servidor iniciado');
});

var io = require('socket.io').listen(servidor);

app.get('/', (req, res)=>{
	res.render('index');
});

io.on('connection', (socket)=>{
	console.log(users);
	console.log(mensagem);
	
	socket.on('carregar msg', (ids)=>{
		idmsg = ids.friendid * ids.myid;
		
		for(var i = 0; i < mensagem.length; i++){
			if(mensagem[i].id == idmsg){
				socket.emit('load msg',{msg:mensagem[i].msg});
			}
		}
	});

	socket.on('criar sala', (id)=>{
		sala = id.friendid * id.myid;
		socket.join(sala);
	});

	socket.on('salvar msg', (ids)=>{
		ids.id = ids.myid * ids.amigoid;
		mensagem.push(ids); 

	});
});


