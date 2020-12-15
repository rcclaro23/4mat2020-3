const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    nome: {type: String, required: true},
    data_nascimento: {type: Date, required: true},

    cliente: {type: mongoose.ObjectId, ref: 'Cliente', required: true},
    raca: {type: mongoose.ObjectId, ref: 'Raca', required: true},
    //consulta:{ type: mongoose.ObjectId, ref: 'Consulta', required: true}


})

//Parâmetros do mongoose.model()
//1º -> Nome do model (inicial maiúscula, igual ao nome do arquivo)
//2º -> a constante esquema, montada anteriormente
// 3º -> o nome da COLEÇÃO no BD que irá receber os objetos que serão
// criados a partir deste model ( inicial minúscula, plural do 
// nome model)
module.exports = mongoose.model('Animal', esquema, 'animais')
