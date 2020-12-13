const mongoose = require('mongoose')

const esquema = mongoose.Schema({
   nome: { type: String, required: true},      
   cpf: { type: String, required: true, index: {unique: true}},
   endereco: { type: String, required: true},
   telefone: { type: String, required: true},
   email: { type: String, required: true, index: {unique: true}},

   animal:{ type: mongoose.ObjectId, ref: "Animal", required: true}
})

// PARÂMETROS DO mongoose.model()
// 1º -> Nome do model (inicial maiúscula, igual ao nome do arquivo)
// 2º -> a constante esquema, montada anteriormente
// 3º -> o nome da COLEÇÃO no BD que irá receber os objetos que serão
//       criados a partir deste model (inicial minúscula, plural do
//       nome do model)
module.exports = mongoose.model('Cliente', esquema, 'clientes')