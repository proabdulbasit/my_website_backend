const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://proabdulbasit:pakistan@cluster0.rqtw4ix.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
