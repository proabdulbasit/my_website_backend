// const mongoose = require("mongoose");
// const productSchema = new mongoose.Schema({
//   name: String,
//   price: String,
//   category: String,
//   userId: String,
//   company: String,
// });
// mongoose.model("products", productSchema);

const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: String,
  price: String,
  category: String,
  company: String,
});
module.exports = mongoose.model("products", productSchema);
