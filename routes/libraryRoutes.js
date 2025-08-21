const express = require("express");
const router = express.Router();

const libraryControllers = require("../controllers/libraryControllers");

router
  .route("/")
  .get(libraryControllers.getAllBooks)
  .post(libraryControllers.createBook);

router
  .route("/:id")
  .get(libraryControllers.getBook)
  .patch(libraryControllers.updateBook)
  .delete(libraryControllers.deleteBook);

module.exports = router;
