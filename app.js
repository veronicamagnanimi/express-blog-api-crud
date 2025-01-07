const express = require("express");
const posts = require("./posts");
const cors = require("cors");
const app = express();
const port = 3000;
const postsRouter = require("./routers/posts");
const handleErrors = require("./middleware/handleErrors");

//middleware per il cors
app.use(cors({
    origin: 'http://localhost:5173/'
}));

//nuovo post 
app.use(express.json());

//cartella immagini pubbliche
app.use(express.static("public"));

//testare il router
app.use("/posts", postsRouter);

//esecuzione
app.get('/', (req, res) => {
    res.send("Server del mio blog")
});


app.get('/bacheca', (req, res) => {
    res.json ({
        count: posts.length,
        posts: posts,
    });
})

app.use(handleErrors);

app.listen(port, () => {
    console.log("Il server è partito")
});