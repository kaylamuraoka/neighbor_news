const router= require('express').Router();
const { 
    blogTest,
    blogGetAll,
    postBlog,
    blogFindOne,
    blogDeleteOne,
    blogUpdateOne, 
} = require("../controllers/newsController")

router.route("/test").delete(blogTest)

router.route("/blog").get(blogGetAll).post(postBlog);

// router.route("/blog/:id").get(blogFindOne).patch(blogUpdateOne).delete(blogDeleteOne);

router.route("/blog/:id").get(function(req,res) {
    res.send(req.params.id)
});

module.exports = router;