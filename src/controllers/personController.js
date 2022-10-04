
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
/*
const createPerson = async (req, res) => {
    if( !body.firstname || !body.lastname ) return

    const persona = req.body
    const newpersona = personService.createNewPerson(persona)
    await persona.save()
    .then((data) => res.json({id: data._id}))
    .catch((err)=> res.json({error: err}))
}

const updatePerson = async (req, res) => {
    const {id} = req.params
    const body = req.body
    await personSchema.findByIdAndUpdate({"_id":id}, body, { runValidators: true, returnOriginal: false})
    .then((data) => res.json({"msg" : "user succesfully updated", id: data._id}))
    .catch((err)=> res.json({error: err}))
}

const removePerson = async (req, res) => {
    const {id} = req.params
    await personSchema.findByIdAndRemove(id)
    .then((data) => res.json({msg: "Person removed succesfully!"}))
    .catch((err)=> res.json({error: err}))
} */

module.exports = {
    getAllPersons,
    getOnePerson,
  /*   createPerson,
    updatePerson,
    removePerson */
}