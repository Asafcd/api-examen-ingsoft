const personSchema = require('../models/persona')

const getAllPersons = async () => { 
    try {
        return await personSchema.find()
    } catch (err) { throw { status: 500, error: err } }    
}

const getOnePerson = async (id) => {
    try{
        if(id.length != 24){ throw { status: 400, message: `Not an id`}}
        const person = await personSchema.findById(id)
        if(!person){ throw {status: 404, message: `Can't find person with the id '${id}'`}}
        return person
    } catch (err) { throw { status: err?.status || 500, message: err?.message || err } }    
}

const createNewPerson = async (person) => {
    try{
        const persona = new personSchema(person)
        const newperson = await persona.save()
        return newperson._id
         
    } catch (error) { throw { status: 500, message: error?.message || error }; }
}

const updatePerson = async (id, body) => {
    try{
        const updatedPerson = await personSchema.findByIdAndUpdate(id, body, { runValidators: true, returnOriginal: false})
        return updatedPerson._id
    }catch(error){ throw { status: error?.status || 500, message: error?.message || error }}
    
}

const removePerson = async (id) => {
    try{
        await personSchema.findByIdAndRemove(id)
    } catch(error){throw { status: error?.status || 500, message: error?.message || error }}
    
}

module.exports = {
    getAllPersons,
    getOnePerson,
    createNewPerson,
    updatePerson,
    removePerson
}