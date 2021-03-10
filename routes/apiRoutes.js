const router= require('express').Router();
const Blog = require("../models/blogSchema")
const { 
    blogTest,
    blogGetAll,
    postBlog,
    blogFindOne,
    blogDeleteOne,
    blogUpdateOne, 
} = require("../controllers/newsController")

router.route("/test").delete(blogTest)

router.route("/blog/").get(blogGetAll).post(postBlog);

router.route("/blog/:id").get(blogFindOne).patch(blogUpdateOne).delete(blogDeleteOne);


// router.post('/upload', async (req, res) => {
//     try {
//       const newImage = new Image({
//         imageUrl: req.body.imageUrl
//       });
//       await newImage.save();
//       res.json(newImage.imageUrl);
//     } catch (err) {
//       console.error('Something went wrong', err);
//     }
//   });
//   ​
//   router.get('/product-listings', async (req, res) => {
//     const getImage = await Image.findOne().sort({ _id: -1 });
//     res.json(getImage.imageUrl);
//   });


module.exports = router;