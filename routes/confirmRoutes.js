const router = require("express").Router();
const { confirmUser } = require("../controllers/confirmController");

router.post("/", confirmUser);

module.exports = router;