const db = require("../models")

async function findAll(req, res){
    let result = await db.Book.find({})
    console.log('Retrieved from the database: ', result)
    res.json(result)
}

async function create(req, res){
    let result = await db.Book.create(req.body)
    console.log('Sending to saved: ', req.body)
}

async function remove(req, res){
    console.log(`Deleting item id: ${req.params.id} from the database`)
    let result = await db.Book.findByIdAndDelete({_id: req.params.id})
    res.send({message: "Deleted item"})
}

module.exports = {findAll, create, remove}