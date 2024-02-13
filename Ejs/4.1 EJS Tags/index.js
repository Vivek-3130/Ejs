const express = require("express");
const port = 3000;
const app = express();

app.set("view engine","ejs");

app.get("/",(req,res)=>{
    const data={
        title: "EJS Tags",
        seconds: new Date().getSeconds(),
        items: ["apple","banana","cherry"],
        htmlcontent: "<em>This is some em text</em>"
    };
    res.render("index",data);
});

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})