
const getAllPersons = async (req, res) => { 
    return await personSchema.find()
    
}

const getOnePerson = async (req, res) => {
    const {id} = req.params
    await personSchema.findById(id)
    .then((data) => res.json({msg: "Found it!", persona: data}))
    .catch((err) => res.json({error: err}))
}

const createPerson = async (req, res) => {
    const persona = new personSchema(req.body)
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
