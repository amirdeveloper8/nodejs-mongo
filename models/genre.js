const mongoose = require("mongoose");
const Joi = require("joi");

genreSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 50,
  },
});

const Genre = new mongoose.model("Genre", genreSchema);

const validateGenre = (body) => {
  const schema = Joi.object({
    name: Joi.string().min(5).max(50).required(),
  });

  const result = schema.validate(body);
  return result;
};

exports.Genre = Genre;
exports.validate = validateGenre;
exports.genreSchema = genreSchema;
