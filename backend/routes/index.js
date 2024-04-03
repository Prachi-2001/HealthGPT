const express = require("express");
const OpenAI = require("openai");
const dotenv = require("dotenv");
const chatRoute = require("./chatRoute");
const signupRoute = require("./signup");

const router = express.Router();
dotenv.config();

router.use("/chat", chatRoute);
router.use("/signup", signupRoute);
