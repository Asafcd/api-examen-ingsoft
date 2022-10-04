const express = require('express')
const personSchema = require('../models/persona')

const router = express.Router()

//create
router.post('/create', async(req,res) =>{
    const persona = new personSchema(req.body)
    const newperson = await persona.save()
    obj = {
        "msg" : "user succesfully creaated",
        "id" : newperson._id,
        "data" : newperson
    }
    res.json(obj)
})


module.exports = router