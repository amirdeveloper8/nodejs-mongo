const mongoose = require("mongoose");
const Joi = require("joi");
const { genreSchema } = require("./genre");

const movieSchema = mongoose.Schema({
  title: {
    type: String,
    minLength: 5,
    maxLength: 50,
    required: true,
  },
  genre: {
    type: genreSchema,
    required: true,
  },
  numberInStock: {
    type: Number,
    min: 0,
    max: 100,
    required: true,
  },
  dailyRentalRate: {
    type: Number,
    min: 0,
    max: 10,
    required: true,
  },
});

const Movie = new mongoose.model("Movie", movieSchema);

const validateMovie = (body) => {
  const schema = Joi.object({
    title: Joi.string().min(5).max(50).required(),
    genreId: Joi.string().required(),
    numberInStock: Joi.number().min(0).max(100).required(),
    dailyRentalRate: Joi.number().min(0).max(10).required(),
  });

  const result = schema.validate(body);
  return result;
};

exports.Movie = Movie;
exports.validate = validateMovie;
