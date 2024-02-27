import express from 'express';
import bodyParser from 'body-parser';
import { log } from 'console';

const port = 3000;
const app = express();

app.set("view-engine","ejs");
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))

let posts = [];
app.get("/",(req,res)=>{
    res.render('index.ejs',{posts: posts});
})

app.get("/newpost",(req,res)=>{
    res.render("newpost.ejs");
})

app.post("/newpost",(req,res)=>{
    const {title,content} =req.body;
    const newPost = {title, content};
    posts.push(newPost);
    res.redirect("/");
    
    // or we could have done like this
    /*const post = {
        title: req.body.title,
        content: req.body.content
      };
      posts.unshift(post);
      */
    // res.render('index', { posts: posts });
})

app.listen(port,()=>{
    console.log(`Server listening to port ${port}`);
})