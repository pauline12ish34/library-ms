const express= requie('express')
const bookController= require ('../Controllers/books')
var router= express.Router();

router.post("/", BookController.newBook);

//get all
router.get("/", BookController.getAll);

//get by id
router.get("/byid/:id", BookController.getById);

//delete
router.delete("/:id", BookController.removeBook);

module.exports = router;
