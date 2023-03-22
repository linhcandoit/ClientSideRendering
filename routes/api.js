const express = require("express");
const router = express.Router();
const Ninja = require("../models/ninjaModel");

router.get("/ninja", (req, res) => {
  console.log("some request");
  res.send({ name: "Vu Tuan Linh" });
});

router.post("/ninja", (req, res, next) => {
  const ninja = new Ninja(req.body);
  ninja
    .save()
    .then((result) => {
      res.send({
        method: "POST",
        ...result,
      });
    })
    .catch(next);
});

router.put("/ninja/:id", (req, res) => {
  Ninja.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
    Ninja.findOne({ _id: req.params.id }).then((ninja) => {
      res.send(ninja);
    });
  });
});

router.delete("/ninja/:id", (req, res) => {
  Ninja.findByIdAndDelete({ _id: req.params.id }).then((ninja) => {
    res.send(ninja);
  });
});

module.exports = router;
