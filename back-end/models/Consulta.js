const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    data: { type: Date, required: true },
    hora: { type: String, required: true }, 
    valor: { type: Number, required: true },
    
     dentista: {type: mongoose.ObjectId, ref: 'Dentista', required: true},
     cliente: {type: mongoose.ObjectId, ref: 'Cliente', required: true},
    })
    
     
    
// PARÂMETROS DO mongoose.model()
// 1º -> Nome do model (inicial maiúscula, igual ao nome do arquivo)
// 2º -> a constante esquema, montada anteriormente
// 3º -> o nome da COLEÇÃO no BD que irá receber os objetos que serão
//       criados a partir deste model (inicial minúscula, plural do
//       nome do model)


module.exports = mongoose.model('Consulta', esquema, 'consultas')