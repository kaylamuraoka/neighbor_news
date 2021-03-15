const mongoose = require("mongoose");

const confirmSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
  },
  authorId: {
    type: String,
    required: true,
  },
});

const Confirm = mongoose.model("confirm", confirmSchema);

module.exports = Confirm