//importo il file array dei post
const arrayPosts = require("../posts");

//index --> GET
const index = (req, res) => {
    let filterPosts = posts;
    if (req.query.tag) {
        filterPosts = posts.filter((curPosts) => curPosts.tags.includes(req.query.tag.toLowerCase()))
    }
    res.json(filterPosts);
}


//show --> GET
const show = (req, res) => {
    const postId = parseInt(req.params.id);
    const findPost = arrayPosts.find(curItem => curItem.id === postId);
    if (!findPost) {
      res.statusCode = 404;
      res.json(`Il post con id ${postId} non esiste`);
    } else {
        res.json(findPost);
    }
}


//create --> POST
const create = (req, res) => {
    console.log(req.body);
    const newPost = req.body;
    newPost.id = arrayPosts[arrayPosts.length - 1].id + 1; //calcolo il successivo id
    arrayPosts.push(newPost);
    res.status(201);  //stato per qualcosa di nuovo
    res.json(newPost);
}


//update --> PUT
const update = (req, res) => {
    const postId = parseInt(req.params.id);
    const newPost = req.body;
    console.log(newPost);
    const indexToUpdate = arrayPosts.findIndex((curPost) => curPost.id === postId); //trovo l'indice da modificare
    if(indexToUpdate === -1) {
        res.statusCode(404);
        res.json({
            message: `Il post con ID ${postId} non esiste`
        })
    } else {
    newPost.id = postId;
    arrayPosts[indexToUpdate] = newPost;
    res.json(newPost);
    }
   }


//modify --> PATCH
const modify = (req, res) => {
    const postId = req.params.id;
    res.json("Aggiornamento parziale del post " + postId);
}


//destroy --> DELETE
const destroy = (req, res) => {
    const postId = parseInt(req.params.id);
    const arrayIndex = arrayPosts.findIndex((curArray) => curArray.id === postId); //trovo l'indice dell'array
    if (arrayIndex === -1) {
        res.statusCode(404);
        res.json({
            message: "Post non trovato"
        })
    }
    else {
    arrayPosts.splice(arrayIndex, 1);
    console.log(arrayPosts);
    res.sendStatus(204);
 }
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