const controller = require('../controllers/dentista')
const express = require('express')

const router = express.Router()

router.post('/', controller.novo)//Create
router.get('/', controller.listar)// retrive (all)
router.get('/:id', controller.obterUm)//retrive (one)
router.put('/', controller.atualizar)// update
router.delete('/', controller.excluir) // delete
module.exports = router