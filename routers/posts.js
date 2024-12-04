const express = require("express");
const router = express.Router();
module.exports = router;

//importo il file array dei post
const posts = require("../posts");

//importo il file delle funzioni
const postsController = require("../controllers/postscontroller");


/////ESECUZIONE/////

//index --> GET
router.get('/', postsController.index);

//show --> GET
router.get('/:id', postsController.show);

//create --> POST
router.post('/', postsController.create);

//update --> PUT
router.put('/:id', postsController.update);

//modify --> PATCH
router.patch('/:id', postsController.modify);

//destroy --> DELETE
router.delete('/:id', postsController.destroy);