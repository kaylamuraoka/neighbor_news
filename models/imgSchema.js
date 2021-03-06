const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const db = 'mongodb://localhost/product-listings';
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to MongoDB ...');
  })
  .catch(err => {
    console.error('Could not Connect to MongoDb !!!', err);
  });
​
const Image = mongoose.model(
  "image",
  mongoose.Schema({
    imageUrl: String,
  })
);

module.exports = Image;
