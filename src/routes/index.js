const express = require('express')
const personSchema = require('../models/persona')

const router = express.Router()

//create
router.post('/create', async(req,res) =>{
    const persona = new personSchema(req.body)
    const newperson = await persona.save()
    obj = {
        "msg" : "user succesfully created",
        "id" : newperson._id,
        "data" : newperson
    }
    res.json(obj)
})

//selectById
router.post('/selectById', async(req,res) =>{
    const id = req.body.id
    const persona = await personSchema.findOne({"_id":id})
    obj = {
        "msg" : "user succesfully selected",
        "data" : persona
    }
    res.json(obj)
})

//selectById
router.get('/selectById', async(req,res) =>{
    const id = req.body.id
    const persona = await personSchema.findOne({"_id":id})
    obj = {
        "msg" : "user succesfully selected",
        "data" : persona
    }
    res.json(obj)
})

//selectAll
router.get('/selectAll', async(req,res) =>{

    const persona = await personSchema.find()
    obj = {
        "data" : persona
    }
    res.json(obj)
})

//Remove
router.get('/remove', async(req,res) =>{
    const id = req.body.id
    const persona = await personSchema.findOneAndRemove({"_id":id})
    obj = {
        "msg" : "user succesfully deleted",
        "data" : persona
    }
    res.json(obj)
})
//update
router.get('/update', async(req,res) =>{
    const id = req.body.id
    delete req.body.id
    const data = req.body
    const persona = await personSchema.findByIdAndUpdate({"_id":id}, data, { runValidators: true, returnOriginal: false})
    obj = {
        "msg" : "user succesfully updated",
        "data" : persona
    }
    res.json(obj)
})


module.exports = router