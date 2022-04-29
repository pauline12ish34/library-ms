const express= require('express');
const mongoose=require('mongoose');
require("./apps/Models/mongodb")
var app=express();

 
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/',(req,res)=>{ 
    console.log("Welcome to Our APP");
    res.send("Welcome to our app")
});

app.use("/api/authors", require("./apps/Routes/Author.route"))
app.use("/api/books", require("./apps/Routes/Book.route"))


const port=process.env.PORT || 5000;
app.listen(port,
    console.log(`listening on port succesfully ${port}`)
);