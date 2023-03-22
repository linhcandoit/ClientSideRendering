const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ninjaSchema = new Schema({
  name: {
    type: String,
    require,
  },
  rank: {
    type: String,
  },
  available: {
    type: String,
    default: false,
  },
});

const Ninja = mongoose.model("ninja", ninjaSchema);

module.exports = Ninja;
