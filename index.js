const { request } = require("express");
const User = require("./db/User");
const Product = require("./db/Product");
// require("./db/User");
var cors = require("cors");
// require("./db/Config");
var express = require("express");
var cors = require("cors");
var app = express();
app.use(cors());
app.use(express.json());
app.post("/register", async (req, res) => {
  // console.log(req.body)
  app.use(cors());
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  res.send(result);

  // console.log(req.body)
});
app.post("/login", async (req, res) => {
  console.log(req.body);
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      res.send(user);
    } else {
      res.send({ result: "Result not found" });
    }
  } else {
    res.send({ result: "Result not found" });
  }
});

app.post("/add-product", async (req, res) => {
  let product = new Product(req.body);
  let result = await product.save();
  res.send(result);
});
app.get("/products", async (req, res) => {
  let products = await Product.find();
  if (products.length > 0) {
    res.send(products);
  } else {
    res.send({ result: "No products found" });
  }
});
app.delete("/product/:id", async (req, res) => {
  const result = await Product.deleteOne({ _id: req.params.id });
  res.send(result);
  // res.send(req.params.id);
});
app.get("/product/:id", async (req, res) => {
  const result = await Product.findOne({ _id: req.params.id });
  if (result) {
    res.send(result);
  } else {
    res.send({ result: "No products found" });
  }
});
// app.put("/product/:id", async (res, req) => {
//   let result = await Product.updateOne(
//     { _id: req.params.id },
//     {
//       $set: req.body,
//     }
//   );
//   console.log(result);
//   res.send(result);
// });
app.put("/product/:id", async (req, res) => {
  let result = await Product.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  console.log(result);
  res.send(result);
});
app.get("/serach/:key", async (req, res) => {
  let result = await Product.find({
    $or: [
      { name: { $regex: req.params.key } },
      { price: { $regex: req.params.key } },
      { company: { $regex: req.params.key } },
    ],
  });
  res.send(result);
});
app.listen(5000, () => {
  console.log("backend runnig");
}); //server
