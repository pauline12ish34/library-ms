const mongoose = require("mongoose");

var authorSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
      },
    name: {
      type: String,
      required: true,
    },
    
    created_at: {
      type: Date,
      default: Date.now,
    },
  });

  var author = mongoose.model('Author', authorSchema);
  module.exports.Author = author
