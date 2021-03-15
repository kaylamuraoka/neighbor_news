const router = require("express").Router();
const { confirmUser, deleteUserConfirm } = require("../controllers/confirmController");
const auth = require("../middleware/auth");

router.post("/", confirmUser);

router.delete("/", auth, deleteUserConfirm);

module.exports = router;