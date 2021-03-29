const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookDb = new Schema({
     title: { type: String },
     authors: { type: String },
     description: { type: String },
     image: { type: String },
     link: { type: String }
});

const Book = mongoose.model("Book", bookDb);

module.exports = Book;