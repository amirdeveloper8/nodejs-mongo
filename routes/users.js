const { User, validate } = require("../models/user");
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already registerd!");

  user = new User({
    email: req.body.email,
    name: req.body.name,
    password: req.body.password,
  });
  await user.save();

  res.send(user);
});

module.exports = router;
