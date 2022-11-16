const mongoose = require("mongoose");
const Joi = require("joi");

const customerSchema = mongoose.Schema({
  isGold: { type: Boolean, required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
});

const Customer = new mongoose.model("Customer", customerSchema);

const validateCustomer = (body) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    phone: Joi.string().min(3).required(),
    isGold: Joi.boolean().required(),
  });

  const result = schema.validate(body);
  return result;
};

exports.Customer = Customer;
exports.validate = validateCustomer;
