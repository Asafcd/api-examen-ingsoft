const express = require('express')
const personSchema = require('../models/persona')

const router = express.Router()

//create
router.post('/create', (req,res) =>{
    const persona = personSchema(req.body)
    persona
        .save()
        .then((data) => console.log(data))
        .catch((error) => res.json({mensaje: error}))
    // try{        
    //     persona
    //         .save()
    //         .then((data) => res.json(data))
    //         .catch((error) => res.json({message: error}))
    // }catch(err){console.error(err)}
    
})


module.exports = router