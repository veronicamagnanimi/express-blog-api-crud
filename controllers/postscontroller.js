//importo il file array dei post
const arrayPosts = require("../posts");

//index --> GET
const index = (req, res) => {
    res.json(arrayPosts);
}


//show --> GET
const show = (req, res) => {
    const postId = parseInt(req.params.id);
    const findPost = arrayPosts.find(curItem => curItem.id === postId);
    if (findPost === undefined) {
      res.statusCode = 404;
      res.send(`Il post con id ${postId} non esiste`);
    } else {
        res.json(findPost);
    }
}


//create --> POST
const create = (req, res) => {
    res.json("Creazione del nuovo post");
}


//update --> PUT
const update = (req, res) => {
    const postId = req.params.id;
    res.json("Aggiornamento del post " + postId);
}


//modify --> PATCH
const modify = (req, res) => {
    const postId = req.params.id;
    res.json("Aggiornamento parziale del post " + postId);
}


//destroy --> DELETE
const destroy = (req, res) => {
    const postId = 2;
    const arrayIndex = arrayPosts.findIndex((curArray) => curArray.id === postId); //trovo l'indice dell'array
    if (arrayIndex === -1) {
        res.statusCode(404);
        res.json({
            message: "Post non trovato"
        })
    } else {
    arrayPosts.splice(arrayIndex, 1);
    res.sendStatus(204);
 }
}

console.log(arrayPosts);


//////ESPORTO TUTTO///////
module.exports = {
    index,
    show,
    create,
    update,
    modify,
    destroy
}