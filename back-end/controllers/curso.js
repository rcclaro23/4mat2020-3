/*

    QUATRO OPERAÇÕES BÁSICAS SOBRE DADOS

    1) CREATE (criação ou inserção)
        Cria um novo objeto dentro da coleção

    2) RETRIEVE (recuperação ou listagem)
        Permite recuperar os objetos a partir do BD

    3) UPDATE (atualização)
        Altera os dados de um objeto que JÁ EXISTE no BD

    4) DELETE (exclusão)
        Elimina um objeto do BD

    (C)reate + (R)etrieve + (U)pdate + (D)elete = CRUD

    VERBOS HTTP ASSOCIADOS ÀS OPERAÇÕES CRUD

    Verbo       Operação
    POST        Create
    GET         Retrieve
    PUT         Update
    DELETE      Delete

*/
const Curso = require('../models/Curso')
const controller = {} // objeto vazio
// Metodo novo(), implementar a operação Create
   controller.novo = async(req, res) => {
    try{
        // Envia os dados dentro de req.body para o BD para a criação
     await Curso.create(req. body)
     //http 201 created
     res.status(201).end() 
    }
    catch(erro){
        console.error(erro)
        //http 500:Internal Server Error
        res.status(500).send(erro)
    }
}
module.exports = controller