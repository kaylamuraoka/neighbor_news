const router = require("express").Router();
const auth = require("../middleware/auth");
const {
  register,
  login,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/UserController");

router.post("/register", register);

router.post("/login", login);

router.get("/", auth, getUser);

router.patch("/:id", updateUser);

router.delete("/", auth, deleteUser);

module.exports = router;