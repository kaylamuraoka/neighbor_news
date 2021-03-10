const router = require("express").Router();
const Blog = require("../models/blogSchema");
const { cloudinary } = require("../utils/cloudinary");
const express = require("express");

const {
  blogTest,
  blogGetAll,
  postBlog,
  blogFindOne,
  blogDeleteOne,
  blogUpdateOne,
} = require("../controllers/newsController");

router.route("/test").delete(blogTest);

router.route("/blog/").get(blogGetAll).post(postBlog);

router
  .route("/blog/:id")
  .get(blogFindOne)
  .patch(blogUpdateOne)
  .delete(blogDeleteOne);

// const app = express();

module.exports = router;
