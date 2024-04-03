const express = require("express");
PORT = process.env.PORT;
const app = express();
const chatRoute = require("./routes/chatRoute");
const cors = require("cors");

app.use(cors());
app.use(express.json());

// use the middleware that routes the requests starts with /api/v1
app.use("/api/v1", chatRoute);

module.exports = app;
