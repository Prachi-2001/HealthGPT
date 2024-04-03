const express = require("express");
const router = express.Router();
const zod = require("zod");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

// zod validation schema
const userSchemaCheck = zod.object({
  name: zod.string(),
  email: zod.string().email(),
  password: zod.string(),
  role: zod.string(),
});

router.post("/signup", async (req, res) => {
  const body = req.body;
  // we checking here the zod validation for that parsing body
  const { success } = userSchemaCheck.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Incorrect Inputs!",
    });
  }

  const existingUser = await User.findOne({
    username: body.username,
  });

  if (existingUser) {
    return res.status(411).json({
      message: "User is already exist!",
    });
  }

  const user = await User.create({
    username: body.username,
    firstname: body.firstname,
    lastname: body.lastname,
    password: body.password,
  });

  const userId = user._id;
  const token = jwt.sign(userId, process.env.JWT_SECRET);
  res.json({
    message: "User created succesfully!",
    token: token,
  });
});

module.exports = router;
