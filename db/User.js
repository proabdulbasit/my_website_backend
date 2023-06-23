// const mongoose = require("mongoose");
// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   phoneNumber: String,
//   password: String,
//   confirmPassword: String,
// });
// module.exports = mongoose.model("users", userSchema);

const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  password: String,
});
module.exports = mongoose.model("users", userSchema);
