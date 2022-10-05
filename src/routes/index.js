const express = require('express')
const personController = require('../controllers/personController')

const router = express.Router()

router
    .get('/resumes', personController.getAllPersons)      //Select all
    .get('/resumes/:id', personController.getOnePerson)      //Select one
    .post('/resumes', personController.createPerson)         //Crear
    .put('/resumes/:id', personController.updatePerson)      //Actualizar
    .delete('/resumes/:id', personController.removePerson)   //Eliminar 

module.exports = router