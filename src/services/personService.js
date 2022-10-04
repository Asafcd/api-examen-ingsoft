const personSchema = require('../models/persona')

const getAllPersons = async () => { 
    try {
        return await personSchema.find()
    } catch (err) { throw { status: 500, error: err } }    
}

const getOnePerson = async (id) => {
    try{
        const person = await personSchema.findById(id)
        if(!person){ throw {status: 400, message: `Can't find person with the id '${id}'`}}
        return person
    } catch (err) { throw { status: err?.status || 500, message: err?.message || err } }    
}

const createNewPerson = async (person) => {
    const persona = new personSchema(person)
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
}

module.exports = {
    getAllPersons,
    getOnePerson,
    createNewPerson,
    updatePerson,
    removePerson
}