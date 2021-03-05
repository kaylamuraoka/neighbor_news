const router= require('express').Router();
const { 
    test,
    getAll,
    postBlog,
    findOne,
    deleteOne,
    updateOne, 
} = require("../controllers/newsController")

router.route("/test").get(test)

router.route("/").get(getAll).post(postBlog);

router.route("/:id").get(findOne).delete(deleteOne).patch(updateOne);

module.exports = router;