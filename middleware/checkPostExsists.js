const arrayPosts = require("../posts");

const postExists = (req, res, next) => {
    const checkPostExists = parseInt(req.params.id);
    const post = arrayPosts.find((curItem) => curItem.id === checkPostExists);
    if (post !== undefined) {
        next();
    } else {
        res.statusCode = 404;
        res.json({
            message: "Post non trovato"
        })
    }
}

module.exports = postExists;