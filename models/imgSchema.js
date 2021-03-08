const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    // Creating an image schema
    imageUrl: {
        type: String,
        required: true
    },
});

const User = mongoose.model("user", UserSchema);
​
const Image = mongoose.model(
  "image",
  mongoose.Schema({
    imageUrl: String,
  })
);

module.exports = Image;
