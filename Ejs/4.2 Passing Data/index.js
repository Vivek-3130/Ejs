const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",(req,res)=>{
  res.render("index.ejs");
})

app.post("/submit",(req,res)=>{
  const numofletters = req.body["fName"].length + req.body["lName"].length;
  res.render("index.ejs",{numberOfLetters: numofletters});
})

app.listen(port,()=>{
  console.log(`Server running on port ${port}`);
})