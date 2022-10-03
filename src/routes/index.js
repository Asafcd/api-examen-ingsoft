const express = require('express')
const personSchema = require('../models/persona')

const router = express.Router()

//create
router.post('/create', async(req,res) =>{
    const persona = new personSchema(req.body)
    try {
        await persona.save()  
        persona.speak()
    
    } catch (error) { console.error(error)}
})


module.exports = router