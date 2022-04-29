const express = require("express");
const AuthorController = require("../Controllers/Authors");
const router = express.Router();

//new author
router.post("/", AuthorController.newAuthor);

//get all
router.get("/", AuthorController.getAll);

//get by id
router.get("/byid/:id", AuthorController.getById);

//put
router.put("/:id", AuthorController.update)

//delete
router.delete("/:id", AuthorController.removeAuthor);

module.exports = router;
