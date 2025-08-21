const mongoose = require("mongoose");

// Create Schema

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  genre: String,
  publishedYear: Number,
  rating: {
    type: Number,
    required: true,
  },
});

// Creating a MODEL

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
