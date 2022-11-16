const mongoose = require("mongoose");
const Joi = require("joi");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 5,
    minLength: 50,
  },
  email: {
    type: String,
    required: true,
    minLength: 5,
    minLength: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 5,
    minLength: 1024,
  },
});

const User = new mongoose.model("User", userSchema);

const validateUser = (body) => {
  const schema = Joi.object({
    title: Joi.string().min(5).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(1024).required(),
  });

  const result = schema.validate(body);
  return result;
};

exports.User = User;
exports.validate = validateUser;
