const express = require('express')
const personController = require('../controllers/personController')

const router = express.Router()

router
    .get('/selectAll', personController.getAllPersons)      //Select all
    .get('/select/:id', personController.getOnePerson)      //Select one
  /*  .post('/create', personController.createPerson)         //Crear
    .put('/update/:id', personController.updatePerson)      //Actualizar
    .delete('/remove/:id', personController.removePerson)   //Eliminar */

module.exports = router