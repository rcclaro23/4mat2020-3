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

// Operação RETRIEVE (all), função listar()
controller.listar = async (req, res) => {
    try {
        let dados = await Curso.find() // Traz todos os cursos cadastrados
        res.send(dados) // Vai com status HTTP 200: OK
    }
    catch(erro) {
        console.log(erro)
        res.status(500).send(erro)
    }
}

// Operação RETRIEVE (one), função obterUm()
controller.obterUm = async (req, res) => {
    try {
        // Capturando o parâmetro id da URL
        const id = req.params.id
        let obj = await Curso.findById(id)

        // O objeto existe e foi encontrado
        if(obj) res.send(obj)       // HTTP 200
        // Não encontrado
        else res.status(404).end()  // HTTP 404: Not found
    }
    catch(erro) {
        console.log(erro)
        res.status(500).send(erro)
    }
}
//Metodo atualizar(), implementando a operação fr Update
controller.atualizar = async(req, res) => {

    try{
    //Isolar o id do objeto para fins de busca
    const id = req.body._id
    //busca o objeto pelo id e, encontrando-o, substitui o conteudo por req.body
    let obj =  await Curso.findByIdAndUpdate(id, req.body)
    // se encontrou e substitui, retornamos o http 204: no content
    if(obj) res.status(204).end()
    //caso contrario, retorna http 404:not fond
    else res.status(404).end()
}
catch(erro){
    console.error(erro)
    res.status(500).end()
}
}

//metodo excluir(), implementando a operação delete
controller.excluir = async(req, res) =>{
    try{
    //isolando o id para exclusao
    const id = req.body._id
    let obj = await Curso.findByIdAnDelete(id)
    if(obj) res.status(204).end()
    //Objeto nao foi encontrado para exclusao
    else res.status(404).end()
}
catch(erro){
    console.error(erro)
    res.status(500).send(erro)
}
}
module.exports = controller