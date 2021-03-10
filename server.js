const express = require("express");
const session = require("express-session");
const app = express();
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const { cloudinary } = require("./utils/cloudinary");

// setup express
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" }));
// Set up static files
app.use(express.static("public"));
app.use(cors());

// setup mongoose
require("./models/connection");

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// setup routes
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

app.use("/", htmlRoutes);
app.use("/", apiRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "public", "index.html"));
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () =>
  console.log(`App running on port: http://localhost:${PORT}`)
);
