const db = require("../models")

async function findAll(req, res){
    let result = await db.Book.find({})
    console.log('Retrieved from the database: ', result)
    return result
}

async function create(req, res){
    let result = await db.Book.create(req.body)
    console.log('Sending to saved: ', req.body)
}

async function remove(req, res){
    let result = await db.Book.findById({_id: req.params.id})
    result.remove()
    console.log(req.body)
    console.log(`Deleting item ${_id} from the database`)
}

module.exports = {findAll, create, remove}