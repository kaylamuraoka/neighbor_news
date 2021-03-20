const router = require("express").Router();
const auth = require("../middleware/auth");
const {
  register,
  login,
  getUser,
  deleteUser,
  checkToken,
} = require("../controllers/UserController");

router.post("/register", register);

router.post("/login", login);

router.get("/", auth, getUser);

router.delete("/delete", auth, deleteUser);

router.get("/tokenIsValid", checkToken);

module.exports = router;
