const express = require("express");

const app = express(); // Create an app object to use methods existing in express

const libraryRoutes = require("./routes/libraryRoutes");

app.use(express.json()); // parse responses in JSON format
// Define BASE route

app.use("/api/v1/books", libraryRoutes);

module.exports = app; // export app to use is server in order to start it
