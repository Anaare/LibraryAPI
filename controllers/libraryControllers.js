const Book = require("../models/Book");

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({
      status: "success",
      data: {
        books,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "Books have NOT been fetched",
    });
  }
};

exports.getBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    console.log(book);

    res.status(200).json({
      status: "success",
      data: {
        book,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "Books have NOT been fetched",
    });
  }
};

exports.createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        book,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message:
        "Book has NOT been created. Author, rating or title has not been provided",
    });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        book,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Book has NOT been updated",
    });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    await Book.findIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: {
        books: null,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Book has NOT been updated",
    });
  }
};
