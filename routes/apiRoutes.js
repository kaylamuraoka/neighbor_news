const router= require('express').Router();
const { news } = require("../controllers/newsController")

router.get("/test", news)

module.exports = router;