const Book = require("../models/Book");

exports.getAllBooks = async (req, res) => {
  try {
    // 1) FILTERING
    let queryObj = { ...req.query }; // create shallow copy of query object
    const excludedFields = ["page", "limit", "fields", "sort"]; // create an array to exclude unrelated fields
    excludedFields.forEach((el) => delete queryObj[el]);

    // Build the query object in the format Mongoose expects
    const newQueryObj = {};
    for (const key in queryObj) {
      if (Object.prototype.hasOwnProperty.call(queryObj, key)) {
        if (key.includes("[") && key.includes("]")) {
          const [field, operator] = key
            .split("[")
            .map((s) => s.replace("]", ""));
          newQueryObj[field] = { [`$${operator}`]: queryObj[key] };
        } else {
          newQueryObj[key] = queryObj[key];
        }
      }
    }

    let query = Book.find(newQueryObj);

    // 2) SORTING

    if (req.query.sort) {
      query = query.sort(req.query.sort);
    } else {
      query = query.sort("-publishedYear");
    }

    // Executing Query
    const books = await query;

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
    const book = await Book.findByIdAndDelete(req.params.id);

    console.log(book);

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
