const express = require('express')
const {Book}=require('../Models/book.model')
const {Author}= require('../Models/author.model')

const bookController={
    async newBook(req,res){
Book.findOne({name:req.body.name}) 
.then(book=>{ 
    if(book) {
         res.send("the book arleady exist")
        } else{
            let newbie= new Book();
            newbie.name=req.body.name
            newbie.Author=re.body.author
newbie.save()
.then(newbie=>res.send(newbie))
.catch(err => res.status(400).send({success:false,message:"failed to be created"}))
        }
})
    },


    async getAll(req, res) {
        const books = await Book.find()
    
        return res.send(books)
       
      },
      async getById(req, res) {
        Book.findById(req.params.id)
          .then((book) => res.send({ book }))
          .catch((err) => res.status(400).send({ success: false, message: err }));
      },
       async removeBook(req, res) {
         Book.findByIdAndRemove(req.params.id)
         .then(() => res.send({ success: true, message: "book Removed" }))
          .catch(res.status(400).send({ success: false, message: err }));
    },
}