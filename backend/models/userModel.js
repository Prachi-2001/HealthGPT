const mongoose = require("mongoose");

// schema structure
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required!"],
  },
  email: {
    type: String,
    required: [true, "name is required!"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required!"],
  },
  role: {
    type: String,
    required: [true, "Password is required!"],
  },
});

// here model takes 2 parameters one is model name in db and 2nd schema for it
const User = mongoose.model("Users", userSchema);

module.exports = {
  User,
};
