const express = require("express");
const AuthorController = require("../Controllers/Authors");
const router = express.Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     Author:
 *       type: object
 *       required:
 *         - title
 *         - author_name
 *       properties:
 *         title:
 *           type: string
 *           description: The meter number
 *         author_name:
 *            type: string
 *            description: money paid
 *       example:
 *         title: string
 *         author_name: string
 *         
 */

/**
 * @swagger
 * tags:
 *  name: Authors
 *  description: the Author management API
 */


//get all

/**
 * @swagger
 * /authors:
 *  get:
 *    summary: get all authors
 *    tags: [Authors]
 *    responses:
 *      200:
 *        description: for all authors
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *              $ref: '#/components/schemas/Author'
 */
router.get("/", AuthorController.getAll);


//new author
router.post("/", AuthorController.newAuthor);

//get by id
router.get("/byid/:id", AuthorController.getById);

//put
router.put("/:id", AuthorController.update)

//delete
router.delete("/:id", AuthorController.removeAuthor);

module.exports = router;
