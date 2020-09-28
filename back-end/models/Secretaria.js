const mongoose = require('mongoose')

const esquema = mongoose.Schema({
   nome: { type: String, required: true},
    //formacao: { type: String, required: true},
    //data_nascimento: { type: Date, required: true},
    // cpf com indice unico p evitar duplicidade
    cpf: { type: String, required: true, index: {unique: true}},
    //rg: { type: String, required: true},
   // valor_hora: { type: Number, required: true, default: 20.15},
    //endereco: { type: String, required: true},
    telefone: { type: String, required: true},
    // email com indice unico p evitar duplicidades
    email: { type: String, required: true, index: {unique: true}}
})

// PARÂMETROS DO mongoose.model()
// 1º -> Nome do model (inicial maiúscula, igual ao nome do arquivo)
// 2º -> a constante esquema, montada anteriormente
// 3º -> o nome da COLEÇÃO no BD que irá receber os objetos que serão
//       criados a partir deste model (inicial minúscula, plural do
//       nome do model)
module.exports = mongoose.model('Secretaria', esquema, 'secretarias')