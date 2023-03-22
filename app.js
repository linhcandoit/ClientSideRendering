const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost:27017/ninjaGo").then(() => {
  console.log("connected");
  app.listen(3000);
});

app.use(express.static("./public"));

app.use(bodyParser.json());

app.use("/api", require("./routes/api"));

app.use((error, req, res, next) => {
  res.status(422).send({ error: error });
});
