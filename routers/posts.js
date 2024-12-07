const express = require("express");
const router = express.Router();
module.exports = router;

//importo il file array dei post
const posts = require("../posts");

//importo il file delle funzioni
const postsController = require("../controllers/postscontroller");

//importo middleware
const postExists = require("../middleware/checkPostExsists");

/////ESECUZIONE/////

//index --> GET
router.get('/', postsController.index);

//show --> GET
router.get('/:id', postExists, postsController.show);

//create --> POST
router.post('/', postsController.create);

//update --> PUT
router.put('/:id', postExists, postsController.update);

//modify --> PATCH
router.patch('/:id', postExists, postsController.modify);

//destroy --> DELETE
router.delete('/:id', postExists, postsController.destroy);