var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const db = require('./config/database')
const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS
const dbName = process.env.DB_NAME
db(`mongodb+srv://${dbUser}:${dbPass}@cluster0.rezfw.gcp.mongodb.net/${dbName}?retryWrites=true&w=majority`)

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Criação de uma nova rota
const teste = require('./routes/teste')
app.use('/teste', teste)
// rota para curso
const curso = require('./routes/curso')
app.use('/curso', curso)

//Rota para professor
const professor = require('./routes/professor')
app.use('/professor', professor)

//Rota para sala-aula

const sala_aula = require('./routes/sala_aula')
app.use('/sala-aula', sala_aula)

//Rota para turma
const turma = require('./routes/turma')
app.use('/turma', turma)
module.exports = app;

//Rota para veterinario
const veterinario = require('./routes/veterinario')
app.use('/veterinario', veterinario)
module.exports = app;

//Rota para secretaria
const secretaria = require('./routes/secretaria')
app.use('/secretaria', secretaria)
module.exports = app;

//Rota para cliente
const cliente = require('./routes/cliente')
app.use('/cliente', cliente)
module.exports = app;

//Rota para animal
const animal = require('./routes/animal')
app.use('/animal', animal)
module.exports = app;

//Rota para consulta
const consulta = require('./routes/consulta')
app.use('/consulta', consulta)
module.exports = app;

//Rota para especie
const especie = require('./routes/especie')
app.use('/especie', especie)
module.exports = app;

//Rota para raca
const raca = require('./routes/raca')
app.use('/raca', raca)
module.exports = app;