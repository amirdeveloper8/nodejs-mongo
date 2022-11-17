const winston = require("winston");
const mongoose = require("mongoose");

module.exports = () => {
  mongoose
    .connect("mongodb://localhost/vidly")
    .then(() => winston.info("connect to MongoDB..."));
};
