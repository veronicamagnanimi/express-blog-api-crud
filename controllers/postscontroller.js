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
    if(findPost) {
    res.json(findPost)}
    else {
        res.json(`Il post con id ${postId} non esiste`)
    };
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
    const postId = req.params.id;
    res.json("Cancellazione del post " + postId);
}


//////ESPORTO TUTTO///////
module.exports = {
    index,
    show,
    create,
    update,
    modify,
    destroy
}