const express = require("express");
const session = require("express-session");
const app = express();
const path = require("path");
const cors = require("cors");
const { cloudinary } = require("./utils/cloudinary");

// setup express
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" }));
// Set up static files
app.use(express.static("public"));
app.use(cors());

app.get("/api/images", async (req, res) => {
  const { resources } = await cloudinary.search
    .expression()
    .sort_by("public_id")
    .max_results(30)
    .execute();

  const publicIds = resources.map((file) => file.public_id);
  res.send(publicIds);
});
app.post("/api/upload", async (req, res) => {
  try {
    const fileStr = req.body.data;
    const uploadResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: "neighbor_news",
    });
    console.log(uploadResponse);
    res.json(uploadResponse);
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: "Something went wrong" });
  }
});

// setup mongoose
require("./models/connection");

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// setup routes
const apiRoutes = require("./routes/apiRoutes");
// const htmlRoutes = require("./routes/htmlRoutes");
const userRoutes = require("./routes/userRoutes");
const confirmRoutes = require("./routes/confirmRoutes");

// app.use("/", htmlRoutes);
app.use("/", apiRoutes);
app.use("/users", userRoutes);
app.use("/confirm", confirmRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "public", "index.html"));
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () =>
  console.log(`App running on port: http://localhost:${PORT}`)
);
