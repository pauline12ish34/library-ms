const express=require('express')
const {Author}= require('../Models/author.model')
var router = express.Router();


const AuthorController= {
    async newAuthor(req,res){
        Author.findOne({name:req.body.name}).then((auth)=>{

            if (auth) {
                //already exists
                res.status(200).send({ message: "Already exists" });
                return;
              }
              let author= new Author();
              
                  author.title=req.body.title,
                  author.name=req.body.name
                  author.save()
          
              .then (savedAuthor=>res.send(savedAuthor).status(201))
        })
        .catch(err => res.status(400).send({success:false,message:"failed to be created"}))
    },

    async getAll(req, res) {
        const authors = await Author.find()
        return res.send(authors)
        // Author.find()
        //   .then((authors) => res.send({ authors }))
        //   .catch((err) => res.status(400).send({ success: false, message: err }));
      },
      async getById(req, res) {
        Author.findById(req.params.id)
          .then((author) => res.send({ author }))
          .catch((err) => res.status(400).send({ success: false, message: err }));
      },
       async removeAuthor(req, res) {
         Author.findByIdAndRemove(req.params.id)
         .then(() => res.send({ success: true, message: "Removed" }))
          .catch(res.status(400).send({ success: false, message: err }));
    },
};

module.exports=AuthorController