const router = require("express").Router()
const booksController = require("../../controllers/booksController")

router.route("/")
    .get(booksController.findAll)
    .post(booksController.create)

router
    .route("/:id")
    .delete(booksController.remove)

// router.get("/api/books", async function(req, res){
//     let result = await booksController.findAll()
//     console.log(result)
//     res.json(result)
// })

module.exports = router