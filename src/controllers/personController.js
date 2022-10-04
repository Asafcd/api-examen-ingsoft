const { body, validationResult } = require('express-validator');
const personService = require('../services/personService')

const getAllPersons = async (req, res) => { 
    try{
      const allPersons = await personService.getAllPersons()  
      res.send({status: "OK", data: allPersons})
    } catch(err){res.status(err?.status || 500).send({ status: "FAILED", data: { error: err?.message || err } });}
    
}

const getOnePerson = async (req, res) => {
    const {id} = req.params
    if (!id) {
        res.status(400).send({
            status: "FAILED",
            data: { error: "Parameter ':id' can not be empty" },
    });
    return;
  }
    try{
        const onePerson = await personService.getOnePerson(id)
        res.send({ status: "OK!", data: onePerson})
    } catch(err){ res.status(err?.status || 500).send({ status: "FAIL!", data: {error: err?.message || err}})}
}

const createPerson = async (req, res) => {
    const {firstName, lastName, email, phoneNumber} = req.body
    if( !firstName || !lastName || !email || !phoneNumber) {
        res.status(400).send({ status: "FAIL!", data: {error: "Name, lastName, email o phone number key is missing"}})
    } 
    
    const persona = req.body
    
    if(!body(email).isEmail() || !body(firstName).isString() || !body(lastName).isString() || !body(phoneNumber).isNumeric()){
         const errors = validationResult(req)
         if (!errors.isEmpty()) { return res.status(400).json({ errors: errors.array() }) }
    }

    try {
        const newPersonaId = await personService.createNewPerson(persona)
        res.send({status: "OK!", id: newPersonaId})
    } catch (error) { res.status(error?.status || 500).send({ status: "FAILDED", data: { error: error?.message || error } });
  }
}    
    

const updatePerson = async (req, res) => {
    const {id} = req.params
    const body = req.body
    try{
        const updatedId = await personService.updatePerson(id, body)
        res.send({status: "OK update!", id: updatedId})
    } catch (error) { res.status(error?.status || 500).send({ status: "FAILDED", data: { error: error?.message || error } })}
}

const removePerson = async (req, res) => {
    const {id} = req.params
    if (!id) { res.status(400).send({status: "FAILED", data: { error: "Parameter ':id' can not be empty" } })}

    try{
        await personService.removePerson(id)
        res.send({ status: "OK delete!" });
    }catch(error){
        res.status(error?.status || 500).send({ status: "FAILDED", data: { error: error?.message || error } }) }
} 

module.exports = {
    getAllPersons,
    getOnePerson,
    createPerson,
    updatePerson,
    removePerson
}