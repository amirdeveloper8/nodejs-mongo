const mongoose = require("mongoose");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const rentalSchema = mongoose.Schema({
  customer: {
    type: mongoose.Schema({
      isGold: { type: Boolean, required: true },
      name: { type: String, minLength: 5, maxLength: 50, required: true },
      phone: { type: String, minLength: 5, maxLength: 50, required: true },
    }),
    required: true,
  },
  movie: {
    type: mongoose.Schema({
      title: {
        type: String,
        minLength: 5,
        maxLength: 50,
        required: true,
      },
      dailyRentalRate: {
        type: Number,
        min: 0,
        max: 10,
        required: true,
      },
    }),
    required: true,
  },
  dateOut: {
    type: Date,
    required: true,
    default: Date.now,
  },
  dateReturned: {
    type: Date,
  },
  rentalFee: {
    type: Number,
    min: 0,
  },
});

const Rental = new mongoose.model("Rental", rentalSchema);

const validateRental = (body) => {
  const schema = Joi.object({
    movieId: Joi.objectId().required(),
    customerId: Joi.objectId().required(),
  });

  const result = schema.validate(body);
  return result;
};

exports.Rental = Rental;
exports.validate = validateRental;
