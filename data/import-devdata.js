const fs = require("fs");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Book = require("../models/Book");

dotenv.config();

mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("DB connection successfull"));

//   Read JSON file

const books = JSON.parse(fs.readFileSync(`${__dirname}/books.json`, "utf-8"));

// Import data into DB
const importData = async () => {
  try {
    await Book.create(books);
    console.log("Data successfully loaded!");
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

// Delete all data from collection
const deleteData = async () => {
  try {
    await Book.deleteMany();
    console.log("Data successfully deleted!");
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
